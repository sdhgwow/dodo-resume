import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useThemeStore } from "@/app/providers/themeStore";
import { SunIcon, MoonIcon } from "@/shared/ui/Icons";
import styles from "./ThemeToogle.module.css";

type AnimationVariant = "circle" | "circle-blur" | "wipe";
type StartPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "center";

// константы для анимации переключения темы
const ANIMATION_VARIANT = "circle-blur" as AnimationVariant;
const ANIMATION_START = "top-right" as StartPosition;
const MOBILE_BREAKPOINT = 768;
const X_VALUE_DESKTOP = 26;
const X_VALUE_MOBILE = 21;

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === "dark";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const checkMobile = () => setIsMobile(mediaQuery.matches);
    
    checkMobile();
    mediaQuery.addEventListener("change", checkMobile);
    return () => mediaQuery.removeEventListener("change", checkMobile);
  }, []);

  const xValue = useMemo(() => {
    return isDark ? (isMobile ? X_VALUE_MOBILE : X_VALUE_DESKTOP) : 0;
  }, [isDark, isMobile]);

  // обработчик переключения темы с view transition api
  const handleClick = useCallback(() => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }

    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement("style");
    style.id = styleId;

    // позиции для анимации перехода темы
    const positions: Record<StartPosition, { cx: number; cy: number; origin: string }> = {
      center: { cx: 50, cy: 50, origin: "center" },
      "top-left": { cx: 0, cy: 0, origin: "top left" },
      "top-right": { cx: 100, cy: 0, origin: "top right" },
      "bottom-left": { cx: 0, cy: 100, origin: "bottom left" },
      "bottom-right": { cx: 100, cy: 100, origin: "bottom right" },
    };

    const pos = positions[ANIMATION_START];
    let css = "";

    switch (ANIMATION_VARIANT) {
      case "circle":
        css = `
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-expand 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: ${pos.origin};
          }
          @keyframes circle-expand {
            from {
              clip-path: circle(0% at ${pos.cx}% ${pos.cy}%);
            }
            to {
              clip-path: circle(150% at ${pos.cx}% ${pos.cy}%);
            }
          }
        `;
        break;
      case "circle-blur":
        css = `
          ::view-transition-old(root) { 
            animation: none;
          }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            transform-origin: ${pos.origin};
          }
          @keyframes circle-blur-expand {
            from {
              clip-path: circle(0% at ${pos.cx}% ${pos.cy}%);
              filter: blur(8px);
            }
            to {
              clip-path: circle(150% at ${pos.cx}% ${pos.cy}%);
              filter: blur(0);
            }
          }
        `;
        break;
      case "wipe":
      css = `
        ::view-transition-old(root) {
          animation: none;
        }
        ::view-transition-new(root) {
          animation: ${isDark ? "wipe-in-light" : "wipe-in-dark"} 0.5s ease-out;
        }
        @keyframes wipe-in-dark {
          from {
            clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
        @keyframes wipe-in-light {
          from {
            clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `;
        break;
      default:
        break;
    }

    style.textContent = css;
    document.head.appendChild(style);

    document.startViewTransition(() => {
      toggleTheme();
    });

    setTimeout(() => {
      const styleEl = document.getElementById(styleId);
      if (styleEl) styleEl.remove();
    }, 1000);
  }, [toggleTheme, isDark]);

  return (
    <motion.button
      className={styles.toggle}
      onClick={handleClick}
      whileTap={{ scale: 0.95 }}
      aria-label={`Переключить на ${isDark ? "светлую" : "темную"} тему`}
      title={`Сейчас: ${isDark ? "темная" : "светлая"} тема`}
    >
      <div className={styles.track}>
        <motion.div
          className={styles.thumb}
          animate={{
            x: xValue,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.div>
      </div>
    </motion.button>
  );
};

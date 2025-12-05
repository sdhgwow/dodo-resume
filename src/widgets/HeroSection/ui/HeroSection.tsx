import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LiveMetrics } from "./LiveMetrics";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { LocationIcon, CheckIcon, ArrowRightIcon } from "@/shared/ui/Icons";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  const [displayedRole, setDisplayedRole] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullRole = PERSONAL_INFO.role;

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval: ReturnType<typeof setInterval> | null = null;
    let cursorInterval: ReturnType<typeof setInterval> | null = null;

    // анимация печатания текста
    typingInterval = setInterval(() => {
      if (currentIndex <= fullRole.length) {
        setDisplayedRole(fullRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        if (typingInterval) {
          clearInterval(typingInterval);
          typingInterval = null;
        }
        setCursorVisible(false);
      }
    }, ANIMATION_DURATIONS.typing);

    // мигание курсора
    cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, ANIMATION_DURATIONS.cursor);

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (cursorInterval) clearInterval(cursorInterval);
    };
  }, [fullRole]);

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundPattern}>
        <div className={styles.pizzaPattern} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={ANIMATION_VARIANTS.fadeInLeft.initial}
            animate={ANIMATION_VARIANTS.fadeInLeft.animate}
            transition={{ duration: ANIMATION_DURATIONS.slow }}
          >
            <motion.div
              className={styles.badge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: ANIMATION_DELAYS.section, type: "spring", stiffness: 200 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 800 800"
                fill="none"
              >
                <path
                  d="M639.039 389.514C637.542 384.085 634.917 379.034 631.335 374.691C627.753 370.347 623.296 366.81 618.255 364.309L482.759 297.096L519.131 45.4478C520.327 36.7265 518.616 27.8538 514.263 20.2047C509.91 12.5556 503.158 6.55725 495.053 3.1391C486.948 -0.279051 477.944 -0.92612 469.435 1.29816C460.925 3.52243 453.387 8.49387 447.986 15.4421L168.203 375.511C164.473 380.4 161.92 386.083 160.742 392.12C159.563 398.157 159.791 404.384 161.408 410.318C162.996 416.309 165.952 421.849 170.045 426.501C174.137 431.153 179.253 434.789 184.99 437.123L355.658 505.537L319.286 754.384C318.049 763.316 319.864 772.404 324.434 780.175C329.005 787.945 336.064 793.942 344.466 797.193C349.15 799.137 354.185 800.09 359.255 799.993C365.838 799.959 372.311 798.298 378.098 795.157C383.886 792.016 388.809 787.493 392.429 781.99L632.244 421.92C635.622 417.317 637.976 412.044 639.148 406.454C640.32 400.864 640.283 395.088 639.039 389.514Z"
                  fill="url(#paint0_radial_29_21)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_29_21"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(141 464.028 -265.803 294.516 281.2 276.743)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFFF00" />
                    <stop offset="1" stop-color="#F0C106" />
                  </radialGradient>
                </defs>
              </svg>
              <span>Хочу работать в DODO BRANDS</span>
            </motion.div>

            <h1 className={styles.name}>{PERSONAL_INFO.name}</h1>

            <div className={styles.roleWrapper}>
              <h2 className={styles.role}>
                {displayedRole}
                <span
                  className={`${styles.cursor} ${
                    cursorVisible ? styles.visible : ""
                  }`}
                >
                  |
                </span>
              </h2>
            </div>

            <p className={styles.bio}>{PERSONAL_INFO.bio}</p>

            <div className={styles.qualities}>
              {PERSONAL_INFO.qualities.map((quality, index) => (
                <motion.div
                  key={quality}
                  className={styles.quality}
                  initial={ANIMATION_VARIANTS.fadeInUp.initial}
                  animate={ANIMATION_VARIANTS.fadeInUp.animate}
                  transition={{ delay: ANIMATION_DURATIONS.medium + index * ANIMATION_DELAYS.stagger }}
                >
                  <CheckIcon className={styles.qualityIcon} />
                  {quality}
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.location}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: ANIMATION_DELAYS.long }}
            >
              <LocationIcon className={styles.locationIcon} />
              {PERSONAL_INFO.location}
            </motion.div>

            <motion.div
              className={styles.cta}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              animate={ANIMATION_VARIANTS.fadeInUp.animate}
              transition={{ delay: 1 }}
            >
              <a href="#contact" className={styles.primaryButton}>
                <span>Связаться со мной</span>
                <ArrowRightIcon stroke="#fff" />
              </a>
              <a href="#experience" className={styles.secondaryButton}>
                <span>Посмотреть опыт</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.metricsWrapper}
            initial={ANIMATION_VARIANTS.fadeInRight.initial}
            animate={ANIMATION_VARIANTS.fadeInRight.animate}
            transition={{ duration: ANIMATION_DURATIONS.slow, delay: 0.3 }}
          >
            <LiveMetrics />
          </motion.div>
        </div>
      </div>

      <div className={styles.decorations}>
        <img
          src="/assets/dodobrands.svg"
          alt="Dodo Brands"
          className={styles.dodoBrandsLogo}
        />
        <div className={styles.shapes}>
          <div className={styles.circle} />
          <div className={styles.triangle} />
        </div>
      </div>
    </section>
  );
};

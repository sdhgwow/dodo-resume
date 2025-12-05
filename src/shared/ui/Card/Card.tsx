import type { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "elevated" | "outlined";
  padding?: "sm" | "md" | "lg";
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

// универсальный компонент карточки с поддержкой различных вариантов стилизации
export function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  hover = false,
  onClick,
}: CardProps) {
  const classNames = [
    styles.card,
    styles[variant],
    styles[`padding-${padding}`],
    hover && styles.hover,
    onClick && styles.clickable,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
}

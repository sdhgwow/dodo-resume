import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { ANIMATION_DURATIONS, ANIMATION_VARIANTS } from '@/shared/config/animations';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  badge?: ReactNode;
  title: string;
  subtitle?: string;
  isVisible?: boolean;
  delay?: number;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  isVisible = true,
  delay = 0,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={styles.header}
      initial={ANIMATION_VARIANTS.fadeInUpLarge.initial}
      animate={isVisible ? ANIMATION_VARIANTS.fadeInUpLarge.animate : ANIMATION_VARIANTS.fadeInUpLarge.initial}
      transition={{ duration: ANIMATION_DURATIONS.slow, delay }}
    >
      {badge && <div className={styles.badge}>{badge}</div>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </motion.div>
  );
}


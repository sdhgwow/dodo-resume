import { motion } from 'framer-motion';
import type { TechStackItem } from '@/shared/types';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { getCategoryColor } from '../model/stackData';
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from '@/shared/config/animations';
import styles from './TechCard.module.css';

interface TechCardProps {
  tech: TechStackItem;
  index: number;
  isVisible: boolean;
}

export function TechCard({ tech, index, isVisible }: TechCardProps) {
  const categoryColor = getCategoryColor(tech.category);

  return (
    <motion.div
      className={styles.card}
      initial={ANIMATION_VARIANTS.fadeInUp.initial}
      animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
      transition={{ delay: index * ANIMATION_DELAYS.stagger, duration: ANIMATION_DURATIONS.medium }}
    >
      <div className={styles.header}>
        <div className={styles.iconWrapper} style={{ color: categoryColor }}>
          {typeof tech.icon === 'string' && (tech.icon.endsWith('.svg') || tech.icon.startsWith('/assets/icons/')) ? (
            <img
              src={tech.icon}
              alt={tech.name}
              className={styles.iconImage}
            />
          ) : (
            <span className={styles.icon}>{tech.icon}</span>
          )}
        </div>
        <div className={styles.info}>
          <h4 className={styles.name}>{tech.name}</h4>
          <span 
            className={styles.level}
            style={{ color: categoryColor }}
          >
            {tech.level}%
          </span>
        </div>
      </div>

      <ProgressBar
        value={isVisible ? tech.level : 0}
        color={categoryColor}
        height={6}
        delay={index * 50}
        animated={true}
      />

      <div className={styles.categoryBadge} style={{ backgroundColor: categoryColor }}>
        {tech.category}
      </div>
    </motion.div>
  );
};
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  value: number; // 0-100
  color?: string;
  height?: number;
  animated?: boolean;
  showValue?: boolean;
  delay?: number;
}

// компонент прогресс-бара с поддержкой анимации
export const ProgressBar = ({
  value,
  color = 'var(--color-accent)',
  height = 8,
  animated = true,
  showValue = false,
  delay = 0,
}: ProgressBarProps) => {
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  // анимация заполнения прогресс-бара с задержкой
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [value, animated, delay]);

  return (
    <div className={styles.container}>
      <div 
        className={styles.track} 
        style={{ height: `${height}px` }}
      >
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          animate={{ width: `${displayValue}%` }}
          transition={{ duration: 1, delay: delay / 1000, ease: 'easeOut' }}
          style={{ 
            backgroundColor: color,
            height: `${height}px`,
          }}
        />
      </div>
      {showValue && (
        <motion.span
          className={styles.value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay / 1000 + 0.5 }}
          style={{ color }}
        >
          {Math.round(displayValue)}%
        </motion.span>
      )}
    </div>
  );
};
import { motion } from "framer-motion";
import type { Experience } from "@/shared/types";
import { CalendarIcon, LocationIcon } from "@/shared/ui/Icons";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS } from "@/shared/config/animations";
import styles from "./JobCard.module.css";

interface JobCardProps {
  job: Experience;
  index: number;
  isVisible: boolean;
}

export function JobCard({ job, index, isVisible }: JobCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.card} ${isEven ? styles.left : styles.right} ${
        job.highlight ? styles.highlight : ""
      }`}
      initial={isEven ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
      animate={
        isVisible ? { opacity: 1, x: 0 } : (isEven ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 })
      }
      transition={{ delay: index * ANIMATION_DELAYS.card, duration: ANIMATION_DURATIONS.slow }}
    >
      <div className={styles.timelineDot}>
        {job.highlight && <div className={styles.pulse} />}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{job.role}</h3>
            <h4 className={styles.company}>{job.company}</h4>
          </div>
          {job.highlight && (
            <div className={styles.highlightBadge}>
              <span>⭐</span>
              Ключевая роль
            </div>
          )}
        </div>

        <div className={styles.meta}>
          <span className={styles.period}>
            <CalendarIcon fill="var(--color-accent)" />
            &nbsp;{job.period}
          </span>
          <span className={styles.location}>
            <LocationIcon width={15} height={15} stroke="var(--color-accent)" />
            {job.location}
          </span>
        </div>

        <ul className={styles.achievements}>
          {job.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={
                isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
              }
              transition={{ delay: index * ANIMATION_DELAYS.card + i * ANIMATION_DELAYS.stagger }}
            >
              {achievement}
            </motion.li>
          ))}
        </ul>

        <div className={styles.stack}>
          {job.stack.map((tech) => (
            <span key={tech} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>

        {job.projects && job.projects.length > 0 && (
          <div className={styles.projects}>
            <h5 className={styles.projectsTitle}>Ключевые проекты:</h5>
            {job.projects.map((project) => (
              <div key={project.name} className={styles.project}>
                <strong>{project.name}</strong>
                <span>{project.description}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

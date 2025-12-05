import { motion } from "framer-motion";
import { memo } from "react";
import type { ProjectShowcase } from "../model/projectsData";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: ProjectShowcase;
  index: number;
  isVisible: boolean;
}

export const ProjectCard = memo(function ProjectCard({
  project,
  index,
  isVisible,
}: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{ "--accent-color": project.color } as React.CSSProperties}
    >
      <div
        className={styles.accentBar}
        style={{ backgroundColor: project.color }}
      />

      {project.image && (
        <div className={styles.imageWrapper}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
            loading="lazy"
          />
        </div>
      )}

      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <div className={styles.meta}>
            <span className={styles.company}>{project.company}</span>
            <span className={styles.divider}>•</span>
            <span className={styles.period}>{project.period}</span>
          </div>
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <ul className={styles.achievements}>
        {project.achievements.map((achievement) => (
          <motion.li
            key={achievement}
            initial={{ opacity: 0, x: -10 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ delay: index * 0.15 }}
          >
            {achievement}
          </motion.li>
        ))}
      </ul>

      {project.metrics && project.metrics.length > 0 && (
        <div className={styles.metrics}>
          {project.metrics.map((metric) => (
            <div key={metric.label} className={styles.metric}>
              <span
                className={styles.metricValue}
                style={{ color: project.color }}
              >
                {metric.value}
              </span>
              <span className={styles.metricLabel}>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.stack}>
        {project.stack.map((tech) => (
          <span key={tech} className={styles.techBadge}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.overlay} />
    </motion.div>
  );
});

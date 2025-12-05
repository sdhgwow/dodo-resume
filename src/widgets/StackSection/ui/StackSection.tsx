import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { TechCard } from "./TechCard";
import { stackByCategory, getCategoryLabel } from "../model/stackData";
import { useIntersectionObserver } from "@/shared/lib/hooks/useIntersectionObserver";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import type { TechStackItem } from "@/shared/types";
import styles from "./StackSection.module.css";

type CategoryFilter = "all" | TechStackItem["category"];

const categories: CategoryFilter[] = [
  "all",
  "expert",
  "advanced",
  "familiar",
] as const;

const allStackCount = 
  stackByCategory.expert.length + 
  stackByCategory.advanced.length + 
  stackByCategory.familiar.length;

export function StackSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredStack = useMemo(() => {
    if (activeFilter === "all") {
      return [
        ...stackByCategory.expert,
        ...stackByCategory.advanced,
        ...stackByCategory.familiar,
      ];
    }
    return stackByCategory[activeFilter];
  }, [activeFilter]);

  return (
    <section
      id="stack"
      className={`${styles.section} section`}
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          className={styles.header}
          initial={ANIMATION_VARIANTS.fadeInUpLarge.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUpLarge.animate : ANIMATION_VARIANTS.fadeInUpLarge.initial}
          transition={{ duration: ANIMATION_DURATIONS.slow }}
        >
          <div className={styles.badge}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 800 800"
              fill="none"
            >
              <g clip-path="url(#clip0_29_17)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 514.562C0 507.872 7.04081 503.52 13.0249 506.512L395.975 697.988C398.509 699.254 401.491 699.254 404.025 697.988L786.975 506.512C792.959 503.52 800 507.872 800 514.562V594.438C800 597.847 798.074 600.963 795.025 602.488L404.025 797.988C401.491 799.254 398.509 799.254 395.975 797.988L4.97508 602.488C1.92602 600.963 0 597.847 0 594.438V514.562ZM0 314.562C0 307.872 7.04081 303.52 13.0249 306.512L395.975 497.988C398.509 499.254 401.491 499.254 404.025 497.988L786.975 306.512C792.959 303.52 800 307.872 800 314.562V394.438C800 397.847 798.074 400.963 795.025 402.488L404.025 597.988C401.491 599.254 398.509 599.254 395.975 597.988L4.97508 402.488C1.92602 400.963 0 397.847 0 394.438V314.562ZM395.975 2.01246C398.509 0.745582 401.491 0.745588 404.025 2.01246L783.9 191.95C790.534 195.267 790.534 204.733 783.9 208.05L404.025 397.988C401.491 399.254 398.509 399.254 395.975 397.988L16.0997 208.05C9.46625 204.733 9.46625 195.267 16.0997 191.95L395.975 2.01246Z"
                  fill="url(#paint0_radial_29_17)"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_29_17"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(235 464.028 -443.004 294.516 201.999 276.743)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFAA00" />
                  <stop offset="1" stop-color="#F05206" />
                </radialGradient>
                <clipPath id="clip0_29_17">
                  <rect width="800" height="800" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Технологии</span>
          </div>

          <h2 className={styles.title}>Мой стек технологий</h2>

          <p className={styles.subtitle}>
            Компания, в которой я хочу работать, дает людям открытые и
            прозрачные показатели, потому и я буду честным и открытым :)
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
          transition={{ delay: ANIMATION_DELAYS.section, duration: ANIMATION_DURATIONS.medium }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                activeFilter === category ? styles.active : ""
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category === "all"
                ? "Все"
                : getCategoryLabel(category as TechStackItem["category"])}
              <span className={styles.count}>
                {category === "all"
                  ? allStackCount
                  : stackByCategory[category as TechStackItem["category"]]
                      .length}
              </span>
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filteredStack.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          className={styles.stats}
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
          transition={{ delay: ANIMATION_DELAYS.header, duration: ANIMATION_DURATIONS.medium }}
        >
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {stackByCategory.expert.length}
            </span>
            <span className={styles.statLabel}>Экспертный уровень</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {stackByCategory.advanced.length}
            </span>
            <span className={styles.statLabel}>Продвинутый</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {stackByCategory.familiar.length}
            </span>
            <span className={styles.statLabel}>Знаком</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {Math.round(
                filteredStack.reduce((sum, tech) => sum + tech.level, 0) /
                  filteredStack.length
              )}
              %
            </span>
            <span className={styles.statLabel}>Средний уровень</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

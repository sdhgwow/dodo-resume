import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { showcaseProjects } from "../model/projectsData";
import { useIntersectionObserver } from "@/shared/lib/hooks/useIntersectionObserver";
import { ArrowRightIcon } from "@/shared/ui/Icons";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="projects"
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
              width="18"
              height="18"
              viewBox="0 0 800 800"
              fill="none"
            >
              <g clip-path="url(#clip0_28_11)">
                <path
                  d="M792.183 334.711C784.048 322.736 770.744 315.592 756.583 315.592H320.139C295.836 315.592 274.119 331.195 265.784 354.683L204.75 530.992C202.867 536.439 198.523 540.67 193.025 542.414C187.527 544.147 181.552 543.192 176.881 539.83L167.844 533.327C160.036 527.703 156.822 517.622 159.961 508.522L221.572 328.398C234.3 292.636 267.692 268.595 304.698 268.595H576.372L567.258 239.773C559.5 215.208 537.28 198.587 512.2 198.587H212.483C194.531 198.587 178.214 187.905 170.58 171.172C161.516 151.312 142.109 138.634 120.795 138.634H43.4187C29.5093 138.634 16.4562 145.5 8.27029 157.088C0.110911 168.686 -2.17346 183.611 2.14529 197.231L133.275 623.897C140.33 646.203 161.041 661.367 184.441 661.367H652.319C675.014 661.367 695.275 647.083 702.883 625.692L797.358 375.711C802.227 361.989 800.294 346.687 792.183 334.711Z"
                  fill="url(#paint0_radial_28_11)"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_28_11"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(381 400) rotate(39.3776) scale(411.394 256.941)"
                >
                  <stop stop-color="#FF8000" />
                  <stop offset="0.975862" stop-color="#F01A06" />
                  <stop offset="0.975962" stop-color="#F02106" />
                </radialGradient>
                <clipPath id="clip0_28_11">
                  <rect width="800" height="800" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Портфолио</span>
          </div>

          <h2 className={styles.title}>Избранные проекты</h2>

          <p className={styles.subtitle}>
            Реальные кейсы, которые я разработал от идеи до прода
          </p>
        </motion.div>

        <div className={styles.grid}>
          {showcaseProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          className={styles.cta}
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
          transition={{ delay: ANIMATION_DELAYS.footer, duration: ANIMATION_DURATIONS.medium }}
        >
          <div className={styles.ctaContent}>
            <h3>Хотите увидеть больше?</h3>
            <p>
              У меня есть еще несколько проектов в разработке. Давайте обсудим!
            </p>
          </div>
          <a href="#contact" className={styles.ctaButton}>
            Связаться со мной
            <ArrowRightIcon stroke="var(--color-accent)" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

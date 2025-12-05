import { motion } from "framer-motion";
import { JobCard } from "./JobCard";
import { experienceData, educationData } from "../model/experienceData";
import { useIntersectionObserver } from "@/shared/lib/hooks/useIntersectionObserver";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import styles from "./ExperienceSection.module.css";

export function ExperienceSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      id="experience"
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
              <g clip-path="url(#clip0_29_15)">
                <path
                  d="M706.25 187.5H587.5C587.5 83.9469 503.553 0 400 0C296.447 0 212.5 83.9469 212.5 187.5H93.75C41.9734 187.5 0 229.473 0 281.25V706.25C0 758.027 41.9734 800 93.75 800H706.25C758.027 800 800 758.027 800 706.25V281.25C800 229.473 758.027 187.5 706.25 187.5ZM400 93.75C451.777 93.75 493.75 135.723 493.75 187.5H306.25C306.25 135.723 348.223 93.75 400 93.75ZM628.125 406.25V437.5C628.125 463.389 607.139 484.375 581.25 484.375C555.361 484.375 534.375 463.389 534.375 437.5V406.25H265.625V437.5C265.625 463.389 244.639 484.375 218.75 484.375C192.861 484.375 171.875 463.389 171.875 437.5V406.25C145.986 406.25 125 385.264 125 359.375C125 333.486 145.986 312.5 171.875 312.5H628.125C654.014 312.5 675 333.486 675 359.375C675 385.264 654.014 406.25 628.125 406.25Z"
                  fill="url(#paint0_linear_29_15)"
                />
                <path
                  d="M706.25 187.5H587.5C587.5 83.9469 503.553 0 400 0C296.447 0 212.5 83.9469 212.5 187.5H93.75C41.9734 187.5 0 229.473 0 281.25V706.25C0 758.027 41.9734 800 93.75 800H706.25C758.027 800 800 758.027 800 706.25V281.25C800 229.473 758.027 187.5 706.25 187.5ZM400 93.75C451.777 93.75 493.75 135.723 493.75 187.5H306.25C306.25 135.723 348.223 93.75 400 93.75ZM628.125 406.25V437.5C628.125 463.389 607.139 484.375 581.25 484.375C555.361 484.375 534.375 463.389 534.375 437.5V406.25H265.625V437.5C265.625 463.389 244.639 484.375 218.75 484.375C192.861 484.375 171.875 463.389 171.875 437.5V406.25C145.986 406.25 125 385.264 125 359.375C125 333.486 145.986 312.5 171.875 312.5H628.125C654.014 312.5 675 333.486 675 359.375C675 385.264 654.014 406.25 628.125 406.25Z"
                  fill="url(#paint1_radial_29_15)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_29_15"
                  x1="400"
                  y1="0"
                  x2="400"
                  y2="800"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="1" stop-color="#666666" />
                </linearGradient>
                <radialGradient
                  id="paint1_radial_29_15"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(318 399.439 -163.01 303.957 380.999 399.999)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9900FF" />
                  <stop offset="0.975862" stop-color="#3906F0" />
                  <stop offset="0.975962" stop-color="#3906F0" />
                </radialGradient>
                <clipPath id="clip0_29_15">
                  <rect width="800" height="800" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>Опыт работы</span>
          </div>

          <h2 className={styles.title}>Моё путешествие в разработке</h2>

          <p className={styles.subtitle}>
            От тех. поддержки до ведущего разработчика за 3 года. Каждый проект
            - это большая история моего роста и обучения.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          {experienceData.map((job, index) => (
            <JobCard
              key={`${job.company}-${job.period}`}
              job={job}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <motion.div
          className={styles.education}
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
          transition={{ delay: ANIMATION_DELAYS.footer, duration: ANIMATION_DURATIONS.medium }}
        >
          <div className={styles.educationHeader}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 115 115"
              fill="none"
            >
              <path
                d="M53.8147 41.7231C41.1893 41.8839 0 43.4778 0 57.1917C0 71.9339 47.5635 72.6804 57.0992 72.6804C66.6338 72.6804 114.197 71.9339 114.197 57.1917C114.197 50.6542 105.615 47.6605 99.1611 45.9779C92.1215 44.1422 82.6123 42.8112 72.1132 42.1612C72.2848 44.953 72.4055 47.8224 72.4797 50.7396C91.6652 51.9919 101.812 55.2329 104.932 57.2028C100.707 59.937 84.4174 64.1342 57.0992 64.1342C29.7323 64.1342 13.4337 59.9215 9.24227 57.1884C13.2211 54.573 28.131 50.5977 53.9232 50.2671C56.2797 50.2383 58.1656 48.3005 58.1346 45.9402C58.1047 43.5998 56.2011 41.722 53.8701 41.722C53.8512 41.722 53.8335 41.722 53.8147 41.7231Z"
                fill="url(#paint0_linear_1206_52940)"
              />
              <path
                d="M41.6346 57.1917C41.6346 66.7407 42.3799 114.381 57.0993 114.381C63.6229 114.381 66.6118 105.792 68.2917 99.3296C70.1255 92.2752 71.4555 82.7418 72.1055 72.2178C68.9439 72.4075 66.0204 72.5218 63.541 72.5894C62.2907 91.8105 59.0538 101.977 57.0871 105.103C54.3574 100.869 50.1659 84.5531 50.1659 57.1917C50.1659 29.8016 54.3663 13.48 57.0949 9.26727C59.7149 13.3546 63.7979 28.9364 64.0216 55.0399C64.0415 57.3881 65.9473 59.277 68.2873 59.277H68.3249C70.6803 59.2559 72.574 57.3259 72.554 54.9678C72.4344 41.0087 71.1831 27.9293 69.0303 18.1407C66.3083 5.76447 62.5167 0 57.0993 0C42.3799 0 41.6346 47.6406 41.6346 57.1917Z"
                fill="url(#paint1_linear_1206_52940)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1206_52940"
                  x1="0.000147283"
                  y1="57.1898"
                  x2="114.197"
                  y2="57.1898"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#45C3F3" />
                  <stop offset="0.5" stop-color="#1671C2" />
                  <stop offset="0.959876" stop-color="#2056AE" />
                  <stop offset="1" stop-color="#2056AE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1206_52940"
                  x1="57.0941"
                  y1="114.382"
                  x2="57.0941"
                  y2="0.000149989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2056AE" />
                  <stop offset="0.25" stop-color="#2056AE" />
                  <stop offset="0.280093" stop-color="#2056AE" />
                  <stop offset="0.625" stop-color="#A32B9B" />
                  <stop offset="1" stop-color="#ED1443" />
                </linearGradient>
              </defs>
            </svg>
            <h3>Образование</h3>
          </div>

          <div className={styles.educationContent}>
            <div className={styles.educationMain}>
              <h4>{educationData.institution}</h4>
              <p>{educationData.degree}</p>
            </div>

            <div className={styles.educationMeta}>
              {educationData.status === "learning" && (
                <div className={styles.statusBadge}>
                  <span className={styles.statusDot} />В процессе обучения
                </div>
              )}
              <span className={styles.graduation}>
                Окончание: {educationData.expectedGraduation}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.stats}
          initial={ANIMATION_VARIANTS.fadeInUp.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
          transition={{ delay: ANIMATION_DELAYS.long, duration: ANIMATION_DURATIONS.medium }}
        >
          <div className={styles.statItem}>
            <span className={styles.statValue}>3+</span>
            <span className={styles.statLabel}>Года в IT</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1.5+</span>
            <span className={styles.statLabel}>Года Frontend</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>7</span>
            <span className={styles.statLabel}>Проектов запущено</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>Самостоятельная работа</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

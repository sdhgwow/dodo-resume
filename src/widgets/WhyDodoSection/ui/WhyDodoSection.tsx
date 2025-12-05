import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/shared/lib/hooks/useIntersectionObserver";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import styles from "./WhyDodoSection.module.css";

export function WhyDodoSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="why-dodo"
      className={`${styles.section} section`}
      ref={sectionRef}
    >
      <div className="container">
        <motion.div
          className={styles.content}
          initial={ANIMATION_VARIANTS.fadeInUpLarge.initial}
          animate={isVisible ? ANIMATION_VARIANTS.fadeInUpLarge.animate : ANIMATION_VARIANTS.fadeInUpLarge.initial}
          transition={{ duration: ANIMATION_DURATIONS.slow }}
        >
          <div className={styles.header}>
            <div className={styles.badge}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 -2 32 32"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2627 26.9922L29.2549 16C31.085 14.1699 32 11.9607 32 9.37258C32 6.78442 31.085 4.57528 29.2549 2.74517C27.4247 0.915055 25.2155 0 22.6274 0C20.0392 0 17.8301 0.915055 16 2.74517C14.1699 0.915055 11.9607 0 9.37258 0C6.78442 0 4.57528 0.915055 2.74517 2.74517C0.915056 4.57528 0 6.78442 0 9.37258C0 11.9607 0.915056 14.1699 2.74517 16L13.7373 26.9922C14.9869 28.2418 17.0131 28.2418 18.2627 26.9922Z"
                  fill="url(#paint0_radial_103_1602)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_103_1602"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.07998 9.66157) rotate(59.8757) scale(18.7297 20.4872)"
                  >
                    <stop stop-color="#FFAA00" />
                    <stop offset="1" stop-color="#F05206" />
                  </radialGradient>
                </defs>
              </svg>
              <span>Мотивация</span>
            </div>

            <h2 className={styles.title}>Почему именно Dodo Brands?            </h2>
          </div>

          <div className={styles.mainText}>
            <p className={styles.intro}>
              Я узнал о Dodo Brands от друга, работающего на кухне Додо
              Пиццы. Меня привлекла ваша&nbsp;
              <strong>радикальная прозрачность</strong> — публичные метрики
              продаж, вебкамеры на кухнях, и прочие немаловажные моменты. Это
              именно та культура, которая резонирует с моим подходом к работе.
            </p>

            <p>
              Когда я переписывал <strong>MSK.HOST с нуля</strong>, я был
              нацелен не просто исправить баги — я перестраивал архитектуру,
              писал абсолютно все с чистого листа. Единолично. Потому что{" "}
              <strong>верил в продукт</strong> и хотел, чтобы он был лучшим. Мне
              было важно, чтобы люди, которые увидят мою работу, также поверили
              в продукт, чтобы им было приятно взаимодейстовать с ним
            </p>

            <p>
              В Dodo я вижу масштаб, который мне интересен:{" "}
              <strong>международная компания</strong>, собственная платформа
              Dodo IS, <strong>250+ инженеров</strong>. Хочу решать задачи,
              которые будут делать жизнь людей удобнее, приятнее.
            </p>

            <p>
              И, возможно, одна из ключевых особенностей —{" "}
              <strong>предстоящие задачи</strong>, среди которых редизайн и
              перезапуск нескольких продуктов. Это то, чем я уже занимался
              ранее, что мне близко, знакомо, а также очень интересно. Мне
              нравится <strong>делать что-то новое</strong>, самому строить базу
              и от нее отталкиваться, с командой или без нее.
            </p>
          </div>

          <motion.div
            className={styles.closing}
            initial={ANIMATION_VARIANTS.fadeInUp.initial}
            animate={isVisible ? ANIMATION_VARIANTS.fadeInUp.animate : ANIMATION_VARIANTS.fadeInUp.initial}
            transition={{ delay: ANIMATION_DELAYS.long, duration: ANIMATION_DURATIONS.medium }}
          >
            <blockquote className={styles.quote}>
              "Готов показывать результат. Готов делать, а не воздуханить. Готов
              расти вместе с Dodo."
            </blockquote>

            <div className={styles.signature}>
              <span>— Дмитрий Твардовский</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.decoration}>
        <div className={styles.decorativeBird} />
      </div>
    </section>
  );
}

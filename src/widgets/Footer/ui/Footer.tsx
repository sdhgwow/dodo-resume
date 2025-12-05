import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/shared/config/constants";
import { socialLinks } from "@/shared/config/socialLinks";
import { PhoneIcon } from "@/shared/ui/Icons";
import { ANIMATION_DURATIONS, ANIMATION_DELAYS, ANIMATION_VARIANTS } from "@/shared/config/animations";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.top}>
            <motion.div
              className={styles.info}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATIONS.medium }}
            >
              <h3 className={styles.title}>Давайте работать вместе!</h3>
              <p className={styles.description}>
                С большой радостью готов обсудить возможности сотрудничества.
                <br />
                Если я вас заинтересовал - свяжитесь со мной любым удобным
                способом :)
              </p>

              <div className={styles.contacts}>
                <a
                  href={`tel:${PERSONAL_INFO.contacts.phone}`}
                  className={styles.contact}
                >
                  <PhoneIcon />
                  {PERSONAL_INFO.contacts.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              className={styles.social}
              initial={ANIMATION_VARIANTS.fadeInUp.initial}
              whileInView={ANIMATION_VARIANTS.fadeInUp.animate}
              viewport={{ once: true }}
              transition={{ duration: ANIMATION_DURATIONS.medium, delay: ANIMATION_DELAYS.section }}
            >
              <h4 className={styles.socialTitle}>Соцсети</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                  >
                    <span className={styles.socialIcon}>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className={styles.divider} />

          <div className={styles.bottom}>
            <div className={styles.copyright}>
              <span>
                © {currentYear} {PERSONAL_INFO.name}
              </span>
              <span className={styles.separator}>•</span>
              <span>Сделано с ❤️, 🍕 и ☕️</span>
            </div>

            <div className={styles.meta}>
              <a
                href="https://github.com/sdhgwow/dodo-resume"
                className={styles.openSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 32 32"
                >
                  <title>folder_type_git_opened</title>
                  <path
                    d="M27.4,5.5H18.2L16.1,9.7H4.3V26.5H29.5V5.5Zm0,18.7H6.6V11.8H27.4Zm0-14.5H19.2l1-2.1h7.1V9.7Z"
                    fill="#db847b"
                  />
                  <polygon
                    points="25.7 13.7 0.5 13.7 4.3 26.5 29.5 26.5 25.7 13.7"
                    fill="#db847b"
                  />
                  <path
                    d="M30.6,19.565,21.435,10.4a1.352,1.352,0,0,0-1.913,0l-1.9,1.9,2.415,2.415a1.606,1.606,0,0,1,2.034,2.047L24.4,19.091a1.607,1.607,0,1,1-.964.907L21.26,17.827V23.54a1.606,1.606,0,1,1-1.323-.047V17.727a1.61,1.61,0,0,1-.873-2.11l-2.381-2.381L10.4,19.522a1.353,1.353,0,0,0,0,1.913L19.565,30.6a1.353,1.353,0,0,0,1.913,0L30.6,21.478a1.353,1.353,0,0,0,0-1.913"
                    fill="#dd4c35"
                  />
                  <path
                    d="M17.619,12.3l2.415,2.415a1.606,1.606,0,0,1,2.034,2.047L24.4,19.091a1.607,1.607,0,1,1-.964.907L21.26,17.827V23.54a1.606,1.606,0,1,1-1.323-.047V17.727a1.61,1.61,0,0,1-.873-2.11l-2.381-2.381"
                    fill="#fff"
                  />
                </svg>
                Это резюме, кстати, тоже лежит на гите. Тыкни
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decoration}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
      </div>
    </footer>
  );
}

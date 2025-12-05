import { PERSONAL_INFO } from './constants';
import { GitHubIcon, TelegramIcon, VKIcon } from '@/shared/ui/Icons';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// константы для социальных ссылок в футере
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.contacts.github,
    icon: <GitHubIcon />,
  },
  {
    name: "Telegram",
    url: `https://t.me/${PERSONAL_INFO.contacts.telegram.replace("@", "")}`,
    icon: <TelegramIcon />,
  },
  {
    name: "ВКонтакте",
    url: `https://vk.com/${PERSONAL_INFO.contacts.vk}`,
    icon: <VKIcon />,
  },
];


import { Linkedin, Facebook, Slack } from "lucide-react";

export type ShareConfig = {
  url: string;
  title?: string;
  text?: string;
};

export type SocialProvider = "linkedin" | "facebook" | "slack" | "clipboard";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "Linkedin",
    icon: <Linkedin className="w-4 h-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        config.url
      )}`,
  },

  facebook: {
    name: "Facebook",
    icon: <Facebook className="w-4 h-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        config.url
      )}`,
  },

  slack: {
    name: "Slack",
    icon: <Slack className="w-4 h-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(
        config.url
      )}&text=${encodeURIComponent(config.title || "")}`,
  },
};

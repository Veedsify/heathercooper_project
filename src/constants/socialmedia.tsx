import { Facebook, Instagram, Twitter } from "lucide-react";

export type SocialMediaType = {
     icon: JSX.Element;
     link: string;
}[];

export const socialmedia: SocialMediaType = [
     {
          icon: <Instagram className="text-amber-500" />,
          link: "https://www.instagram.com/iceinvestmentgroup?igsh=a2p6N3IycDQwcWht",
     },
     {
          icon: <Twitter className="text-amber-500" />,
          link: "https://x.com/icegroup2015/status/1844382145177059822",
     },
     {
          icon: <Facebook className="text-amber-500" />,
          link: "https://www.facebook.com/profile.php?id=61566989071414",
     },
];

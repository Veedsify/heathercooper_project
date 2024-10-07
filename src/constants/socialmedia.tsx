import { Facebook, Instagram, Twitter } from "lucide-react";

export type SocialMediaType = {
     icon: JSX.Element;
     link: string;
}[];

export const socialmedia: SocialMediaType = [
     {
          icon: <Instagram className="text-amber-500" />,
          link: "https://instagram.com",
     },
     {
          icon: <Twitter className="text-amber-500" />,
          link: "https://twitter.com",
     },
     {
          icon: <Facebook className="text-amber-500" />,
          link: "https://facebook.com",
     },
];

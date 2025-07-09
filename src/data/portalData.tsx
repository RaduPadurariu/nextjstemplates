// Portal Next.js

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";
import { JSX } from "react";

export const portalNavbar = [
  { id: 1, title: "Home", link: "portalNavbar" },
  { id: 2, title: "Templates", link: "portalTemplates" },
  { id: 3, title: "Technologies", link: "portalTechnologies" },
  { id: 4, title: "Contact", link: "portalFooter" },
];

export const portalTemplatesList = [
  {
    id: 1,
    title: "Fake Login",
    icon: "fas fa-sign-in-alt",
    img: "/images/portal/o1.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, dignissimos nihil tempora officiis, laudantium fuga.",
    link: "/fakelogin",
    color: "group-hover:text-[#5d58f7]",
  },
  {
    id: 2,
    title: "User Posts",
    icon: "fas fa-file-alt",
    img: "/images/portal/o2.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, dignissimos nihil tempora officiis, laudantium fuga.",
    link: "/userposts",
    color: "group-hover:text-[#ef4444] ",
  },
  {
    id: 3,
    title: "Travel",
    icon: "fas fa-plane-departure",
    img: "/images/portal/o3.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, dignissimos nihil tempora officiis, laudantium fuga.",
    link: "/travel",
    color: "group-hover:text-[#22c55e]",
  },

  {
    id: 4,
    title: "Shop",
    icon: "fas fa-shopping-cart",
    img: "/images/portal/o4.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, dignissimos nihil tempora officiis, laudantium fuga.",
    link: "/shop",
    color: "group-hover:text-[#e67e22]",
  },
];

export type TechnologyItem = {
  id: number;
  title: string;
  icon: JSX.Element;
  desc: string;
};

export const portalTechnologiesList: TechnologyItem[] = [
  {
    id: 1,
    title: "Next.js",
    icon: <SiNextdotjs size={50} color="#000" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    title: "TypeScript",
    icon: <SiTypescript size={50} color="#3178C6" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 3,
    title: "Jest",
    icon: <SiJest size={50} color="#C21325" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    icon: <SiTailwindcss size={50} color="#06B6D4" />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

export const portalSocialIcons = [
  {
    id: 1,
    iconClass: "fab fa-facebook-f",
  },
  {
    id: 2,
    iconClass: "fab fa-instagram",
  },
  {
    id: 3,
    iconClass: "fab fa-twitter",
  },
  {
    id: 4,
    iconClass: "fab fa-youtube",
  },
];

export const portalPostsTags = [
  {
    id: 0,
    tag: "App",
  },
  {
    id: 1,
    tag: "Business",
  },
  {
    id: 2,
    tag: "Corporate",
  },
  {
    id: 3,
    tag: "Creative",
  },
  {
    id: 4,
    tag: "Design",
  },
  {
    id: 5,
    tag: "Mobile",
  },
  {
    id: 6,
    tag: "Travel",
  },
];

export const portalBlogCategories = [
  {
    id: 1,
    category: "App Review",
  },
  {
    id: 2,
    category: "Audio Post",
  },
  {
    id: 3,
    category: "Default Post",
  },
  {
    id: 4,
    category: "Uncategorized",
  },
  {
    id: 5,
    category: "Video Post",
  },
  {
    id: 6,
    category: "Website Review",
  },
];

export const portalContactInfo = [
  {
    id: 1,
    info: "Location",
    icon: "fas fa-map-marker-alt",
  },
  {
    id: 2,
    info: "+977 9813253082",
    icon: "fas fa-mobile-alt",
  },
  {
    id: 3,
    info: "example@gmail.com",
    icon: "fas fa-envelope",
  },
];

// Shop

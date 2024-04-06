import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recipeapp from "@/public/recipeapp.png";
import magneto from "@/public/magneto.png";
import ytclone from "@/public/ytclone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /*{
    name: "Experience",
    hash: "#experience",
  }, */
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Full Stack Recipe app",
    description:
      "Recipe app that can search, view, add, and manage favorite recipes. I have used React for the front end, Node.js with Prisma for the back end, and PostgreSQL database.",
    tags: ["Node js", "React js", "PostgreSQL", "Typescript"],
    imageUrl: recipeapp,
  },
  {
    title: "Magneto Online Store demo",
    description:
      "Tested Account creation, Login, Search products, Filter products, Add to cart, and Payouts using Selenium with TestNG.",
    tags: ["Java", "TestNG", "Selenium", "Test cases", "Test automation"],
    imageUrl: magneto,
  },
  {
    title: "YouTube clone",
    description:
      "A simple YouTube clone built using HTML and CSS. This is not a fully functional YouTube clone.",
    tags: ["HTML", "CSS"],
    imageUrl: ytclone,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
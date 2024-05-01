import recipeapp from "@/public/recipeapp.png";
import magneto from "@/public/magneto.png";
import ytclone from "@/public/ytclone.png";
import seleniumCucumber from "@/public/SeleniumCucumber.png";

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

export const projectsData = [
  {
    title: "Cucumber with Selenium ",
    description:
      "A MAVEN project on setting up the Cucumber framework with Selenium in a Page Object Model concept along with the Web driver manager library.",
    tags: ["Selenium", "Cucumber", "Java", "Test Automation"],
    imageUrl: seleniumCucumber,
    link: "https://github.com/nmihiranga/Cucumber-with-selenium-demo"
  },
  {
    title: "Full Stack Recipe app",
    description:
      "Recipe app that can search, view, add, and manage favorite recipes. I have used React for the front end, Node.js with Prisma for the back end, and PostgreSQL database.",
    tags: ["Node js", "React js", "PostgreSQL", "Typescript"],
    imageUrl: recipeapp,
    link: "https://github.com/nmihiranga/Recipe-App"
  },
  {
    title: "Magneto Online Store demo",
    description:
      "Tested Account creation, Login, Search products, Filter products, Add to cart, and Payouts using Selenium with TestNG.",
    tags: ["Java", "TestNG", "Selenium", "Test cases", "Test automation"],
    imageUrl: magneto,
    link: "https://github.com/nmihiranga/Luma-eCommerce"
  },
  {
    title: "YouTube clone",
    description:
      "A simple YouTube clone built using HTML and CSS. This is not a fully functional YouTube clone.",
    tags: ["HTML", "CSS"],
    imageUrl: ytclone,
    link: "https://github.com/nmihiranga/YouTube-clone"
  },
] as const;

export const skillsData = [
  "Java",
  "C++",
  "Selenium",
  "TestNG",
  "Cucumber",
  "Test Automation",
  "Test Cases",
  "HTML",
  "CSS",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Google Cloud",
  "AWS",
  "MySQL",
  "PostgreSQL",
  "PHP",
  "Git",
  "GitHub",
] as const;
import recipeapp from "@/public/recipeapp.png";
import magneto from "@/public/magneto.png";
import ytclone from "@/public/ytclone.png";
import seleniumCucumber from "@/public/SeleniumCucumber.png";
import seleniumPython from "@/public/seleniumPython.png";
import api from "@/public/api.png";
import seleniumBehave from "@/public/seleniumBehave.png";

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
    title: "Selenium Behave BDD",
    description:
      "Selenium Python project consists three main features with ten test scenarios. Used Behave BDD framework with Page Object Model along with Data Driven Test.",
    tags: ["Selenium", "Python", "Behave", "POM", "Allure Report"],
    imageUrl: seleniumBehave,
    link: "https://github.com/nmihiranga/Selenium-BehaveBDD-project"
  },
  {
    title: "API Test Automation",
    description:
      "Built using Java, Maven with Cucumber BDD framework. Automated four Features with seven Scenarios. Used Postman for initial manual testing.",
    tags: ["Java", "Maven", "Cucumber", "Postman"],
    imageUrl: api,
    link: "https://github.com/nmihiranga/API-Test-Automation-Project"
  },
  {
    title: "Selenium Python",
    description:
      "This project streamlines the process of finding accommodations on Booking.com by Automating the process using Selenium with Python.",
    tags: ["Selenium", "Test Cases", "Python", "Test Automation"],
    imageUrl: seleniumPython,
    link: "https://github.com/nmihiranga/SeleniumPython_Project"
  },
  {
    title: "Selenium Cucumber",
    description:
      "A Maven project on setting up the Cucumber BDD framework with Selenium in a Page Object Model concept along with the Web driver manager library.",
    tags: ["Selenium", "Cucumber", "Maven", "Java", "POM"],
    imageUrl: seleniumCucumber,
    link: "https://github.com/nmihiranga/Cucumber-with-selenium-demo"
  },
  {
    title: "Selenium TestNG",
    description:
      "Tested Account creation, Login, Search products, Filter products, Add to cart, and Payouts using Selenium with TestNG.",
    tags: ["Selenium", "TestNG", "Java", "Test cases", "Test automation"],
    imageUrl: magneto,
    link: "https://github.com/nmihiranga/Selenium-TestNG-Project"
  },
  {
    title: "Full Stack Recipe App",
    description:
      "Recipe app that can search, view, add, and manage favorite recipes. I have used React for the front end, Node.js with Prisma for the back end, and PostgreSQL database.",
    tags: ["Node js", "React js", "PostgreSQL", "Typescript"],
    imageUrl: recipeapp,
    link: "https://github.com/nmihiranga/Recipe-App"
  },
  {
    title: "YouTube Clone",
    description:
      "A simple YouTube clone built using HTML and CSS. This is not a fully functional YouTube clone.",
    tags: ["HTML", "CSS"],
    imageUrl: ytclone,
    link: "https://github.com/nmihiranga/YouTube-clone"
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "C++",
  "AWS",
  "GCP",
  "Selenium",
  "Cucumber",
  "Behave",
  "TestNG",
  "Postman",
  "POM",
  "Allure",
  "Maven",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Tailwind",
  "React",
  "Next.js",
  "Node.js",
  "MySQL",
  "PostgreSQL",
  "Git",
  "GitHub",
] as const;
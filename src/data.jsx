import { nanoid } from "nanoid";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaReact, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { TbBrandPython } from "react-icons/tb";
import cozysloth from "./assets/cozysloth.png";
import jobTracking from "./assets/job-tracking.png";
import todoList from "./assets/todo-list.png";
import calculator from "./assets/calculator.png";
import sysInfo from "./assets/s_info_sys.png";

export const links = [
  { id: nanoid(), href: "/", text: "home" },
  { id: nanoid(), href: "/about", text: "about" },
  { id: nanoid(), href: "/projects", text: "projects" },
  { id: nanoid(), href: "/contact", text: "contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <AiOutlineHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <DiJavascript1 className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Java/Spring Boot",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in Java and Spring Boot, building robust and scalable backend systems while leveraging Java's power and Spring Boot's convenience.",
  },
  {
    id: nanoid(),
    title: "Python",
    icon: <TbBrandPython className="h-16 w-16 text-emerald-500" />,
    text: "Proficiency in Python, developing versatile applications and scripts for a wide range of use cases, from data analysis to web development.",
  },
  {
    id: nanoid(),
    title: "SQL",
    icon: <SiMysql className="h-16 w-16 text-emerald-500" />,
    text: "Strong SQL skills, designing and optimizing relational databases, and writing efficient queries to retrieve and manipulate data.",
  },
];
export const projects = [
  {
    id: nanoid(),
    name: "cozy sloth e-commerce",
    img: cozysloth,
    backgroundColor: "#ffe4e6",
    url: "https://cozy-sloth.netlify.app/",
    tech: "HTML CSS javascript react axios",
  },
  {
    id: nanoid(),
    name: "Job Tracking application",
    img: jobTracking,
    backgroundColor: "#82cefd",
    url: "https://job-tracking-yl.netlify.app/",
    tech: "react redux axios",
  },
  {
    id: nanoid(),
    name: "student information system",
    img: sysInfo,
    backgroundColor: "#60a5fa",
    url: "/projects/stu-sys",
    tech: "HTML CSS PHP SQL",
  },
  {
    id: nanoid(),
    name: "ToDo List",
    img: todoList,
    backgroundColor: "#fbcfe8",
    url: "/projects/todo-list",
    tech: "react bootstrap",
  },
  {
    id: nanoid(),
    name: "Basic Calculator",
    img: calculator,
    backgroundColor: "#a7f3d0",
    url: "/projects/calculator",
    tech: "react bootstrap",
  },
];

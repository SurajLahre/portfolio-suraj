import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  Express,
  Mongo,
  lspl,
  arena,
  avish,
  webArena,
  atk,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "React", icon: reactjs },
  { title: "NodeJs", icon: nodejs },
  { title: "Express", icon: Express },
  { title: "MongoDB", icon: Mongo },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Mongo", icon: Mongo },
];

export const experiences = [
  {
    title: "Senior Associate",
    company_name: "Learning Spiral Pvt. Ltd, Raipur, C.G",
    icon: lspl,
    iconBg: "#161329",
    date: "JUNE 2020  - JULY 2022 ( 2-YEAR)",
    points: [
      "Annotated and QC-processed 3D LiDAR data and images for machine learning projects.",
      "Improved annotation efficiency by introducing custom tooling scripts.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "BlueChips Solutions, Bangalore",

    iconBg: "#161329",
    date: "MARCH  2022 - AUG 2022(6 - Month)",
    points: [
      "Built a dynamic website for an NGO using PHP and MySQL.",
      "Collaborated in a team of 3 developers, delivering the project before the deadline.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Arena Animation, Raipur C.G",
    icon: arena,
    iconBg: "#161329",
    date: "AUG - 2022 - MARCH-2025(2 Year 8 months)",
    points: [
      "Developed and maintained responsive full-stack web applications using React, Node.js, and MongoDB.",
      "Redesigned Arena Raipur’s official website, improving mobile performance by 35%.",
    ],
  },

  {
    title: "Senior Developer",
    company_name: "Avish Educom Durg C.G",
    icon: avish,
    iconBg: "#161329",
    date: "MARCH - 2025 - PRESENT",
    points: [
      "Developed and maintained responsive full-stack web applications using React, Node.js, and MongoDB.",
      "Faculty ",
    ],
  },
];

export const projects = [
  {
    name: "Arena Raipur’s official website,",
    description:
      "Web-based platform that allows users to access Course information.and user Can Generate Enqueries throw form section",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "React", color: "yellow-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
    ],
    image: webArena,
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Atk Clothing E-comm Website",
    description:
      "A e commerce Website for a Brand ATK that allows users to shop clothing Product and all ecommerce Features with Redux state management Setup. ",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux-Tolkit", color: "green-text-gradient" },
      { name: "State Management", color: "pink-text-gradient" },
      { name: "ECommerce", color: "pink-text-gradient" },
    ],
    image: atk,
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },

  {
    name: "Masukam Info Tech",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [{ name: "shell", color: "blue-text-gradient" }],
    image: webArena,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
];

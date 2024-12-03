import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import docker from "../assets/docker.png";
import react from "../assets/react.svg";
import nextjs from "../assets/nextjs.svg";
import nestjs from "../assets/nestjs.svg";
import express from "../assets/express.svg";
import typeorm from "../assets/typeorm.svg";
import mysql from "../assets/mysql.svg";
import github from "../assets/github.svg";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Mohammed V C",
    position: "Electrical Engineer, Doha",
    img: "assets/mammu.jpg",
    review:
      "Mubasir was fantastic to work with. He developed a billing app that perfectly suited our needs, with a user-friendly interface and robust functionality. His expertise and attention to detail made the entire process seamless.",
  },
  {
    id: 2,
    name: "Jithin Raj",
    position: "Founder of Techrender",
    img: "assets/jithin.jpg",
    review:
      "As the founder of a company, I’ve had the pleasure of working with an exceptional full-stack developer. He excels in both frontend and backend development, delivering high-quality work consistently. Beyond his technical skills, he’s a great person—reliable, professional, and a true team player.",
  },
  {
    id: 3,
    name: "Mohammed",
    position: "MERN Stack Developer at Techrender",
    img: "assets/mohammed.jpg",
    review:
      "Working alongside my colleague has been an outstanding experience. He brings a perfect balance of frontend and backend expertise, consistently delivering high-quality results. His collaborative approach and problem-solving mindset make him a great asset to any team.",
  },
  {
    id: 4,
    name: "Krishnadas",
    position: "Team Lead at Techrender",
    img: "assets/review4.png",
    review:
      "As a team lead, I’ve had the privilege of mentoring a talented junior developer. He’s highly skilled in both frontend and backend development and demonstrates a strong willingness to learn and grow. His dedication and positive attitude make him a valuable member of our team.",
  },
];

export const myProjects = [
  {
    title: "coDraw - Real-Time Collaborative Drawing Platform",
    desc: "coDraw is an interactive platform that enables users to draw together in real-time while communicating seamlessly. It fosters creativity and collaboration, making it ideal for brainstorming, design, and artistic expression.",
    subdesc:
      "Developed with Next.js, TypeScript, Canvas API, Socket.io, and Tailwind CSS, coDraw offers a smooth, responsive, and engaging experience for multi-user collaboration.",
    href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
    texture: "/textures/project/codrawv.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Html5 Canvas",
        path: "/assets/html.png",
      },
    ],
  },
  {
    title: "eduFlex - Online Learning Platform",
    desc: "eduFlex is an innovative online education platform designed to provide high-quality, accessible learning experiences. Offering a vast library of courses across various domains, it empowers learners to gain new skills and achieve their goals.",
    subdesc:
      "Developed as a robust MERN stack application, eduFlex leverages MongoDB, Express.js, React, and Node.js to ensure seamless performance, scalability, and an engaging user experience.",
    href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/eduflex.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Ract.js",
        path: "assets/reactjs.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "assets/express.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "mongoDB",
        path: "/assets/mongodb.png",
      },
    ],
  },
  {
    title: "Hazi - Dynamic E-Commerce Platform",
    desc: "Hazi is a cutting-edge e-commerce solution that simplifies online shopping for both businesses and customers. Featuring a user-friendly interface and secure transaction handling, it streamlines the buying and selling experience.",
    subdesc:
      "Built using JavaScript, MongoDB, Node.js, and Handlebars (HBS), Hazi ensures a fast, efficient, and highly customizable platform tailored for modern e-commerce needs.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/hazi.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "JavaScript",
        path: "assets/javascript.png",
      },
      {
        id: 2,
        name: "HBS",
        path: "assets/html.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
      {
        id: 4,
        name: "mongoDB",
        path: "/assets/mongodb.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.045,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Techrender",
    pos: "Junior Full stack developer",
    duration: "2024-Jan - Present",
    title:
      "As a Junior Full Stack Developer, I am responsible for developing and maintaining both front-end and back-end features, ensuring seamless integration and high performance across the tech stack.",
    icon: "/assets/techrender.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Brototype",
    pos: "MERN stack developer intern",
    duration: "2022-Dec - 2023-Dec",
    title:
      "During my MERN Stack Developer Internship, I built and optimized full-stack applications using MongoDB, Express, React, and Node.js. I learned numerous new technologies and best practices, and it felt like working in a real company environment, preparing me for future professional challenges.",
    icon: "/assets/brototype.png",
    animation: "clapping",
  },

  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
];

export const technologies = [
  // {
  //   name: "HTML5",
  //   icon: html,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "ReactJS",
    icon: react,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "RTK",
    icon: redux,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "Nest.js",
    icon: nestjs,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "TypeORM",
    icon: typeorm,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "GitHub",
  //   icon: github,
  // },
  {
    name: "Docker",
    icon: docker,
  },
];

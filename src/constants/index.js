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
import GraphQl from "/assets/wordpress-graphql-1-removebg-preview.png"
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
    name: "Vishal Panchal",
    position: "Senior Backend Developer at Alter Office",
    img: "assets/vishal.png",
    review:
      "Rashid is an outstanding full-stack developer and a trusted colleague at Alter Office. He consistently delivers efficient, scalable solutions and collaborates seamlessly across teams. His technical depth and dedication make him a key asset to any project.",
  },
  {
    id: 2,
    name: "Rithul Bathnagar",
    position: "Backend Developer at Alter Office",
    img: "assets/rithul.jpeg",
    review:
      "Working with Rashid at Alter Office has been a great experience. His problem-solving mindset, attention to detail, and ability to work across both frontend and backend make him a reliable and skilled developer. He's truly a valuable teammate.",
  },
  {
    id: 3,
    name: "Amras Hameed",
    position: "Software Engineer",
    img: "assets/amras.jpeg",
    review:
      "Rashid was fantastic to work with. He developed a billing app that perfectly suited our needs, with a user-friendly interface and robust functionality. His expertise and attention to detail made the entire process seamless.",
  },
  {
    id: 4,
    name: "Rezin Saleem",
    position: "Software Developer",
    img: "assets/rezin.jpeg",
    review:
      "As a developer, I’ve had the pleasure of working with an exceptional full-stack developer. He excels in both frontend and backend development, delivering high-quality work consistently. Beyond his technical skills, he’s a great person—reliable, professional, and a true team player.",
  }
];


export const myProjects = [
  {
    title: "GO-CAB - Cab Booking Service",
    desc: "Built a scalable real-time cab booking service using microservices with Node.js, TypeScript, and MongoDB. Integrated Google Maps and Mapbox for location services, Stripe and Razorpay for secure payments, and Google OAuth for seamless authentication. Enabled real-time tracking and chat with Socket.IO, secured authentication with JWT and Firebase, and implemented live photo verification. Developed admin and driver dashboards with React, Tailwind CSS, and Redux Toolkit. Ensured reliability and scalability with Kubernetes, Docker, RabbitMQ, and gRPC, deploying via CI/CD on AWS and Digital Ocean.",
    subdesc:
      "Developed a real-time cab booking service using microservices in a clean architecture.Deployed the solution on Docker and Kubernetes, ensuring scalability and reliability. Integrated CI/CD pipelines for automated deployment and.continuous improvement.",
    href: "https://goocab.site",
    texture: "/textures/project/codrawv.mp4",
    logo: "/assets/gocablogo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/reactjs.png" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 6, name: "NodeJs", path: "/assets/nodejs.png" },
      { id: 4, name: "MongoDb", path: "/assets/mongodb.png" },
      { id: 5, name: "microservice", path: "/assets/microservice.png" },
      { id: 7, name: "Docker", path: "/assets/docker.png" },
    ],
  },
  {
    title: "villageFurni - E-commerce Web App",
    desc: "Developed an e-commerce platform for rustic furniture, powered by Node.js, Express.js, and MongoDB for seamless backend operations. Integrated EJS, CSS, and JavaScript for a sleek, responsive frontend. Deployed on AWS with Nginxfor scalability and reliability.",
    subdesc:
      "Developed as a robust MERN stack application, villagefurni leverages MongoDB, Express.js, React, and Node.js to ensure seamless performance, scalability, and an engaging user experience.",
    href: "https://villagefurni.online/",
    texture: "/textures/project/eduflex.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "HBS", path: "assets/html.png" },
      { id: 2, name: "Express.js", path: "assets/express.svg" },
      { id: 3, name: "Node.js", path: "/assets/nodejs.png" },
      { id: 4, name: "mongoDB", path: "/assets/mongodb.png" },
      { id: 7, name: "Docker", path: "/assets/docker.png" },
    ],
  },
  {
    title: "Real-Time Chat Application - Secure & Scalable Messaging",
    desc: "A dynamic and interactive chat platform designed for seamless real-time communication, featuring secure user authentication, instant messaging, and rich media sharing.",
    subdesc:
      "Built with Node.js, TypeScript, MongoDB, and WebSockets, this application ensures fast, encrypted messaging with a scalable application for a smooth user experience.",
    href: "https://github.com/rashi9551/Real-Time-Chat-Application.git",
    texture: "/textures/project/hazi.mp4",
    logo: "assets/whatsapp1.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "JavaScript", path: "assets/javascript.png" },
      { id: 3, name: "Node.js", path: "/assets/nodejs.png" },
      { id: 4, name: "mongoDB", path: "/assets/mongodb.png" },
    ],
  },
  {
    title: "Real-Time File Processing",
    desc: "Built a full-stack solution to process large log files asynchronously and at scale with real-time insight delivery. Used BullMQ and Redis for job queuing, Supabase for storage, and streaming file uploads.",
    subdesc:
      "Asynchronous log processing pipeline with Node.js microservice, Redis queue, Supabase storage, and a Next.js dashboard for real-time monitoring and uploads.",
    href: "https://github.com/rashi9551/Real-Time-File-Processing.git",
    texture: "/textures/project/logprocess.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#1E1E1E",
      border: "0.2px solid #444",
      boxShadow: "0px 0px 60px 0px #00C8964D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Next.js", path: nextjs },
      { id: 2, name: "Node.js", path: nodejs },
      { id: 3, name: "BullMQ", path:  '/assets/bullmmq-removebg-preview.png'},
      { id: 4, name: "Redis", path: "/assets/redis.jpg" },
      { id: 5, name: "Supabase", path: "/assets/arrow-up.png" },
      { id: 6, name: "Docker", path: docker },
    ],
  },
  {
    title: "Smart Calendar & User Management System",
    desc: "Backend-focused calendar system with secure JWT auth and meeting scheduling. Implements login/logout flows, access control, calendar event CRUD, email notifications, and Redis-based performance enhancements.",
    subdesc:
      "Secure calendar and auth backend using Node.js, TypeScript, JWT, MongoDB, and nodemailer. Supports real-time updates with Socket.IO and robust user session management.",
    href: "https://github.com/rashi9551/Schedulify-Calendar.git",
    texture: "/textures/project/scheduler.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#2D3748",
      border: "0.2px solid #4A5568",
      boxShadow: "0px 0px 60px 0px #667EEA4D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "TypeScript", path: typescript },
      { id: 2, name: "JWT", path: "/assets/project-logo2.png" },
      { id: 3, name: "MongoDB", path: mongodb },
      { id: 6, name: "Redis", path: "/assets/redis.jpg" },
    ],
  },
  {
    title: "BuildTrack – Mini Construction Project Management",
    desc: "A full-stack CRM for managing construction projects. Features include role-based access, project and task management, progress reporting with image uploads, and real-time updates via GraphQL subscriptions.",
    subdesc:
      "Built with NestJS and GraphQL on the backend, and a modern dashboard frontend in Next.js using Apollo Client. Integrated Google/GitHub OAuth, file uploads with Multer, and dynamic role-based dashboards.",
    href: "https://github.com/rashi9551/buildtrack-frontend.git",
    texture: "/textures/project/construction.mp4",
    logo: "/assets/user-profile.png",
    logoStyle: {
      backgroundColor: "#1A202C",
      border: "0.2px solid #2D3748",
      boxShadow: "0px 0px 60px 0px #E53E3E4D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "Next.js", path: nextjs },
      { id: 2, name: "NestJS", path: nestjs},
      { id: 3, name: "GraphQL", path: "/assets/redis.jpg" },
      { id: 4, name: "MongoDB", path: mongodb},
      { id: 5, name: "Multer", path: "/assets/project-logo2.png" },
      { id: 6, name: "Apollo Client", path: "/assets/wordpress-graphql-1-removebg-preview.png" },
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
    name: "The Alter Office",
    pos: "Associative Backend Developer",
    duration: "2024-Sept - Dec",
    title:
      "As a Associative Backend Developer,Developed a CRM ecosystem bridging high-profile events like IPL, ICC World Cup, Koffee with Karan, and Bigg Boss with. brands for selling event inventories (ads, sponsorships).",
    icon: "/assets/alter office.webp",
    animation: "victory",
  },
  {
    id: 2,
    name: "Brototype",
    pos: "MERN stack developer intern",
    duration: "2023-Sept - 2024-Sept",
    title:
      "During my MERN Stack Developer Internship, I built and optimized full-stack applications using MongoDB, Express, React, and Node.js. I learned numerous new technologies and best practices, and it felt like working in a real company environment, preparing me for future professional challenges.",
    icon: "/assets/brototype.png",
    animation: "clapping",
  },
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
  {
    name:"GraphQL",
    icon:GraphQl
    
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

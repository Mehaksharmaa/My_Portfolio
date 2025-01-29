import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    jobit,
    tripguide,
    threejs,
    musiclogo,
    godyn,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML ",
      icon: html,
    },
    {
      name: "CSS ",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
     
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },  
  ];
  
  const experiences = [
    {
      title: "Executive",
      company_name: "Team .EXE",
    icon:godyn,
    
      date: "Jan 2024 - Present",
      points: [
        "Building and managing web applications using React.js and related technologies.",
        "Collaborating with multidisciplinary teams, including designers, product managers, and developers, while independently designing key components of app development projects..",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Music App",
      description:
        " A music application ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "API",
          color: "green-text-gradient",
        },
        // {
        //   name: "Tailwind",
        //   color: "pink-text-gradient",
        // },
       
      ],
      image: musiclogo,
      app_link: "https://651939d3fe7ae235ecf1d095--elaborate-biscotti-c1c7b9.netlify.app/",
      source_code_link: "https://github.com/Akshanshkaushal/React_music_player_app",
    },

    {
      name: "AidSure (Ongoing )",
      description:
        " AidSure is a resource distribution system that uses biometric facial recognition and a fixed dataset to ensure transparent, fair, and efficient allocation of essential aid to refugees while preventing fraud and duplicate claims",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "Js",
          color: "pink-text-gradient",
        },
      ],
      image: css,
      app_link: "https://akshanshkaushal.github.io/Mind-game/",
      source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences,projects };
import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  chatChurm,
  netflix,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  eCommerce,
  pokemon,
  coin,
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Mimcode",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jun 2023 - Still going on",
  },
 
  {
    title: "React Developer",
    company_name: "Mimcode",
    icon: kelhel,
    iconBg: "#333333",
    date: "may 2023 - Still going on",
  }
];

const projects = [
  {
    id: "project-1",
    name: "Chat Churm",
    description:
      "Responsive messaging application I created with Firebase, in this application you can create any room and message with your friends..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chatChurm,
    repo: "https://github.com/umuttasdemir1903/Firebase-Responsive-ChatApp",
    demo: "https://chatchurm.netlify.app",
  },
  {
    id: "project-2",
    name: "Netflix Clone",
    description:
      "Netflix clone project I created with React and various libraries",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    repo: "https://github.com/umuttasdemir1903/NetflixClone",
    demo: "https://clonenetflixxx.netlify.app",
  },
  {
    id: "project-3",
    name: "E-Commerce",
    description: "The e-commerce site I created with React, add the product you want to the basket and continue shopping",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: eCommerce,
    repo: "https://github.com/umuttasdemir1903/E-Commerce-React",
    demo: "https://e-commerceappp.netlify.app",
  },
  {
    id: "project-4",
    name: "Pokemon Guide",
    description: 'Choose from 150 pokemon and start the battle now',
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon,
    repo: "https://github.com/umuttasdemir1903/Pokemon-Guide",
    demo: "https://pokemonguideapp.netlify.app",
  },
  {
    id: "project-5",
    name: "Coin Mania",
    description:
      "This is a demo coin tracking site, you can click on the coin you want and track its increase or decrease.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: coin,
    repo: "https://github.com/umuttasdemir1903/Responsive-Coin-Website-With-Formik-and-MVC",
    demo: "https://coinmaniaa.netlify.app",
  },
];

export { services, technologies, experiences, projects };

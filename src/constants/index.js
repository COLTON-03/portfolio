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
  figma,
  docker,
  starbucks,
  cc,
  cic,
  ld,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lde,
  paisa,
  ff,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical lead Intern",
    company_name: "CHRIST Incubation Centre",
    icon: cic,
    iconBg: "#383E56",
    date: "October 2023 - July 2024",
    points: ["Analyzing data related to the performance of startups within the incubation center and providing recommendations for improvement Using machine learning.",
    "Worked with multiple Entrepreneurs and aided them with Software Maintainance in the their start-ups.",
    "With the help of such softwares and reaching out to potential partners or investors, and helped connect startups tovaluable resource."
    ],
  },
  {
    title: "Student head",
    company_name: "CHRIST Consulting",
    icon: cc,
    iconBg: "#E6DEDD",
    date: "July 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Intern",
    company_name: "Lean Design",
    icon: ld,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Built their company portfolio",
      "Built their employee management application",
      "application to keep track of their projects and their own erp built with team",
    ],
  }
]
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but COLTON proved me wrong.",
    name: "Chahak Bhartiya",
    designation: "Front Office Tech Associate",
    company: "De Shaw",
    image: "https://media.licdn.com/dms/image/D5603AQHm4A5u7M404Q/profile-displayphoto-shrink_200_200/0/1703758830819?e=1717632000&v=beta&t=z_f-9QtYSQmjUaextF8KnuniZInRyW7S_sCRIlZ68ps",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like COLTON does.",
    name: "Aline Basil",
    designation: "Financial Advisor",
    company: "Deloitte",
    image: "https://media.licdn.com/dms/image/C4D03AQEWlMveQmdUiw/profile-displayphoto-shrink_200_200/0/1625210653155?e=1717632000&v=beta&t=Ux1u4cO0bvPONbzJ8tx4rwZJbJb6i2Ke3BGTTP-icCI",
  },
  {
    testimonial:
      "After COLTON optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Jeffrey James",
    designation: "Facility Coordinator",
    company: "Cape Gemini",
    image: "https://media.licdn.com/dms/image/D4D03AQFrGTPLI9ukzQ/profile-displayphoto-shrink_200_200/0/1677540552913?e=1717632000&v=beta&t=En7eerjCUQY6idxBBBfH52WU5oafit-fDV0zFRpt_vI",
  },
];

const projects = [
  {
    name: "Lean Design sample",
    description:
      "Lean Design was an ERP project tailored for a construction company based in Oman, aimed at optimizing their business processes and enhancing operational efficiency. Leading the development efforts, I spearheaded the implementation of an MVC model-based ERP system that addressed the unique requirements of the client.",
    tags: [
      {
        name: "MVC",
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
    image: lde,
    source_code_link: "http://www.leandesign-om.com/",
  },
  {
    name: "PaisaFy",
    description:
      "PaisaFy is a comprehensive digital payment application designed to offer users a seamless and secure financial experience. As a key member of the development team, I contributed to the creation of this platform using Flutter and Firebase technologies.",
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
    image: paisa,
    source_code_link: "https://github.com/CrAcKy-glitch/PaisaFY",
  },
  {
    name: "Fitness fusion",
    description:
      "Application for personal trainers based in dubai from this gym called as fitness fusion to find clients and to reach more visibility",
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
    image: ff,
    source_code_link: "https://fitnessfusionuae.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

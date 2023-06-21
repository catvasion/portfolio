import {
    mobile,
    react,
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
    auxvivres,
    ikea,
    starbucks,
    shopify,
    helmet,
    gandalf,
    cineverse_d,
    cineverse_l,
    luckyshrub,
    threejs,
    chakra,
    github,
    github_nav,
    linkedin_white,
    linkedin,

  } from "../assets";



  export const NavLinks = [

    {
      id: "work",
      title: "Work",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Chakra UI",
      icon: chakra,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const socials = [
    {
      icon: linkedin,
      hover: linkedin_white,
      company: "Linkedin",
      url:"https://www.linkedin.com/in/em-dawson/",
    },
    {
      icon: github_nav,
      hover:github,
      company:"Github",
      url:"https://github.com/catvasion",
    },
  ]
  
  const experiences = [
    {
      title: "Logistics Operations Specialist",
      company_name: "IKEA",
      icon: ikea,
      iconBg: "#005AA9",
      date: "Sept 2022 - March 2023",
      points: [
        "Ensured safe and efficient movement of goods within a high-volume warehouse.",
        "Recorded and tracked shipments using warehouse database systems.",
        "Collaborated with team members to unload trucks and optimize storage space.",
        "Resolved inventory discrepancies and maintained accurate stock levels.",
        "Maintained a zero-accident record, prioritizing safety at all times.",
      ],
    },
    {
      title: "Skateboard Instructor",
      company_name: "Self-employed",
      icon: helmet,
      iconBg: "#00817B",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Managed classes of up to 20 students, providing instruction and guidance in skateboarding techniques.",
        "Developed individualized course plans tailored to each student's skill level and goals.",
        "Worked with high-school students in alternative learning streams, fostering a supportive and inclusive learning environment.",
        "Ensured the safety and well-being of students by creating a safe and welcoming environment.",
        "Handled administrative tasks such as accurately booking and following up with client appointments and producing receipts.",
      ],
    },
    {
      title: "Shift Supervisor",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#326E36",
      date: "Dec 2019 - Jul 2022",
      points: [
        "Fostered a positive work environment by enhancing employee performance and satisfaction through coaching, encouragement, and recognition.",
        "Proactively problem-solved and resolved issues during shifts, ensuring a smooth and enjoyable customer experience.",
        "Managed inventory efficiently, ensuring optimal stock levels and minimizing shortages or excesses.",
        "Demonstrated exceptional customer service skills, resolving a wide range of issues promptly and thoughtfully to ensure customer satisfaction.",
        "Organized inventory and utilized various technologies to streamline operations and maintain accurate records.",
        
      ],
    },
    {
      title: "Shift Supervisor",
      company_name: "Aux Vivres",
      icon: auxvivres,
      iconBg: "#EC3D38",
      date: "Sept 2018 - Aug 2019",
      points: [
        "Proactively addressed and resolved challenges during shifts to maintain a smooth operation.",
        "Implemented effective inventory strategies to optimize stock levels and ensure timely product availability.",
        "Utilized Excel for accurate data entry and maintenance of inventory records.",
        "Created streamlined procedures to enhance operational efficiency and productivity.",
        "Effectively resolved customer service issues, ensuring customer satisfaction and loyalty.",
        
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Entrepreneurial Hub",
      description:
      "Middle-earth's Entrepreneurial Hub, guided by Gandalf, inspires entrepreneurial success. Join us to unlock your business's potential in a world of magic and innovation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "jsx",
          color: "green-text-gradient",
        }
        // 
      ],
      image: gandalf,
      source_code_link: "https://github.com/catvasion/",
    },
    {
      name: "CINEVERSE",
      description:
      "Stay Connected To The Silver Screen: Find movies, TV shows, and video games effortlessly. Customize your experience with dark mode. Dive into the world of entertainment.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "chakra ui",
          color: "pink-text-gradient",
        },
      ],
      image: cineverse_l,
      source_code_link: "https://github.com/catvasion/",
    },
    {
      name: "Lucky Shrub",
      description: "The Lucky Shrub website showcases a garden design firm based in Tucson, Arizona. It offers services in garden design, landscaping, and maintenance. The website presents their expertise in transforming spaces into beautiful and inviting gardens.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        // {
        //   name: "coursera",
        //   color: "pink-text-gradient",
        // },
      ],
      image: luckyshrub,
      source_code_link: "https://github.com/catvasion/",
    },
  ];
  
  export { technologies, socials, experiences, projects };
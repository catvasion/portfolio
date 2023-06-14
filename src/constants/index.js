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
    gandalf_gh,
    jobit,
    tripguide,
    threejs,
    chakra,
  } from "../assets";
  
  export const NavLinks = [
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personl Profile",
      description:
        "Web-based platform that allows users to enter the fantasy world of LOTR.",
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
      image: gandalf_gh,
      source_code_link: "https://github.com/catvasion/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for movies.",
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
      image: jobit,
      source_code_link: "https://github.com/catvasion/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
      image: tripguide,
      source_code_link: "https://github.com/catvasion/",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };
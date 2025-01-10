import {
    mobile,
    backend,
    creator,
    web,
    html,
    css,
    spring,
    django,
    kubernetes,
    aws,
    postgres,
    cpp,
    java,
    git,
    linux,
    python,
    docker,
    handsfree,
    softomatic,
    usc,
    vit,
    cp,
    ericsson,
    llama,
    robot,
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Web/App Developer",
      icon: mobile,
    },
    {
      title: "Backend and DevOps",
      icon: backend,
    },
    {
      title: "Machine Learning and Gen AI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Linux",
      icon: linux,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Master of Science in Computer Science",
      company_name: "University of Southern California",
      icon: usc,
      iconBg: "#E6DEDD",
      date: "June 2024 - December 2025",
      points: [
        "GPA: 3.76/4.0",
        "Relevant coursework: Analysis of Algorithms, Information Retrieval and Web Search, Robotics, Machine Learning, Applied NLP, Database Systems.",
      ],
    },
    {
      title: "SDE II",
      company_name: "Ericsson Enterprise Wireless Solutions (formerly Cradlepoint)",
      icon: ericsson,
      iconBg: "#E6DEDD",
      date: "April 2024 - June 2024",
      points: [
        "Enhanced enterprise connectivity by delivering tailored private cellular network solutions within the NetCloud Private Network (NCPN) team.",
        "Boosted system performance by 25% and ensured platform stability by leading the legacy codebase overhaul.",
        "Achieved a 90% reduction in data processing latency by integrating Kafka messaging queues and Redis caches, enabling near-real-time analytics."
      ],
    },
    {
      title: "SDE I",
      company_name: "Ericsson Enterprise Wireless Solutions (formerly Cradlepoint)",
      icon: ericsson,
      iconBg: "#E6DEDD",
      date: "June 2022 - April 2024",
      points: [
        "Built a high-performance API ecosystem with independent authentication and authorization architecture, enhancing security and efficiency for client applications.",
        "Developed a proprietary service for NetCloud On-Prem Solutions, improving device management on air-gapped systems and increasing operational reliability.",
        "Led the development of novel data access and device management solutions for enterprise clients, generating new revenue streams.",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Ericsson Enterprise Wireless Solutions (formerly Cradlepoint)",
      icon: cp,
      iconBg: "#E6DEDD",
      date: "January 2022 - June 2022",
      points: [
        "Streamlined operational workflows for large-scale clients, automating the management of 10,000+ devices.",
        "Designed robust unit/system tests and resolved 35+ critical bugs across multiple codebases to enhance platform reliability and ensure high-quality software deployments.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Softomatic",
      icon: softomatic,
      iconBg: "#E6DEDD",
      date: "March 2021 - May 2021",
      points: [
        "Engineered a cross-platform mobile application for cooperative societies using Ionic, now live on the Play Store as Dear Society.",
        "Focused on front-end design and user interface development, creating a seamless experience for users.",
      ],
    },
    {
      title: "B.Tech in Computer Science and Engineering",
      company_name: "VIT Vellore",
      icon: vit,
      iconBg: "#E6DEDD",
      date: "July 2018 - May 2022",
      points: [
        "GPA: 3.74/4.0",
        "Relevant coursework: Data Structures, Algorithms, Object Oriented Programming, Information Security, Operating Systems, Computer Networks, Database Management Systems, Software Engineering.",
      ],
    }
  ];

  const achievements = [
    {
      title: "Cradlepoint Spot Award Exemplary Performance",
      date: "2022",
    },
    {
      title: "Events Head for IEEE Computer Society - VIT",
      date: "2021-2022",
    },
    {
      title: "Udacity AWS Machine Learning Scholarship",
      date: "2021",
    },
    {
      title: "Top 10 finalist at Zeta Hack 3.0 (out of 3000)",
      date: "2021",
    },
    {
      title: "Finalist and Coding Contest Winner - HackOff v2.0",
      date: "2019",
    }
  ];
  
  const projects = [
    {
      name: "LocalMind",
      description:
        "Custom RAG-LLM system using Llama3 to deliver fast, context-aware query response. It empowers users to upload data, tailoring the query context for local, highly relevant results without an external API.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "llama3",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: llama,
      source_code_link: "https://github.com/ayushroy64/localmind",
    },
    {
      name: "Facial Gesture-Based Hands-Free Control",
      description: "A hands-free system using real-time facial landmark detection to enable mouse control through gestures, providing an accessible solution for people with limitations.",
      tags: [
        {
          name: "opencv",
          color: "blue-text-gradient",
        },
        {
          name: "pyautogui",
          color: "green-text-gradient",
        },
        {
          name: "dlib",
          color: "pink-text-gradient",
        },
      ],
      image: handsfree,
      source_code_link: "https://github.com/ayushroy64/HandsfreeMouseControl",
    },
    {
      name: "SPARTA-6 Robot Arm Manipulator",
      description:
        "Developed a 6-DOF robotic arm manipulator using ROS and Adapy, capable of picking and moving objects in 3D space, leveraging RRT and TSR algorithms for efficient path planning and precise manipulation.",
      tags: [
        {
          name: "adapy",
          color: "blue-text-gradient",
        },
        {
          name: "ros",
          color: "green-text-gradient",
        },
        {
          name: "rrt",
          color: "pink-text-gradient",
        },
      ],
      image: robot,
      source_code_link: "https://github.com/ayushroy64/robot-arm",
    },
  ];
  
  export { services, technologies, experiences, projects, achievements };
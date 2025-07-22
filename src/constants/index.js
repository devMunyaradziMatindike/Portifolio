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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  anold,
  ngoni,
  rose,
  robot,
  covid,
  kuka,
  pointofsales,
  schools,
  solidworks,
  matlab
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
    title: "Robotics Research Scientist",
    icon: web,
  },
  {
    title: "C# Backend Developer",
    icon: mobile,
  },
  {
    title: "Software Architect",
    icon: backend,
  },
  {
    title: "Machine Learning enthusiast",
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
    title: "Intern Software Engineer",
    company_name: "Axis Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2021 - October 2022",
    points: [
      "Integrating point of sales systems with fiscal API’s to allow communication between revenue authority & taxpayer companies",
"Creating documentation & user manuals for programs developed for user",
"Testing the programs using unit testing & Postman to validate & verify functionality of API",
"Designed and developed a point of sale system for tax payers using N-tier Architecture compliant with revenue collection authorities for use by retail shops",
"Designed and developed a program for picking Invoice Amount/Invoice Tax & Invoice Total on tax invoice receipts with low-code activity for the end-user",
"Hosting fiscal programs using Azure Cloud & IIS for retail shops",
"Debugging & troubleshooting client bugs in hosted software providing immediate solutions e.g. annual license expiry, receipt customization.",
"Designed and developed using .NET framework a program for checking licensing of fiscal licenses.",
"Designed and developed using .NET framework a program for automatic printing of barcodes of a local bakery",
"Writing user documentation for fleet management system & carrying out user acceptance testing.",
"Version control using GitHub & bitbucket for managing code bases",
"Responsible for appropriately assisting retailers with Point Of Sales to design their receipts to align with our RevMax API responsible for recording taxable transactions to record to revenue collection authority electronically",
"Design and configuration of web service for revenue collection with clients who sell on Web using Internet Information Services(IIS)",
"Used SQLite to renew customer licenses by updating timestamps through writing scripts to extend period",
"Integrating dynamic link library API with other Point Of Sale systems using OOP principles"
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Axis Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Optimized synchronization engine performance by introducing stored procedures in online payments system, resulting in a significant reduction in data transfer latency from local servers to the online database SQL –Server",
      "Converted PHP programs to N-tier Architecture for improved scalability and streamlined development to C#",
      "Designed API for revenue collection web application using CLEAN architecture for wildlife company revenue collection",
      "Design of database schema and hosting on Smarter asp.net for wildlife company data",
      "Testing REST API endpoints and creation of API documentation using Postman for including request parameters, responses, and error handling",
      "Design , development of WhatsApp chatbot using Messagebird and integration of payment gateways {Paynow & Contipay} to allow customers pay, view balances and get bill statements",
      "Development of worker services applications using C# that sync transactions from online Payments to local database using ODBC drivers",
      "Azure DevOps for project documentation, task tracking & version control",
      "Integrating Serilog for creation of logs for exception documentation and error logs in worker server applications",
      "Leveraging Dapper for database querying and data mapping in .NET to execute transaction and account SQL queries, implementing parameterized queries, preventing SQL injection vulnerabilities.",
      "Utilized Ngrok  to expose localhost endpoints, enabling external access for testing and debugging API requests in a real-time environment."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Munya Matindike is a young software engineer who thrives for excellence. He has solved some of the most pressing software problems particulary in the public sector in Zimbabwe",
    name: "Anold Kupara",
    designation: "Systems Administrator",
    company: "Axis Solutions",
    image: anold,
  },
  {
    testimonial:
      "I came to know Munya in 2021, and his work ethic and team work is exceptional. I bet any team member would want to work with him.",
    name: "Ngonidzashe Jinjika",
    designation: "Software Engineer",
    company: "Axis Solutions",
    image: ngoni,
  },
  {
    testimonial:
      "Munya is a good researcher and his research capabilities are on point",
    name: "Rose Shumba",
    designation: "Chairperson Computer Science",
    company: "Bowie State University",
    image: rose,
  },
];

const projects = [
  {
    name: "Modular robot",
    description:
      "Design of a Modular Snake Robot with Computer Vision for Real-Time Navigation in Mine Collapse Search & Rescue Operations",
    tags: [
      {
        name: "SolidWorks",
        color: "blue-text-gradient",
      },
      {
        name: "MATLAB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: robot,
    source_code_link: "https://munyaradzimatindike.faculty.bio/",
  },
  {
    name: "Student-final grade prediction",
    description:
      "Improving Student Grade Prediction: Machine Learning Algorithm Comparison with Enhanced Parameters and Datasets",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Covid-19 Doctor",
    description:
      "Deep Learning Web Application for Distinguishing COVID-19 Virus from Pneumonia Positive Patients from MRI Scans: COVID-19, Pneumonia Positive, and No Pneumonia Classes",
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
    image: covid,
    source_code_link: "https://github.com/",
  },

  {
    name: "EcoMotion",
    description:
      "Energy-Efficient Design and Control Mechanisms for Mechatronic Systems: An Optimization Approach",
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
    image: kuka,
    source_code_link: "https://github.com/",
  },

  {
    name: "RetailPOS",
    description:
      "Tailor designed Point of Sale with Multi-Currency capability to suit Zimbabwe economy landscape. Can be integrated with any Fiscal API for tax compliance purposes.",
    tags: [
      {
        name: "VB.NET",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "SQL Server",
        color: "pink-text-gradient",
      },
    ],
    image: pointofsales,
    source_code_link: "https://github.com/",
  },

  {
    name: "School Management System",
    description:
      "An holistic system that allows in real time teachers, students & parents to converge using mobile phone.",
    tags: [
      {
        name: "Android",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: schools,
    source_code_link: "https://github.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };

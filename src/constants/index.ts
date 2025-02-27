import { tecnm, composabel, crncy, feedmill } from "@/assets";

export const experiences = [
    {
      title: "Frontend Engineer (Remote)",
      company_name: "Composable Corp.",
      location: "Texas",
      icon: composabel,
      iconBg: "#FFFFFF",
      date: "Feb 2024 - Present",
      points: [
        "Designed and implemented a Web3 TypeScript SDK (software development kit) providing seamless integration with the StakeUp Protocol, simplifying interaction with blockchain-based smart contracts.",
        "Designed and developed a user-friendly interface for a platform offering near U.S. Treasury bill lending rates for USDC, facilitating secure and efficient DeFi integration.",
        "Contributed to the development of Blueberry, a decentralized, permissionless marketplace enabling delta-neutral DeFi strategies with up to 25x leverage.",
      ],
    },
    {
      title: "Sr Software Developer (Office)",
      company_name: "CRNCY Group",
      location: "Belize",
      icon: crncy,
      iconBg: "#FFFFFF",
      date: "July 2022 - Feb 2024",
      points: [
        "Led the development of a website for debit card payments using React.js and Node.js to build an API proxy to interact with the payment processor gateway.",
        "Successfully automated the Loan adjudication process by building an API and connecting it to Power Automate.",
        "Developed an internal dashboard for managing online and phone-based loan applications using React.js, Node.js, and MongoDB.",
        "Designed and developed Python-based automation solutions to streamline business processes, reducing manual effort and increasing efficiency.",
      ],
    },
    {
      title: "Full Stack Developer (Office)",
      company_name: "Reimer's Feed Mill",
      location: "Belize",
      icon: feedmill,
      iconBg: "#FFFFFF",
      date: "Feb 2022 - June 2022",
      points: [
        "Contributed to the client-side development of a dynamic eCommerce platform using React.js, enhancing user experience and responsiveness.",
        "Implemented a RESTful API with Node.js and Express, ensuring efficient data flow and seamless integration between the frontend and backend system.",
      ],
    },
    {
      title: "Software Engineer (Office)",
      company_name: "Internship",
      location: "Mexico",
      icon: tecnm,
      iconBg: "#FFFFFF",
      date: "Sept 2021 - Dec 2021",
      points: [
        "Designed and coded of artificial neural network with Python for automating the process of identifying information system vulnerabilities at the Macro-company level.",
        "Integrated Keras library allowing fast classification of vulnerabilities.",
      ],
    },
  ];

  export default experiences;
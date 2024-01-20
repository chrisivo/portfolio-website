import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import competencyiqImg from "@/public/CompetencyIQ-2.png";
import hansImg from "@/public/hans-1.png";
import pdiImg from "@/public/pdi-1.png";
import recoImg from "@/public/reco-2.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Software Developer",
    location: "Liverpool, UK",
    description:
      "Worked as an application developer for a satellite communications company",
    icon: React.createElement(CgWorkAlt),
    date: "1998",
  },
  {
    title: "Software Developer",
    location: "Liverpool, UK",
    description:
      "Worked as an application developer for another satellite communications company",
    icon: React.createElement(CgWorkAlt),
    date: "1999 - 2001",
  },
  {
    title: "Lead Software Engineer",
    location: "Bangkok, Thailand",
    description:
      "Now working as the lead engineer for another satellite communications company based in South-East Asia",
    icon: React.createElement(CgWorkAlt),
    date: "2001 - 2007",
  },
  {
    title: "Lead Software Engineer",
    location: "Bangkok, Thailand",
    description:
      "Working as the lead engineer for a service provider for oil & offshore industries in South-East Asia",
    icon: React.createElement(CgWorkAlt),
    date: "2007 - 2012",
  },
  {
    title: "Graduated University",
    location: "Liverpool, UK",
    description:
      "Graduated with an MSc in Software Engineering (online degree) at Liverpool University in the UK",
    icon: React.createElement(LuGraduationCap),
    date: "2012",
  },
  {
    title: "Contract Software Engineer",
    location: "Liverpool, UK",
    description:
      "Worked at several contract postions in the UK, including Bet365 and WebMedia360",
    icon: React.createElement(CgWorkAlt),
    date: "2012 - 2015",
  },
  {
    title: "CompetencyIQ",
    location: "Liverpool, UK",
    description:
      "Developed the CompetencyIQ solution for use by multinational energy companies",
    icon: React.createElement(FaReact),
    date: "2015 - 2019",
  },
  {
    title: "Contract Software Engineer",
    location: "Liverpool, UK",
    description:
      "Worked as a contract/freelance software engineer for multiple companies, including a UK-based global security services company",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Re-Cognition",
    description:
      "An AI-driven Competency Management system, specifically designed for multinational energy companies, aimed to significantly amplify their operational effectiveness, adherence to safety norms, flexibility, and strategic evolution, utilising sophisticated analytics and automation to enhance workforce understanding and facilitate dynamic skill enhancement.",
    tags: [
      ".NET Core",
      "React",
      "Next.js",
      "C#",
      "TypeScript",
      "Event Store",
      "MySQL",
      "AWS",
      "OpenAI API",
      "Tailwind",
    ],
    imageUrl: recoImg,
  },
  {
    title: "Equilibria PDI",
    description:
      "An aptitude and personality assessment tool, offering a detailed and unbiased method for comprehending and managing human resources, essential for the success of any organisation.",
    tags: [
      ".NET Core",
      "C#",
      "Angular",
      "TypeScript",
      "SQL Server",
      "JQuery",
      "Bootstrap",
      "Azure",
    ],
    imageUrl: pdiImg,
  },
  {
    title: "Project Hans",
    description:
      "A web-based algorithmic cryptocurrency trading studio, allowing users to create, backtest and run automatic trading algorithm on the various cryptocurrency trading markets provided by Binance.",
    tags: ["Python", "Flask", "Docker", "Angular", "Bootstrap"],
    imageUrl: hansImg,
  },
  {
    title: "CompetencyIQ",
    description:
      "A Competency Management system system tailored for multinational energy corporations significantly boosts their operational effectiveness, safety protocols, adaptability, and strategic progression.",
    tags: [
      ".NET Framework",
      "C#",
      "SQL Server",
      "AngularJS",
      "JQuery",
      "Bootstrap",
      "Azure",
    ],
    imageUrl: competencyiqImg,
  },
] as const;

export const skillsData = [
  "C#",
  ".NET Core",
  "JavaScript",
  "TypeScript",
  "SQL Server",
  "MySQL",
  "React",
  "Next.js",
  "Angular",
  "Python",
  "Git",
  "Tailwind",
  "AWS",
  "Azure",
  "Docker",
  "T-SQL",
  "JQuery",
  "Bootstrap",
] as const;

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function About() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! I&apos;m Chris, a seasoned Freelance Software Engineer with an
        MSc in Software Engineering and over 25 years of experience in the tech
        industry. My journey is fueled by a deep passion for technology and
        innovation. Currently, I specialize in architecting and developing
        cutting-edge applications across various platforms, with a particular
        emphasis on .
        <span className="font-medium">NET Core and React (Next.js)</span>. My
        skill set encompasses proficiency in both SQL-based{" "}
        <span className="font-medium">
          Relational Database Management Systems
        </span>{" "}
        and modern <span className="font-medium">document databases</span> like
        MongoDB and DynamoDB, as well as experience in implementing robust and
        scalable <span className="font-medium">event-sourced</span> data storage
        approaches for time-sequenced data handling. Currently, I’m dedicated to
        finding the most cost-effective hosting solutions for these technologies
        on cloud platforms, particularly <span className="underline>">AWS</span>
        , ensuring high performance and efficient resource utilization.
      </p>

      <p className="mb-3">
        When the computers power down, I enjoy being outdoors. I often spend
        weekends <span className="italic">hill walking</span> with my wife and
        daughter. <span className="italic">Cycling</span> through Wales allows
        me to CTRL+ALT+DEL my mind ready for the week ahead (yes, I must be
        running an old OS up there!). I also enjoy the occasional dabble in
        <span className="italic">electronic music production</span>, and
        currently have a daily evening routine involving{" "}
        <span className="italic">playing chess</span> with my daughter.
      </p>

      <p>
        I&apos;m always eager to tackle new challenges and collaborate on
        exciting projects.{" "}
        <Link
          href="#contact"
          className="underline"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let&apos;s connect
        </Link>{" "}
        and create something extraordinary together.
      </p>
    </motion.section>
  );
}

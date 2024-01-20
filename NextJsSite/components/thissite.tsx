"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function ThisSite() {
  const { ref } = useSectionInView("This Site");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="thissite"
    >
      <SectionHeading>This Site</SectionHeading>
      <p className="mb-3">
        This site is my{" "}
        <a
          className="underline"
          href="https://github.com/chrisivo/portfolio-website"
        >
          fork
        </a>{" "}
        of the excellent{" "}
        <a
          className="underline"
          href="https://github.com/ByteGrad/portfolio-website"
        >
          portfolio-website
        </a>{" "}
        created by
        <a className="underline" href="https://github.com/ByteGrad">
          ByteGrad
        </a>
        . Rather than using Vercel, however, it has been hosted directly on AWS
        using the rather ace{" "}
        <a className="underline" href="https://sst.dev">
          SST toolkit
        </a>
        . The code for which can be found in{" "}
        <a
          className="underline"
          href="https://github.com/chrisivo/portfolio-website/tree/master/chrisiveson-sst"
        >
          my fork
        </a>{" "}
        of the{" "}
        <a
          className="underline"
          href="https://github.com/ByteGrad/portfolio-website"
        >
          portfolio-website repository
        </a>{" "}
        on GitHub.
      </p>
    </motion.section>
  );
}

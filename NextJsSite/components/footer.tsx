import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Chris Iveson (as a fork of{" "}
        <a
          className="underline"
          href="https://github.com/ByteGrad/portfolio-website"
        >
          portfolio-website
        </a>
        ). All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, hosted on{" "}
        <a className="underline" href="https://aws.amazon.com/">
          AWS
        </a>{" "}
        using{" "}
        <a className="underline" href="https://sst.dev">
          SST
        </a>
        .
      </p>
    </footer>
  );
}

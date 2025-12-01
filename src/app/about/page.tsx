import React from "react";
import Experience from "./experience";
import AboutMe from "./me";
import Footer from "../home/footer";

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      <Experience />
      <AboutMe />
      <Footer />
    </div>
  );
}

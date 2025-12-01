import React from "react";
import Main from "./main";
import Skills from "./slider";
import Portfolio from "./portofolio";
import Footer from "./footer";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Main />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

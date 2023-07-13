import "bootstrap/dist/css/bootstrap.min.css";
import FProjects from "./components/Features/projs/FProjects";
import Navigation from "./components/Nav/Nav";
import FProducts from "./components/Features/prods/FProducts";
import React from "react";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Header from "./components/Headers/Header";
import HeaderLight from "./components/Headers/HeaderLight";
import Navbar from "./components/Nav/Main Nav/Navbar";

const headersArray = [
  { title: "Popular Stones" },
  { title: "Featured Projects" },
  { title: "Featured " },
];

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <Navbar/> */}

      <Header title={headersArray[0].title} />
      
      <FProducts />
      <div className="fprojs">
        <HeaderLight title={headersArray[1].title} />
        <FProjects />
      </div>


      <Header title={headersArray[2].title} />

      <FProjects />
      <Footer />
    </>
  );
}

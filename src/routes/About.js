import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/8.jpg";
import {Form} from "react-router-dom";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About us"
        btnClass="hide"
      />
        <AboutUs />
        <Footer />
    </>
  );
}

export default About;

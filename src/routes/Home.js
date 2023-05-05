import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/15.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Let us inspire you"
        text="every place is beautiful, depends on how you look at it"
        buttonText="Plan"
        url="/"
        btnClass="show"
      />
        <Destination />
        <Trip />
        <Footer />
    </>
  );
}

export default Home;

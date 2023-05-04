import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/15.jpg";

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
    </>
  );
}

export default Home;

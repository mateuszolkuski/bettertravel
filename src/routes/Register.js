import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoginImg from "../assets/login.jpg";
import Footer from "../components/Footer";
import LoginData from "../components/LoginData";
import RegisterData from "../components/RegisterData";

function Login () {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={LoginImg}
                title="Create an account"
                btnClass="hide"
            />
            <RegisterData />
            <Footer />
        </>
    )
}

export default Login;
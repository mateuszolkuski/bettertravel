import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoginImg from "../assets/login.jpg";
import Footer from "../components/Footer";
import LoginData from "../components/LoginData";

function Login () {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero-mid"
                heroImg={LoginImg}
                title="Welcome back"
                btnClass="hide"
            />
            <LoginData />
            <Footer />
            </>
    )
}

export default Login;
import React, {useState} from "react";
import "./styles/LoginStyles.scss";

export const LoginData = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("email");
        const storedPass = localStorage.getItem("pass");
        const storedName = localStorage.getItem("name");
        if (email === storedEmail && pass === storedPass) {
            localStorage.setItem("name", storedName);
            window.location.href = "/";
        } else {
            alert("Wrong email or password.");
        }
    };

    const handleRegisterClick = () => {
        window.location.href = '/register'
    }

return (
    <>
        <div className="form-container">
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
        <button type="submit">Log In</button>
    </form>
            <button className="second-button" onClick={handleRegisterClick}>Don't have an account?</button>
        </div>
        </>
)
}

export default LoginData;
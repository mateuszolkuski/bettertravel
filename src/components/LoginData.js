import React, {useState} from "react";
import "./styles/LoginStyles.scss";

export const LoginData = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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

        <button className="register-button" onClick={() => window.location.href = '/register'}>Don't have an account?</button>
    </form>
        </div>
        </>
)
}

export default LoginData;
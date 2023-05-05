import React, {useState} from "react";
import "./styles/LoginStyles.scss";

export const RegisterData = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && pass && name) {
            localStorage.setItem("email", email);
            localStorage.setItem("pass", pass);
            localStorage.setItem("name", name);
            window.location.href = '/login';
        } else {
            alert('Please fill all the information.');
        }
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="FullName" placeholder="FullName" id="fullname" name="fullname"/>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
                    <button type="submit">Register</button>
                </form>
                <button className="second-button" onClick={() => window.location.href = '/login'}>Already have an account?</button>
            </div>
        </>
    )
}

export default RegisterData;
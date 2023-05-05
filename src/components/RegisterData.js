import React, {useState} from "react";
import "./styles/RegisterStyles.scss";

export const RegisterData = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
            <button onClick={() => window.location.href = '/login'}>Already have an account?</button>
            </form>
            </div>
        </>
    )
}

export default RegisterData;
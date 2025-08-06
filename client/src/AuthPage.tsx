import React, { useState } from "react";
import { registerUser, loginUser } from "./auth";

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        try {
            await registerUser(email, password);
            alert("Registered successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin = async () => {
        try {
            await loginUser(email, password);
            alert("Logged in!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Sign Up / Login</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

import { useState } from "react";

const RestaurentLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password, role: "restaurant" }),
        });

        const data = await response.json();
        if (response.ok) {
            alert("Login Successful");
            localStorage.setItem("token", data.token);
        } else {
            alert(data.error);
        }
    };

    return (
        <div className="login-container">
            <h2>Restaurant Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default RestaurentLogin;

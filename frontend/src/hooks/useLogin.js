import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = (setIsAuthenticated) => {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                const user = await res.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User Login successfully.");
                setIsAuthenticated(true);
                navigate("/");
            } else {
                console.error("Login failed!");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        form,
        setForm,
        handleLogin
    }
}

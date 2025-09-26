import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignup = (setIsAuthenticated) => {
    const [form, setForm] = useState({ name: "", email: "", password: "", phone_number: "", gender: "Male", date_of_birth: "", membership_status: "Basic" });
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/users/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                const user = await res.json();
                localStorage.setItem("user", JSON.stringify(user));
                console.log("User Signup successfully.");
                setIsAuthenticated(true);
                toast.success("Account created successfully!");
                navigate("/");
            } else {
                console.error("signup failed!");
            }
        } catch (error) {
            console.error(error);
        }
    }

    return {
        form,
        setForm,
        handleSignup
    }
}

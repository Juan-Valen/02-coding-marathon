// hooks/useLogin.js
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.token);
      toast.success("Logged in successfully!");
      navigate("/jobs");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return { login };
};

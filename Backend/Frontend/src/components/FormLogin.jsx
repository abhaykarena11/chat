// Form.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputField from "./InputField";
import { FaEnvelope, FaLock } from "react-icons/fa";

const FormLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://chat-6iyh.onrender.com/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
          credentials: "include",
          body: JSON.stringify(formData), // Ensure the body is a string
        }
      );
      const data = await response.json();
      if (data.success) {
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("Error Ocuure !");
      console.error("Error:", error);
    }
  };

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <InputField
        icon={FaEnvelope}
        type="email"
        name="email"
        placeholder="Email Address"
        formData={formData}
        setformData={setformData}
      />
      <InputField
        icon={FaLock}
        type="password"
        name="password"
        placeholder="Password"
        formData={formData}
        setformData={setformData}
      />
      <button
        type="submit"
        className="modern-button w-full py-3 text-lg font-semibold hover:scale-105 smooth-transition"
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </form>
  );
};

export default FormLogin;

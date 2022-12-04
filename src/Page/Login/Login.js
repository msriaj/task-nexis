import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const rawResponse = await fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const content = await rawResponse.json();
    const token = await content.access_token;
    if (token) {
      setLoading(false);
      localStorage.setItem("token", token);
      navigate("/attendance");
    }
    const getError = await content.error;
    if (getError) {
      setError(getError);
      setLoading(false);
    }
  };
  return (
    <form onSubmit={loginHandler}>
      <h1 className="text-black text-center mb-12 text-2xl font-semibold">
        Log in Form
      </h1>
      <Input name="email" type="email" placeholder="Write Email Address" />
      <Input
        name="password"
        type="password"
        placeholder="Write Password"
        helpText="Your password must be 8 character"
        pattern="^(?=.*\d).{8,}$"
      />

      <div className="text-center mt-10">
        <Button title={loading ? "loading" : "Log In"} type="submit" />
      </div>
      <p className="mt-2 text-center text-red-400 font-semibold">{error}</p>
      <div className="pt-20 text-center">
        <p>
          <span className="text-xs text-[#7E7E7E]">Don’t have an account?</span>
          <Link
            to="/sign-up"
            className="underline ml-1 text-[#1678CB] font-semibold"
          >
            SIGNUP HERE!
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;

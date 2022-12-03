import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

const Login = () => {
  const loginHandler = async (e) => {
    const rawResponse = await fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.email.value,
        password: "e.target.password.value",
      }),
    });
    const content = await rawResponse.json();
    console.log(content);
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
        patt
      />

      <div className="text-center mt-10">
        <Button title="Log In" type="submit" />
      </div>
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

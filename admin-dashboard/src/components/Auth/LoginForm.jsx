import React, { useState } from "react";
import TextField from "../Common/TextField";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const handleOnChange = (e) => {
    setData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("signUp data >>>", data);
    navigate("/dashboard");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col items-start gap-5 bg-white md:w-2/3 lg:w-1/2 2xl:w-[25%] p-[1rem] md:p-[2rem] lg:p-[3rem] rounded-3xl border"
    >
      <div className="w-full mb-3">
        <h2 className="text-lg 2xl:text-2xl text-center font-semibold">
          Enter your credentials to login!
        </h2>
      </div>

      <TextField
        labelTitle={"Email"}
        inputType={"email"}
        value={data.email}
        id={"email"}
        name={"email"}
        placeholder={"johndoe@gmail.com"}
        onChange={handleOnChange}
      />

      <div className="w-full">
        <div className="flex flex-col items-start gap-1 w-full">
          <label htmlFor={"password"} className="text-sm font-semibold">
            Password
          </label>
          <div className="flex items-center justify-between gap-3 w-full border rounded-lg pr-3">
            <input
              type={showPass ? "text" : "password"}
              id={"password"}
              name={"password"}
              value={data.password}
              placeholder="•••••••••"
              onChange={handleOnChange}
              className="w-full border-none rounded-lg p-3 text-sm text-neutral-800 outline-none placeholder:text-gray-500"
            />
            <button type="button" onClick={() => setShowPass((prev) => !prev)}>
              {showPass ? (
                <FaRegEye className="text-gray-700" />
              ) : (
                <FaRegEyeSlash className="text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <p className="text-sm font-medium text-end">Forgot Password?</p>
      </div>

      <div className="w-full flex justify-end">
        <button type="submit" className="black-btn text-center w-full">
          Login
        </button>
      </div>
      {/* <p className="text-center w-full text-sm font-medium">
        Don't have an account?{" "}
        <Link to={"/signup"} className="font-bold">
          Sign Up
        </Link>
      </p> */}
    </form>
  );
};

export default LoginForm;

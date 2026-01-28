import React from "react";
import BlogyLogo from "../../assets/img/Link.svg";
import { Link } from "react-router-dom";
import LoginImg from "../../assets/img/LoginImg.png"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  let Base = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`${Base}/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           email: emailRef.current.value,
            password: passwordRef.current.value,
        }),
      })
      if(!res.ok){
        throw new Error("Login failed")
      }

      let data = await res.json();
      console.log(data);
      

    } catch (error) {
      toast(error.message)
    }
  }

  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="m-auto w-full max-w-md">
          <img className="mb-8 w-fit" src={BlogyLogo} alt="Blogy Logo" />
          <Link
            className="flex mb-8 items-center gap-2 text-[#0F1729] py-2.5 px-4"
            to="/"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </Link>
          <div className="py-6 px-8 w-full max-w-md border-2 border-gray-200 rounded-2xl ">
            <h2 className="text-[#0F1729] text-[30px] font-bold mb-2">Welcome Back</h2>
            <p className="text-[16px] text-[#6B7280] mb-6">Enter your credentials to access your account</p>
            <form onSubmit={handleSubmit}>
              <label className="flex flex-col">
                <span className="text-[14px] text-[#0F1729] font-medium mb-2">Email</span>
                <input ref={emailRef} className="border-2 border-gray-200 rounded-lg p-2 outline-none mb-4" type="text" placeholder="name@example.com" />
              </label>
              <label className="flex flex-col">
                <span className="text-[14px] text-[#0F1729] font-medium mb-2">Password</span>
                <input ref={passwordRef} className="border-2 border-gray-200 rounded-lg p-2 outline-none mb-4" type="password" placeholder="********" />
              </label>
              <button
                className="text-white cursor-pointer rounded-2xl w-full py-3 bg-[#4346EF]"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="flex text-center justify-center mt-6">
              <p className="text-[#6B7280]">Don't have an account? </p>
              <Link to={"#"} className="text-[#4346EF]">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-5 bg-[#F2F1FD] w-1/2 items-center">
        <img className="w-full max-w-xl max-h-xl" src={LoginImg} alt="Login" />
        <h2 className="text-[#0F1729] text-[30px] font-bold">
          Start Your Journey
        </h2>
        <p className="text-[18px] text-[#6B7280]">
          Join thousands of creators sharing their stories on Blogify
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

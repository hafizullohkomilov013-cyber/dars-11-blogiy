import React from "react";
import BlogyLogo from "../../assets/img/Link.svg";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex flex-col justify-center ictems-center">
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
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account</p>
            <form>
              <label>
                <input type="text" placeholder="name@example.com" />
              </label>
              <label>
                <input type="password" placeholder="********" />
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
      <div className="w-1/2 flex justify-center items-center">Images</div>
    </div>
  );
}

export default LoginPage;

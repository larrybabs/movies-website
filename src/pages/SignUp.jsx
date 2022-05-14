import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block w-full absolute h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/791d6f9c-07d1-4009-a2a3-8e875d0d4a03/NG-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto rounded bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
                <h1 className="font-bold text-3xl">Sign Up</h1>
                <form className="w-full flex flex-col py-6 ">
                    <input className="p-3 rounded outline-none bg-gray-700 my-2" type="email" placeholder="Email" autoComplete="email" />
                    <input className="p-3 rounded outline-none bg-gray-700 my-2" type="password" placeholder="Password" autoComplete="current-password"/>
                    <button className="bg-red-600 py-3 my-5 rounded ">Sign Up</button>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                        <p><input className="mr-1" type="checkbox"/> Remember me</p>
                        <p>Need help?</p>
                    </div>
                    <p className="mt-16 "> <span className="text-gray-600">Already subcribed? </span> <Link to="/login">Sign in</Link></p>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

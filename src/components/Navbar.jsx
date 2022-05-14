import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  // console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-white cursor-pointer font-bold text-4xl">
          MovieToon
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white p-4">Account</button>
          </Link>
            <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded text-white">
              Log out
            </button>
        </div>
      ) : (
        <div>
          <Link to="/signIn">
            <button className="text-white p-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

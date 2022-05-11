import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 z-[100] w-full absolute">
      <h1  className="text-white cursor-pointer font-bold text-4xl">MovieToon</h1>
      <div>
          <button className="text-white p-4">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded text-white">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;

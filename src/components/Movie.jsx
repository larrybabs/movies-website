import React, {useState} from "react";
import {  FaHeart, FaRegHeart } from 'react-icons/fa';


const Movie = ({item}) => {
    const [like, setLike] = useState(false);
  return (

      <div className=" w-[160px] hover:scale-110 duration-500 mx-[1.5px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block relative cursor-pointer">
        <img
          className="text-white w-full h-auto block"
          src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
          alt={item?.title}
        />
        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0  hover:opacity-100 text-white">
          <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full">
            {item?.title}
          </p>
          <p>
            {like ? (
              <FaHeart className="absolute top-4 left- text-gray-300" />
            ) : ( 
              <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
            )}
          </p>
        </div>
      </div>

  );
};

export default Movie;

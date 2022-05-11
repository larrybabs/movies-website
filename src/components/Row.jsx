import axios from "axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchLink }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      axios.get(fetchLink).then((response) => {
        setMovies(response.data.results);
      });
    }, [fetchLink]);

    console.log(movies)

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl ">{title}</h2>
        <div className="relative flex items-center">
            <div id={'slider'}>
                {movies?.map((item, id)=> (
                    <div className=" w-[160px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block relative cursor-pointer"> 
                        <img className="text-white w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} /> 
                        <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                            <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full">{item?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  </>
  );
};

export default Row;

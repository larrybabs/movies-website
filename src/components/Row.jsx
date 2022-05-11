import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

import Movie from "./Movie";

const Row = ({ title, fetchLink, rowId }) => {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
      axios.get(fetchLink).then((response) => {
        setMovies(response.data.results);
      });
    }, [fetchLink]);

   const slideLeft = () => {
       const slider = document.getElementById('slider' + rowId);
       slider.scrollLeft = slider.scrollLeft - 500;
   }
   const slideRight = () => {
       const slider = document.getElementById('slider' + rowId);
       slider.scrollLeft = slider.scrollLeft +  500;
   }

  return (
    <>
      <h2 className="text-white font-bold p-4 md:text-xl ">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft 
            onClick={slideLeft}
            className="text-white left-0 absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            <div id={'slider' + rowId} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
                {movies?.map((item, id)=> (
                   <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight 
            onClick={slideRight}
            className="text-white right-0 absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
  </>
  );
};

export default Row;

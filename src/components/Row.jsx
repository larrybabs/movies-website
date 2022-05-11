import axios from "axios";
import React, { useEffect, useState } from "react";

import Movie from "./Movie";

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
                   <Movie key={id} item={item}/>
                ))}
            </div>
        </div>
  </>
  );
};

export default Row;

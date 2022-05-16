import React, {useState, useEffect} from 'react';
import { MdChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';  
import { updateDoc, doc, onSnapshot } from '@firebase/firestore';

const SavedShows = () => {
    const [movies, setMovies] = useState([]);
    const {user} = UserAuth();

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft +  500;
    }

    useEffect(() => {
        onSnapshot (doc(db, "users", `${user?.email}`, (doc) => {
            setMovies(doc.data()?.savedShows)
        }))
    }, [user?.email])

    const truncate = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }}

  return (
    <>
      <div className="flex justify-between ">
      <h2 className="text-white font-bold p-4 md:text-xl pt-12">My shows</h2> <p className="text-gray-400 px-4 text-xs pt-12">See more</p>
      </div>
        <div className="relative flex items-center group">
            <MdChevronLeft 
            onClick={slideLeft}
            className="text-white left-0 absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
                {movies?.map((item, id)=> (
                    <div key={id} className=" w-[160px] hover:scale-110 duration-500 mx-[1.5px] sm:w-[200px] md:w-[280px] lg:w-[280px] inline-block relative cursor-pointer">
                    <img
                      className="text-white w-full h-auto block"
                      src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                      alt="/"
                    />
                    <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0  hover:opacity-100 text-white">
                      <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center text-center h-full">
                        {truncate(item?.title, 18)}
                      </p>
                    </div>
                  </div> 
                ))}
            </div>
            <MdOutlineChevronRight 
            onClick={slideRight}
            className="text-white right-0 absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
    </>
  );
}

export default SavedShows;

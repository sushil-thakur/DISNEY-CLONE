import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalAPI';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genreId, index_ }) {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((resp) => {
            setMovieList(resp.data.results);
        }).catch((error) => {
            console.error('Error fetching movies by genre:', error);
        });
    };

    const slideRight = (element) => {
        element.scrollLeft += 500;
    };

    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    };

    return (
        <div className="relative">
            {/* Left Arrow */}
            <IoChevronBackOutline
                onClick={() => slideLeft(elementRef.current)}
                className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            />
            {/* Movie List */}
            <div
                ref={elementRef}
                className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
            >
                {movieList.map((item) => (
                    <MovieCard key={item.id} movie={item} />
                ))}
            </div>
            {/* Right Arrow */}
            <IoChevronForwardOutline
                onClick={() => slideRight(elementRef.current)}
                className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0
                ${index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}
            />
        </div>
    );
}

export default MovieList;
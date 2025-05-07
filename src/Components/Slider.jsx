import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos()
            .then((resp) => {
                console.log(resp.data.results);
                setMovieList(resp.data.results);
            })
            .catch((error) => {
                console.error('Error fetching trending videos:', error);
            });
    };

    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    };

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    };

    return (
        <div className="relative">
            {/* Left Arrow */}
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
                onClick={() => sliderLeft(elementRef.current)}
            />

            {/* Right Arrow */}
            <HiChevronRight
                className="hidden md:block text-white text-[30px] absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
瞬            onClick={() => sliderRight(elementRef.current)}
            />

            {/* Movie List */}
            <div
                className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
                ref={elementRef}
            >
                {movieList.map((item) => (
                    <img
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className="min-w-[300px] md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
                        alt={item.title || item.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
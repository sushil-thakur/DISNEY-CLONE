
import React from 'react';

function MovieCard({ movie }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    return (
        <div className="w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <img
                src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`}
                alt={movie.title || movie.name}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default MovieCard;
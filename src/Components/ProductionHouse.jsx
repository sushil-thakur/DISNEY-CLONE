import React from 'react'
import disney from './../assets/Image/disney.png';
import marvel from './../assets/Image/marvel.png';
import nationalG from './../assets/Image/nationalG.png';
import pixar from './../assets/Image/pixar.png';
import starwar from './../assets/Image/starwar.png';

import starwarV from './../assets/Videos/star-wars.mp4';
import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGeographicV from './../assets/Videos/national-geographic.mp4';
import pixarV from './../assets/Videos/pixar.mp4';

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
    return (
        <div className="flex gap-5 p-5 px-10 md:px-16">
            {productionHouseList.map((item) => (
                <div
                    key={item.id}
                    className="relative w-[200px] h-[120px] md:w-[250px] md:h-[150px] border-[2px] border-gray-600 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                >
                    <video
                        src={item.video}
                        autoPlay
                        loop
                        playsInline
                        muted
                        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0 hover:opacity-50 transition-opacity duration-300"
                    />
                    <img
                        src={item.image}
                        alt="Production House"
                        className="w-full h-full object-cover z-[1]"
                    />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;
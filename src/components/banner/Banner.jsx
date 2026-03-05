import React, { useState } from 'react';
import BgImg from '../../assets/vector1.png'

const Banner = () => {

    const [progress, setProgress] = useState(0);
    return (
        <div className='max-w-350 mx-auto flex flex-col lg:flex-row gap-5 p-5 lg:p-10'>
            <div
                className="hero rounded-2xl text-white relative overflow-hidden bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
            >
                {/* Left texture */}
                <div
                    className="absolute left-0 top-0 h-full w-48 bg-no-repeat bg-left"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "contain"
                    }}
                />

                {/* Right mirrored texture */}
                <div
                    className="absolute right-0 top-0 h-full w-48 bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "contain",
                        transform: "scaleX(-1)"
                    }}
                />

                <div className="hero-content text-center relative z-10">
                    <div className="py-3 max-w-md">
                        <h1 className="text-2xl">In-Progress</h1>
                        <p className="py-3 text-5xl font-bold">{progress}</p>
                    </div>
                </div>
            </div>
            <div
                className="hero rounded-2xl text-white relative overflow-hidden bg-linear-to-r from-[#54CF68] to-[#00827A]"
            >
                {/* Left texture */}
                <div
                    className="absolute left-0 top-0 h-full w-48 bg-no-repeat bg-left"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "contain"
                    }}
                />

                {/* Right mirrored texture */}
                <div
                    className="absolute right-0 top-0 h-full w-48 bg-no-repeat"
                    style={{
                        backgroundImage: `url(${BgImg})`,
                        backgroundSize: "contain",
                        transform: "scaleX(-1)"
                    }}
                />

                <div className="hero-content text-center relative z-10">
                    <div className="py-3 max-w-md">
                        <h1 className="text-2xl">In-Progress</h1>
                        <p className="py-3 text-5xl font-bold">{progress}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div data-aos="fade-left">
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg?w=2000")` }}>
                <div className="hero-overlay bg-black bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there !!!</h1>
                        <p className="mb-5 font-semibold">Thanks For checking. Please Check the whole Website. Hope you would give your feedback</p>
                        <Link to='/about' className="btn btn-secondary">About me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
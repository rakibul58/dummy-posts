import React from 'react';
import Hero from './Hero';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Hero />
            <div style={{margin: "200px 0"}}>
                <Posts />
            </div>
        </div>
    );
};

export default Home;
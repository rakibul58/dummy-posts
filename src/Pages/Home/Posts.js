import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from './Card';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {

        fetch('https://dummyapi.io/data/v1/post?limit=10', {
            headers: {
                'app-id': '63a6e2f5ce8dda2e65ade852'
            }
        })
            .then(res => res.json())
            .then(data => setPosts(data.data));

    }, []);

    return (
        <div data-aos="fade-right" className='px-10'>
            <div className='text-center'>
                <h4 className='text-2xl font-extrabold text-primary'>Posts</h4>
                <h1 className='text-5xl text-base-content mb-6'>These are some of the Posts</h1>
                <p className='w-2/3 mx-auto mb-12'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, tenetur corporis hic consectetur enim at animi? Eligendi culpa inventore nostrum, iste quidem doloribus maiores molestias temporibus tempora repellendus magnam eum cupiditate sed quis velit numquam a, unde ipsam voluptas aspernatur cum. Odit, minima vitae assumenda pariatur nobis facere ad quae!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                {
                    posts.map(post => <Card key={post.id} post={post}></Card>)
                }
            </div>
        </div>
    );
};

export default Posts;
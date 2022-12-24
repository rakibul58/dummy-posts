import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { AiFillTags } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const { image, likes, owner, publishDate, tags, text } = post;
    // const { firstName, lastName, picture, title } = owner;
    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {

        fetch(`https://dummyapi.io/data/v1/post/${id}`, {
            headers: {
                'app-id': '63a6e2f5ce8dda2e65ade852'
            }
        })
            .then(res => res.json())
            .then(data => setPost(data));

    }, [id]);

    return (
        <div data-aos="fade-right" style={{ marginBottom: "200px" }}>
            <div className="p-5 mx-auto sm:p-10 md:p-16">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image} style={{height:"500px"}} alt="" className="bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-base-200 shadow-lg">
                        <div className="space-y-2">
                            <div className="flex space-x-4">
                                <img alt="" src={owner?.picture} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                                <div className="flex flex-col space-y-1">
                                    <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{owner?.firstName} {owner?.lastName}</Link>
                                    <span className="text-xs text-gray-600">{publishDate?.slice(0,10)}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-800">
                            <p>{text}</p>
                        </div>
                        <div className='mt-3 flex flex-wrap gap-2'>
                            <AiFillTags className='text-2xl' />
                            {
                                tags?.map((tag, i) => <div className='badge badge-outline badge-primary my-auto' key={i}>{tag}</div>)
                            }
                        </div>
                        <div className="flex justify-end space-x-2 text-sm text-gray-600">
                            <button type="button" className="flex items-center p-1 space-x-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Number of likes" className="w-6 h-6 fill-current text-secondary-content">
                                    <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                                    <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                                </svg>
                                <span>{likes}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
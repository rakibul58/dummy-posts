import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTags } from 'react-icons/ai';

const Card = ({post}) => {
    // console.log(post);
    const { id , image , likes , owner , publishDate , tags , text} = post;
    const { firstName  , lastName, picture, title} = owner;
    return (
        <div>
            <div className="flex flex-col max-w-lg min-h-[680px] p-6 space-y-6 overflow-hidden rounded-xl bg-base-200 shadow-2xl">
                <div className="flex space-x-4">
                    <img alt="" src={picture} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <Link rel="noopener noreferrer" href="#" className="text-sm font-semibold">{title} {firstName} {lastName}</Link>
                        <span className="text-xs text-gray-600">{publishDate.slice(0,10)}</span>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">{text} <Link to={`/posts/${id}`}><button className='btn btn-primary btn-xs'>Details</button></Link></h2>
                    <div className='mt-3 flex flex-wrap gap-2'>
                        <AiFillTags className='text-2xl' />
                        {
                            tags.map((tag , i)=><div className='badge badge-outline badge-primary my-auto' key={i}>{tag}</div>)
                        }
                    </div>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-primary">
                                <path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current text-primary">
                                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex space-x-2 text-sm text-gray-600">
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
    );
};

export default Card;
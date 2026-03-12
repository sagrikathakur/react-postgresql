import React from 'react';
import { dummyTestimonialData } from '../assets/assets';

const Testimonials = () => {
    return (
        <div className="flex flex-col items-center justify-center my-20 py-12">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer testimonials</h1>
            <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

            <div className="flex flex-wrap gap-5 justify-center">
                {dummyTestimonialData.map((testimonial, index) => (
                    <div key={index} className="w-80 flex flex-col items-center p-10 rounded-lg hover:scale-[1.02] transition-all bg-white shadow-sm">
                        <img className="h-20 w-20 rounded-full" src={testimonial.image} alt={testimonial.name} />
                        <h2 className="text-lg text-gray-900 font-medium mt-2">{testimonial.name}</h2>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                        <div className="flex items-center justify-center mt-3 gap-1">
                            {Array(testimonial.rating).fill().map((_, i) => (
                                <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                                </svg>
                            ))}
                        </div>
                        <p className="text-center text-[15px] mt-3 text-gray-500">{testimonial.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

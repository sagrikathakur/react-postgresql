import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { openSignIn } = useClerk();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${
            scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm' : 'bg-transparent py-6'
        }`}>
            <div className='max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-20 xl:px-32'>
                <img 
                    src={assets.logo} 
                    alt="logo" 
                    className='w-32 sm:w-40 cursor-pointer hover:opacity-80 transition-opacity' 
                    onClick={() => navigate('/')} 
                />

                <div className='hidden md:flex items-center gap-10 text-slate-600 font-medium'>
                    <a href="#tools" className='hover:text-primary transition-colors'>AI Tools</a>
                    <a href="#testimonials" className='hover:text-primary transition-colors'>Reviews</a>
                    <a href="#plans" className='hover:text-primary transition-colors'>Pricing</a>
                </div>

                <div className='flex items-center gap-4'>
                    {user ? (
                        <div className='flex items-center gap-4'>
                            <button 
                                onClick={() => navigate('/ai')}
                                className='hidden sm:flex text-sm font-bold text-slate-700 hover:text-primary transition-colors'
                            >
                                Dashboard
                            </button>
                            <div className='p-1 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow'>
                                <UserButton afterSignOutUrl="/" />
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={openSignIn}
                            className='group flex items-center gap-2 rounded-2xl text-sm font-bold cursor-pointer bg-slate-900 text-white px-8 py-3.5 hover:bg-black hover:shadow-xl hover:shadow-slate-200 transition-all active:scale-95'
                        >
                            Get Started 
                            <ArrowRight size={16} className='group-hover:translate-x-1 transition-transform' />
                        </button>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar

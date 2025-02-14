import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav);
    }

    const closeNav = () => {
        setNav(false);
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    }
    return (
        <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
            <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">
                <a href="#" className='font-bold'>Akash Jaiswar</a>
                <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                    {/* Link allows smooth scrolling to different sections of a webpage -> jab yahas se waha jana ho to Link use karlena (for single page application)*/}
                    <li> <Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li> <Link to='portfolio' onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                    <li> <Link to='contact' onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    <li><button className='text-lg text-slate-200 font-bold' onClick={() => window.location.href = 'https://drive.google.com/file/d/1ZYdeoTOw_RFwCcfBaAp3tqVszAIdnY8A/view?usp=sharing'} >CV</button></li>
                </ul>

                <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
                    {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </div>

                <motion.div
                    initial={false}
                    animate={nav ? 'open' : 'closed'}
                    variants={menuVariants}
                    className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
                >
                    <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
                        <li> <Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                        <li> <Link to='portfolio' onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                        <li> <Link to='contact' onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}

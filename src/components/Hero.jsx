import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import { DiCss3, DiFirebase, DiGit, DiGithub, DiHtml5, DiJavascript1, DiMongodb, DiNodejsSmall, DiPython, DiReact } from 'react-icons/di'
import ShinyEffect from './ShinyEffect'

export default function Hero() {
    return (
        <div className='mt-24 max-w-[1200px] mx-auto relative'>
            <div className="grid md:grid-cols-2 place-items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    {/* This is the floating text-> remember to make this blury */}
                    <TypeAnimation
                        sequence={[
                            "Fullstack Developer",
                            1000,
                            "Programmer"
                        ]}
                        speed={50}
                        repeat={Infinity}
                        className='font-bold text-gray-400 text-xl md:text-5xl italic- mb-4'
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
                    >
                        HEY, I AM <br />
                        <span className='text-purple-500'>Akash Jaiswar</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6'
                    >
                        A passionate fullstack developer
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='flex flex-row items-center gap-6 my-6 md:mb-0'
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0px 0px 8px rgba(0,0,0,0.3' }}
                            className='z-10 cursor-pointer font-bold text-gray-200 border-2 p-3 border-purple-400 rounded-xl'
                            onClick={() => window.location.href = 'https://drive.google.com/file/d/1ZYdeoTOw_RFwCcfBaAp3tqVszAIdnY8A/view?usp=sharing'}

                        >
                            Download CV
                        </motion.button>

                        <div className="flex gap-6 text-4xl md:text-6xl text-purple-400 z-20">
                            <motion.a whileHover={{ scale: 1.2 }} href='https://github.com/akash11-01'>
                                <AiOutlineGithub />
                            </motion.a>

                            {/* Here href='#' indicates link to the top of the page MAY BE(please verify) */}
                            <motion.a whileHover={{ scale: 1.2 }} href='https://www.linkedin.com/in/akash-jaiswar-40ba3024b'>
                                <AiOutlineLinkedin />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 }} href='https://x.com/akashjaiswar221x'>
                                <AiOutlineTwitter />
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>

                <img src="Main-Character.png" alt="" />

                <motion.img
                    // src={profilepic}
                    className='w-[300px] md:w-[450px]'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                </motion.img>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2 }}
                className='flex flex-col text-7xl px-12 md:px-0 w-full justify-center items-center py-20'
            >
                <p className='text-gray-200 mr-6'>My Tech Stack</p>
                <div className="flex">
                    <DiHtml5 className='text-orange-600 mx-2' />
                    <DiCss3 className='text-blue-600 mx-2' />
                    <DiJavascript1 className='text-yellow-500 mx-2' />
                    <DiReact className='text-blue-500 mx-2' />
                    <DiNodejsSmall className='text-green-500 mx-2' />
                    <DiFirebase className='text-lime-600 mx-2' />
                </div>
                <div className="flex">
                    <DiMongodb className='text-green-600 mx-2' />
                    <DiGithub className='text-emerald-600 mx-2' />
                    <DiGit className='text-indigo-600 mx-2' />
                    <DiPython className='text-cyan-500 mx-2' />

                </div>
                {/* Please add all the skills here */}
            </motion.div>

            <div className="absolute inset-0 hidden md:block">
                <ShinyEffect left={0} top={0} size={1400} />
            </div>
        </div>
    )
}

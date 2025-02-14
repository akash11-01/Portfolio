import React from 'react'
import Reveal from './Reveal'

export default function Contact() {
    return (
        <div className="px-6 max-w-[1000px] mx-auto md:my-12" id='contact'>
            <Reveal>
                <div className='grid md:grid-cols-2 place-items-center'>
                    <div className="">
                        <div className="text-gray-300 my-3">
                            <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>I’m a passionate full-stack developer with expertise in React.js, Vite, Tailwind CSS, Node.js, Express.js, and MongoDB.<br /> Beyond web development, I have a strong foundation in Data Structures & Algorithms (DSA), Database Management Systems (DBMS), and Object-Oriented Programming (OOP), allowing me to write efficient, scalable, and well-structured code.
                            </p>
                        </div>

                    </div>
                    <form
                        action="https://getform.io/f/placeYourEndPoinHere"
                        method='POST'
                        id='form'
                        className='max-w-6xl font-bold text-xl mb-2'
                    >
                        <p className='text-gray-100 font-bold text-xl mb-2'>Let's connect !</p>
                        <input
                            type="text"
                            id='name'
                            placeholder='Your Name...'
                            name='name'
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Your email...'
                            id="email"
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                        />
                        <textarea
                            name="textarea"
                            placeholder='Your message...'
                            id="textarea"
                            cols="30"
                            rows='4'
                            className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                        />

                        <button type='submit' className='w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color'>
                            Send Message
                        </button>
                    </form>
                </div>
            </Reveal>
        </div>
    )
}

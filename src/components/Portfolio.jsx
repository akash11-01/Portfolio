import React from 'react'
import Reveal from './Reveal'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'


const projects = [
    {
        img: 'Dashboard.png',
        title: 'Invoice generator',
        description: 'A full-stack invoice generator built with React.js and Firebase Firestore, enabling invoice creation, deletion, viewing, and printing. It features a dashboard with real-time financial insights (Chart.js) and secure authentication (Firebase Authentication), with profile picture uploads via Cloudinary.',
        links: {
            github: 'https://github.com/akash11-01/Invoice-Generator',
            site: 'https://bill-ease.netlify.app/'
        },
    },
    {
        img: 'E-Pharmacy.png',
        title: 'E-Pharmacy',
        description: 'An E-Pharmacy platform with category-based filtering for 100+ medicines, a multi-item cart system, and a secure order processing feature with address input and validation, for a smooth purchasing experience.',
        links: {
            github: 'https://github.com/akash11-01/E-Pharma-frontend',
            site: 'https://easy-pharma.netlify.app/'
        },
    },
    {
        img: 'Weather-App.png',
        title: 'Weather-App',
        description: "This weather application provides real-time weather updates based on the user's current location or a searched city.It features a clean and responsive UI, displaying key weather details such as temperature, humidity, wind speed, and weather conditions.Users can easily switch between locations, view forecasts, and get accurate weather insights with a smooth and intuitive experience.",
        links: {
            github: 'https://github.com/akash11-01/weather-api',
            site: ''
        },
    },
    {
        img: 'Real-Estate.png',
        title: 'Real-Estate',
        description: 'A full-stack real estate web app built with the MERN stack, React Redux, and Redux Toolkit. It helps users find the best stays within their budget through advanced search filters, secure authentication, and a responsive design for a seamless browsing experience',
        links: {
            github: 'https://github.com/akash11-01/Real-Estate',
            site: '#'
        },
    },

]
export default function Portfolio() {
    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
            {
                projects.map((project, index) => (
                    <Reveal>
                        <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}
                            key={index}>
                            <div className="w-full md:w-1/2 p-4">
                                <img src={project.img} alt={project.title}
                                    className=' w-full h-full object-cover rounded-lg shadow-lg hover:opacity-85 cursor-pointer'
                                    onClick={() => window.location.href = project.links.site}
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                                <h3 className='text-2xl font-semibold text-gray-300 mb-4'>{project.title}</h3>
                                <p className='text-gray-300 mb-4'>{project.description}</p>
                                <div className="flex space-x-4">
                                    <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        <FaArrowUpRightFromSquare />
                                    </a>
                                    <a href={project.links.github} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'>
                                        <AiOutlineGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))
            }
        </div>
    )
}

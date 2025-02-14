import React from "react";
import { motion } from "framer-motion";
import { DiCss3, DiFirebase, DiGithubBadge, DiHtml5, DiJavascript1, DiMongodb, DiNodejsSmall, DiPython, DiReact } from "react-icons/di";
import Reveal from "./Reveal";
import { SiExpress, SiMysql } from "react-icons/si";
import { TbBrandCpp, TbBrandRedux, TbBrandThreejs } from "react-icons/tb";

const skills = [
    {
        category: "Languages",
        technologies: [
            { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
            { name: "CSS", icon: <DiCss3 className="text-orange-600" /> },
            { name: "Javascript", icon: <DiJavascript1 className="text-orange-600" /> },
            { name: "MySQL", icon: <SiMysql className="text-orange-600" /> },
            { name: "CPP", icon: <TbBrandCpp className="text-orange-600" /> },
            { name: "Python", icon: <DiPython className="text-orange-600" /> },
        ],
    },
    {
        category: "Tools and Frameworks",
        technologies: [
            { name: "Node Js", icon: <DiNodejsSmall className="text-orange-600" /> },
            { name: "MongoDB", icon: <DiMongodb className="text-orange-600" /> },
            { name: "React", icon: <DiReact className="text-orange-600" /> },
            { name: "Github", icon: <DiGithubBadge className="text-orange-600" /> },
            { name: "Firebase", icon: <DiFirebase className="text-orange-600" /> },
            { name: "Redux", icon: <TbBrandRedux className="text-orange-600" /> },
            { name: "Express", icon: <SiExpress className="text-orange-600" /> },
            { name: "ThreeJs", icon: <TbBrandThreejs className="text-orange-600" /> },
        ],
    },
];

export default function Skills() {
    return (
        <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
            <Reveal>
                <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
                <p className="text-center mb-8">
                    I worked on various frontend and fullstack projects. Check them{" "}
                    <a href="https://github.com/akash11-01" className="underline">
                        Here
                    </a>
                </p>

                <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="relative border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2 overflow-hidden"
                            whileHover={{
                                boxShadow: "0px 0px 15px 2px rgba(168, 85, 247, 0.8)",
                            }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-lg border-2 border-transparent"
                                initial={{ opacity: 0 }}
                                whileHover={{
                                    opacity: 1,
                                    borderColor: "rgba(216, 180, 254, 1)", // Light purple glow
                                    // transition: { duration: 0.3, repeat: Infinity, repeatType: "mirror" },
                                }}
                            />

                            <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {skill.technologies.map((tech, idx) => (
                                    <div className="flex items-center space-x-2" key={idx}>
                                        <span className="text-2xl">{tech.icon}</span>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
}

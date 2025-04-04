"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaUnity,
  FaMobile,
  FaGit,
  FaGithub,
  FaJava
} from "react-icons/fa"

import { SiTypescript, SiTailwindcss } from "react-icons/si"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"
import { ScrollArea } from "@/components/ui/Scroll-area"
import { motion } from "framer-motion"

// about data
const about = {
  title: "About Me",
  description: "I graduated with a degree in Computer Science and aspire to become a skilled Programmer, System Analyst (SA), or Business Analyst (BA). I am passionate about learning new technologies and am committed to continuously improving and contributing positively through my work.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Phatcharaphon Laoruchiralai"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 80 775 1912"
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thailand"
    },
    {
      fieldName: "Email",
      fieldValue: "phatcharaphon.lr@gmail.com"
    },
    {
      fieldName: "Language",
      fieldValue: "Thai, English"
    },
  ]
}

// experience data
const experience = {
  icon: '/assets/resume/',
  title: "My Experience",
  description: "I only have experience from my internship, but I would like to learn more to improve my abilities.",
  item: [
    {
      company: "Internship at National Electronics and Computer Technology Center : NECTEC",
      position: "Research Assistant Intern",
      duration: "2024 - 2025",
    },
  ]
}

// education data
const education = {
  icon: '/assets/resume/',
  title: "My Education",
  description: "I have experience studying at Kasetsart University, Computer Science major, and try to learn in other subjects, whether it is online or by attending lectures.",
  item: [
    {
      institution: "Kasetsart  University",
      degree: "Bachelor of Science in Computer Science",
      duration: "2021 - 2025"
    },
    {
      institution: "Online Course",
      degree: "Ethics in Humans",
      duration: "2024"
    },
    {
      institution: "AI for Thai",
      degree: "Participate in listening",
      duration: "2023"
    },
    {
      institution: "Online Course",
      degree: "Storytelling",
      duration: "2023"
    },
  ]
}

// skills data
const skills = {
  title: "My Skills",
  description: "I have experience working with various programming.",
  skillslist: [
    {
      icon: <FaHtml5 />,
      name: "HTML5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript"
    },
    {
      icon: <FaJs />,
      name: "JavaScript"
    },
    {
      icon: <FaReact />,
      name: "React"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaUnity />,
      name: "Unity"
    },
    {
      icon: <FaMobile />,
      name: "Flutter"
    },
    {
      icon: <FaGit />,
      name: "Git"
    },
    {
      icon: <FaGithub />,
      name: "Github"
    },
    {
      icon: <FaJava />,
      name: "Java"
    },
  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.5, ease: "easeIn" }
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] justify-center items-center">
          <TabsList className="flex flex-col w-full max-w-[380px] mx:auto xl:mx-0 gap-6">
            <h3 className="text-4xl font-bold">Summary</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Summary of all Experience, Education, Skills and About Me.
            </p>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                          <span className="text-amber-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-400"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                          <span className="text-amber-400">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-amber-400"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillslist.map((skill, index) => {
                      return (
                        <li key={index} className="flex items-center gap-4">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-amber-400 transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 max-w-[700px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 border border-amber-400/60 rounded-lg p-3 bg-[#232329]"
                    >
                      <span className="text-white/60 text-base">{item.fieldName}</span>
                      <span className="text-white text-base">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
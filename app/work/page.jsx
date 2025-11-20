"use client"

import { motion } from "framer-motion"
import React from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSlideBtns from "@/components/ui/WorkSlideBtns"

const projects = [
  {
    num: '01',
    category: 'Portfolio Website',
    title: 'Project 1',
    description: 'Portfolio Website | Responsive, TailwindCSS, Framer Motion',
    stack: [{ name: 'Next.js', }, { name: 'JavaScript', }, { name: 'Framer Motion', },
    ],
    image: '/assets/work/portfolio.png',
    live: 'https://phatcharaphon-portfolio.vercel.app/',
    github: 'https://github.com/Luk4om/Phatcharaphon_Portfolio'
  },
  {
    num: '02',
    category: 'Recipe App',
    title: 'Project 2',
    description: 'Recipe App | Flutter, Dart',
    stack: [{ name: 'Flutter', }, { name: 'Dart', },
    ],
    image: '/assets/work/recipeapp.png',
    live: '',
    github: 'https://github.com/Luk4om/Recipe_Flutter'
  },
  {
    num: '03',
    category: 'Recipe Website',
    title: 'Project 3',
    description: 'Recipe Website | React, Next.js, TypeScript',
    stack: [{ name: 'React', }, { name: 'Next.js', }, { name: 'TypeScript', },
    ],
    image: '/assets/work/recipeweb.png',
    live: '',
    github: 'https://github.com/Luk4om/Recipe_NextJS'
  },
  {
    num: '04',
    category: 'To-Do List Website',
    title: 'Project 4',
    description: 'To-Do List Website |  Next.js, DaisyUI, Rust',
    stack: [{ name: 'Next.js', }, { name: 'DaisyUI', }, { name: 'Rust', },
    ],
    image: '/assets/work/todolist_rust.png',
    live: 'https://fullstack-todolist-rust.vercel.app/',
    github: 'https://github.com/Luk4om/Fullstack_Todolist_Rust.git'
  },
]

const Work = () => {
  const [project, setProject] = React.useState(projects[0])

  const handleSlideChange = (swiper) => {
    // Get the current active slide index
    const currentIndex = swiper.activeIndex;
    // Update the project state with the corresponding project data
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } 
      }}
      className="min-h-[80vh]flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:wi-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{projects.num}</div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-400 transition-all duration-500 capitalize">{projects.category} Project</h2>
              {/* project description */}
              <p className="text-white/60">{projects.description}</p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-amber-400">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project buton */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-amber-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-amber-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slide button */}
              <WorkSlideBtns 
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-ammber-400 hover:bg-amber-600 text-primary text-[22px] w-[44px] h-[44px] flex items-center justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
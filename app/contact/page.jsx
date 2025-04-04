"use client"

// import Button from "@/components/ui/Button"
// import Input from "@/components/ui/Input"
// import TextArea from "@/components/ui/Textarea"

// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue
// } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+66) 80 775 1912"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "phatcharaphon.lr@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "222 moo.13 Thung Khok, Song Phi Nong, Suphan Buri 72110"
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-amber-400">Let's Work Together</h3>
              <p className="text-white/60">
                Sample form for submitting details.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Firstname" className="bg-transparent border rounded-lg p-4 outline-none focus:border-amber-400 border-white/20 h-[52px] text-white" />
                <input type="text" placeholder="Lastname" className="bg-transparent border rounded-lg p-4 outline-none focus:border-amber-400 border-white/20 h-[52px] text-white" />
                <input type="email" placeholder="Email Address" className="bg-transparent border rounded-lg p-4 outline-none focus:border-amber-400 border-white/20 h-[52px] text-white" />
                <input type="tel" placeholder="Phone Number" className="bg-transparent border rounded-lg p-4 outline-none focus:border-amber-400 border-white/20 h-[52px] text-white" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select Subject</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UX/UI</SelectItem>
                    <SelectItem value="mst">Mobile</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <TextArea className="h-[200px]" placeholder="Type your Message here." />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div> */}
          {/* info */}
          <div className="flex flex-1 items-start justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10 items-start">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-start gap-6">
                    <div className="w-[52px] h-[52px] xl:h-[72px] bg-[#27272c] text-amber-400 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1 text-start">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
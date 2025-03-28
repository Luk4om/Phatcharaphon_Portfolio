"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Example",
    href: "",
  },
  {
    num: "02",
    title: "UX/UI Design",
    description:
      "Example",
    href: "",
  },
  {
    num: "03",
    title: "Machine Learning",
    description:
      "Example",
    href: "",
  },
  {
    num: "04",
    title: "Mobile App Development",
    description:
      "Example",
    href: "",
  },
];

const Services = () => {
  const [message, setMessage] = useState("");

  const handleClick = (path) => {
    if (!path) {
      setMessage("ยังไม่มีลิงก์ในส่วนนี้ครับ");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-amber-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleClick(service.href)}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-amber-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </button>
                  )}
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-amber-500 transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-4"></div>
                {/* message */}
                {message && service.href === "" && (
                  <p className="text-rose-500 mt-2">{message}</p>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
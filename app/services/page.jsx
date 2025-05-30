"use client";

import { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Flutter Recipe",
    description:
      "I build an recipe application using Flutter with API calls.",
    href: "https://github.com/Luk4om/Recipe_Flutter",
  },
  {
    num: "02",
    title: "Website Recipe",
    description:
      "I build a recipe website using NextJS with API calls.",
    href: "https://github.com/Luk4om/Recipe_NextJS",
  },
  {
    num: "03",
    title: "NextJS + Framer Motion Portfolio",
    description:
      "I build websites that are fast, responsive, and user-friendly. I use the latest technologies to create websites that are optimized for search engines and mobile devices.",
    href: "https://phatcharaphon-portfolio.vercel.app/?fbclid=IwZXh0bgNhZW0CMTAAAR5UArMYuMLHFKvEk9K10pNqNYzWQ4IhrUdgeVe7_oGoCJMlvpWuYNXisoVS6Q_aem_IYOjnJEdyuoxR5KEtKfpaQ",
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
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/Luk4om" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/HallsXII" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/luk._.aom/" },
  { icon: <FaLinkedinIn />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  const [message, setMessage] = useState("");

  const handleClick = (path) => {
    if (!path) {
      setMessage("ยังไม่มีลิงก์ในส่วนนี้ครับ");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return item.path ? (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        ) : (
          <button
            key={index}
            onClick={() => handleClick(item.path)}
            className={iconStyles}
          >
            {item.icon}
          </button>
        );
      })}
      {message && <p className="text-rose-500 mt-2">{message}</p>}
    </div>
  );
};

export default Socials;
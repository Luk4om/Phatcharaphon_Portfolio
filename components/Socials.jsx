import Link from "next/link"

import { FaGithub, FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa"

const social = [
    { icon: <FaGithub />, path: "https://github.com/Luk4om" },
    { icon: <FaFacebook />, path: "https://www.facebook.com/HallsXII" },
    { icon: <FaInstagram />, path: "" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/halls-xii-55544335b/" },
]
const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
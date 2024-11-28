import React from "react";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const links = [
    {
        href: "https://www.discord.com",
        icon: <FaDiscord />,
    },
    {
        href: "https://www.x.com",
        icon: <FaTwitter />,
    },
    {
        href: "https://www.instagram.com",
        icon: <FaInstagram />,
    },
    {
        href: "https://www.facebook.com",
        icon: <FaFacebook />,
    },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center md:text-left text-sm">
                    &copy; Nova 2024. All Rights Resevered
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {links?.map((link) => (
                        <a
                            key={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.href}
                            className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-black text-center md:text-right hover:underline text-sm">
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;

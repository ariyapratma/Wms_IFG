"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 text-white relative">
            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="focus:outline-none">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`absolute top-4 right-4 flex flex-col space-y-4 md:flex md:flex-row md:space-y-0 md:space-x-2 p-4 md:p-0 rounded-lg shadow md:shadow-none ${isOpen ? "flex" : "hidden"} md:flex`}>
                <li>
                    <Link href="/login">Login</Link>
                </li>
                <span>|</span>
                <li>
                    <Link href="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}
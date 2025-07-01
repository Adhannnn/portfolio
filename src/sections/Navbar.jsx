import React, { useState } from "react";

/* ——— Icons ——— */
const HamburgerIcon = () => (
    <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
        />
    </svg>
    );

    const CloseIcon = () => (
    <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
        />
    </svg>
    );

    /* ——— Navbar ——— */
    const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: "#landing", label: "Home" },
        { href: "#aboutMe", label: "About Me" },
        { href: "#skills", label: "Skills" },
        { href: "#experiences", label: "Experiences"},
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="bg-black/65 text-white shadow-lg font-sans w-full fixed top-0 left-0 z-50">
        {/* Full‑width inner wrapper */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
            {/* My Name */}
            <a href="#" className="text-2xl font-semibold leading-tight">
                Wahyu
                <br />
                Ramadhan
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className="
            relative
            transition-transform duration-300 hover:-translate-y-[2px]

            after:content-[''] after:absolute
            after:left-0 after:-bottom-[5px]
            after:h-[2px] after:w-0
            after:bg-cyan-300
            after:transition-[width] after:duration-300
            hover:after:w-full
        "
                >
                    {link.label}
                </a>
                ))}
            </div>

            {/* Mobile menu button */}
            <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
            >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
            </div>
        </div>

        {/* Mobile menu */}
        <div
            id="mobile-menu"
            className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
            } transition-all duration-300 ease-in-out`}
        >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium hover:bg-gray-800 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
                >
                {link.label}
                </a>
            ))}
            </div>
        </div>
        </nav>
    );
};

export default Navbar;

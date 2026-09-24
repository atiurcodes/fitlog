"use client";

import logo from "@/assets/logo.png";
import { FitContext } from "@/context/FitContext";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

const Navbar = () => {
    const fitContext = use(FitContext);
    if (!fitContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { plan } = fitContext;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = (
        <>
            <li>
                <Link href="/workouts">Workouts</Link>
            </li>

            <li>
                <Link href="/my-plan">My Plan</Link>
            </li>
        </>
    );

    return (
        <section className="relative z-50 border-b-2 border-[#24262B]">

            <div className="container mx-auto px-4 py-4">

                {/* Main Navbar */}
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Fitlog" width={40} height={40} />
                        <p className="text-white font-bold text-xl">FITLOG</p>
                    </Link>
                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {links}
                        </ul>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-5">
                        <button>Plan</button>
                        <button>Saved</button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white text-2xl"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`inline-block transition-all duration-300 ${isMenuOpen
                                ? "rotate-90 scale-110"
                                : "rotate-0 scale-100"
                                }`}
                        >
                            {isMenuOpen ? "✕" : "☰"}
                        </span>
                    </button>
                </div>

                {/* Mobile Overlay Menu */}
                <div
                    className={`absolute left-0 top-full w-full overflow-hidden rounded-b-2xl border-b border-[#334155] bg-[#0F172A]/95 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out md:hidden ${isMenuOpen
                        ? "max-h-80 translate-y-0 opacity-100"
                        : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
                        }`}
                >
                    <div className="container mx-auto px-4 py-6">
                        <ul className="flex flex-col gap-1">

                            <li>
                                <Link
                                    href="/workouts"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-3 py-3 text-white transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/workouts"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block rounded-lg px-3 py-3 text-white transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
                                >
                                    My Plan
                                </Link>
                            </li>

                            <li>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full rounded-lg px-3 py-3 text-left text-white transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
                                >
                                    Plan
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full rounded-lg px-3 py-3 text-left text-white transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
                                >
                                    Saved
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Navbar;
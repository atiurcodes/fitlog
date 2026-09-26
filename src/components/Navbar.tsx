
"use client";

import logo from "@/assets/logo.png";
import { FitContext } from "@/context/FitContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use } from "react";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();

    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("Navbar must be used inside FitProvider");
    }

    const {
        plans,
        saves,
    } = fitContext;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navbar Plan/Saved active state
    const [activeNav, setActiveNav] = useState<"plan" | "saved">("plan");

    const isWorkoutsActive =
        pathname === "/" || pathname.startsWith("/workouts");

    const isMyPlanActive =
        pathname.startsWith("/my-plan");

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={`transition-colors duration-200 ${isWorkoutsActive
                        ? "text-brand bg-brand/20 px-4 py-2 rounded-full"
                        : "text-white hover:text-brand"
                        }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    className={`transition-colors duration-200 ${isMyPlanActive
                        ? "text-brand bg-brand/20 px-4 py-2 rounded-full"
                        : "text-white hover:text-brand"
                        }`}
                >
                    My Plan
                </Link>
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
                        <Image
                            src={logo}
                            alt="Fitlog"
                            width={40}
                            height={40}
                        />

                        <p className="text-xl font-bold text-white">
                            FITLOG
                        </p>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {links}
                        </ul>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden items-center gap-4 md:flex">

                        {/* Plan */}
                        <Link
                            href="/my-plan"
                            onClick={() => setActiveNav("plan")}
                            className={`flex items-center gap-2 text-sm transition-colors duration-200 ${activeNav === "plan"
                                ? "text-brand"
                                : "text-white hover:text-brand"
                                }`}
                        >
                            <span>Plan</span>

                            <span className="rounded-full bg-brand px-2.5 py-0.5 text-sm font-semibold text-black">
                                {plans.length}
                            </span>
                        </Link>

                        {/* Saved */}
                        <Link
                            href="/my-plan"
                            onClick={() => setActiveNav("saved")}
                            className={`flex items-center gap-2 text-sm transition-colors duration-200 ${activeNav === "saved"
                                ? "text-brand"
                                : "text-white hover:text-brand"
                                }`}
                        >
                            <span>Saved</span>

                            <span className="rounded-full border border-brand px-2.5 py-0.5 text-sm font-semibold text-brand">
                                {saves.length}
                            </span>
                        </Link>

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl text-white md:hidden"
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

                            {/* Workouts */}
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block rounded-lg px-3 py-3 transition-all duration-200 hover:translate-x-1 hover:bg-white/10 ${isWorkoutsActive
                                        ? "bg-white/10 text-brand"
                                        : "text-white"
                                        }`}
                                >
                                    Workouts
                                </Link>
                            </li>

                            {/* My Plan */}
                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block rounded-lg px-3 py-3 transition-all duration-200 hover:translate-x-1 hover:bg-white/10 ${isMyPlanActive
                                        ? "bg-white/10 text-brand"
                                        : "text-white"
                                        }`}
                                >
                                    My Plan
                                </Link>
                            </li>

                            {/* Plan */}
                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={() => {
                                        setActiveNav("plan");
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full rounded-lg px-3 py-3 text-left transition-all duration-200 hover:translate-x-1 hover:bg-white/10 ${activeNav === "plan"
                                        ? "bg-brand/20 text-brand"
                                        : "text-white"
                                        }`}
                                >
                                    Plan
                                </Link>
                            </li>

                            {/* Saved */}
                            <li>
                                <Link
                                    href="/my-plan"
                                    onClick={() => {
                                        setActiveNav("saved");
                                        setIsMenuOpen(false);
                                    }}
                                    className={`block w-full rounded-lg px-3 py-3 text-left transition-all duration-200 hover:translate-x-1 hover:bg-white/10 ${activeNav === "saved"
                                        ? "bg-brand/20 text-brand"
                                        : "text-white"
                                        }`}
                                >
                                    Saved
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;

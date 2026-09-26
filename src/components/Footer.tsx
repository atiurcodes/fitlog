import logo from '@/assets/logo.png'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
                {/* Brand */}
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

                {/* Copyright */}
                <p className="text-center text-sm text-slate-400">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
}

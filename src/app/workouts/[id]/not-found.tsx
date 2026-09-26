
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
                    FitLog
                </p>

                <h1 className="mt-4 text-8xl font-black tracking-tight text-white">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    Workout Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">
                    Sorry, we couldn&apos;t find the workout you&apos;re
                    looking for. The workout may have been removed or the
                    workout ID is invalid.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                    Back to Library
                </Link>
            </div>
        </main>
    );
}

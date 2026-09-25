
'use client'

import { FitContext } from "@/context/FitContext";
import { WorkoutType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export interface MyPlanCardProps {
    plan: WorkoutType;
    activeTab: 'today' | 'saved';
}

export default function MyPlanCard({
    plan,
    activeTab,
}: MyPlanCardProps) {

    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("MyPlanCard must be used inside FitProvider");
    }

    const {
        plans,
        saves,
        setPlans,
        setSaves,
    } = fitContext;

    const handleRemove = () => {

        if (activeTab === 'today') {
            const updatedPlans = plans.filter(
                (item) => item.id !== plan.id
            );

            setPlans(updatedPlans);
        } else {
            const updatedSaves = saves.filter(
                (item) => item.id !== plan.id
            );

            setSaves(updatedSaves);
        }
    };

    return (
        <section>
            <div className="flex items-center justify-between bg-[#111319] text-white p-3 rounded-2xl border border-gray-800/80 shadow-xl">

                {/* Left Side: Thumbnail & Info */}
                <div className="flex items-center gap-4">

                    {/* Thumbnail Image */}
                    <Image
                        src={plan.image}
                        alt={plan.name}
                        width={100}
                        height={100}
                        className="rounded-xl"
                    />

                    {/* Text Details */}
                    <div className="flex flex-col gap-1">

                        <h3 className="text-base font-black uppercase tracking-wider text-white">
                            {plan.name}
                        </h3>

                        <p className="text-xs text-muted font-medium">
                            {plan.category}
                        </p>

                        {/* Metrics */}
                        <div className="flex items-center gap-3.5 text-xs text-gray-300 mt-1">

                            {/* Duration */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <span className="text-gray-300 font-medium">
                                    {plan.duration} min
                                </span>
                            </span>

                            {/* Calories */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="w-3.5 h-3.5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2z" />
                                </svg>

                                <span className="text-gray-300 font-medium">
                                    {plan.caloriesBurned} kcal
                                </span>
                            </span>

                            {/* Rating */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="w-3.5 h-3.5 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>

                                <span className="text-gray-300 font-medium">
                                    {plan.rating}
                                </span>
                            </span>

                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    {/* View Details */}
                    <Link
                        href={`/workouts/${plan.id}`}
                        className="px-4 py-2 border border-gray-700 hover:border-gray-500 text-xs font-semibold text-gray-200 rounded-full transition-all duration-200"
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === 'today' && (
                        <button
                            type="button"
                            className="flex items-center gap-1.5 px-4 py-2 bg-lime-400 hover:bg-lime-300 text-black font-bold text-xs rounded-full transition-all duration-200"
                        >
                            <svg
                                className="w-4 h-4 stroke-[3]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>

                            Mark as Done
                        </button>
                    )}

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="text-gray-500 hover:text-white transition-colors p-1 ml-1"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    );
}


'use client'

import { FitContext } from "@/context/FitContext";
import { WorkoutType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { toast } from "react-toastify";

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
        completedPlans,
        setCompletedPlans,
    } = fitContext;

    // Check whether this workout is already completed
    const isDone = completedPlans.includes(plan.id);

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

    const handleMarkAsDone = () => {

        // Prevent adding the same workout twice
        if (isDone) return;

        setCompletedPlans((prev) => [
            ...prev,
            plan.id
        ]);

        toast.success(`${plan.name} marked as done!`);
    };

    return (
        <section>
            <div className="flex flex-col gap-4 rounded-2xl border border-gray-800/80 bg-[#111319] p-3 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between">

                {/* Left Side: Thumbnail & Info */}
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                    {/* Thumbnail Image */}
                    <Image
                        src={plan.image}
                        alt={plan.name}
                        width={100}
                        height={100}
                        className="h-20 w-20 shrink-0 rounded-xl sm:h-[100px] sm:w-[100px]"
                    />

                    {/* Text Details */}
                    <div className="flex min-w-0 flex-col gap-1">

                        <h3 className="truncate text-sm font-black uppercase tracking-wider text-white sm:text-base">
                            {plan.name}
                        </h3>

                        <p className="text-xs font-medium text-muted">
                            {plan.category}
                        </p>

                        {/* Metrics */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-300 sm:mt-1 sm:gap-3.5">

                            {/* Duration */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="h-3.5 w-3.5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <span className="font-medium text-gray-300">
                                    {plan.duration} min
                                </span>
                            </span>

                            {/* Calories */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="h-3.5 w-3.5 shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2c0 0-5 4-5 8.5C7 13.5 9.2 16 12 16s5-2.5 5-5.5C17 6 12 2 12 2z" />
                                </svg>

                                <span className="font-medium text-gray-300">
                                    {plan.caloriesBurned} kcal
                                </span>
                            </span>

                            {/* Rating */}
                            <span className="flex items-center gap-1.5 text-lime-400">
                                <svg
                                    className="h-3.5 w-3.5 shrink-0 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 5.82 21l5.46-4.73L5.82 21z" />
                                </svg>

                                <span className="font-medium text-gray-300">
                                    {plan.rating}
                                </span>
                            </span>

                        </div>
                    </div>
                </div>

                {/* Right Side / Mobile Bottom */}
                <div className="flex flex-wrap items-center justify-start gap-2 sm:justify-end sm:gap-3">

                    {/* View Details */}
                    <Link
                        href={`/workouts/${plan.id}`}
                        className="rounded-full border border-gray-700 px-3 py-2 text-xs font-semibold text-gray-200 transition-all duration-200 hover:border-gray-500 sm:px-4"
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    {activeTab === 'today' && (
                        <button
                            type="button"
                            onClick={handleMarkAsDone}
                            disabled={isDone}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-bold transition-all duration-200 sm:px-4 ${isDone
                                ? "cursor-default bg-gray-700 text-gray-300"
                                : "bg-lime-400 text-black hover:bg-lime-300"
                                }`}
                        >
                            <svg
                                className="h-4 w-4 stroke-[3]"
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

                            {isDone ? "Done" : "Mark as Done"}
                        </button>
                    )}

                    {/* Remove */}
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="rounded-full p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
                    >
                        <svg
                            className="h-4 w-4"
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

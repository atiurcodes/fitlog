'use client'

import MyPlanCard from "@/components/MyPlanCard";
import NoData from "@/components/NoData";
import { FitContext } from "@/context/FitContext";
import { WorkoutType } from "@/type";
import { use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type SortOption = "Duration" | "Calories" | "Rating";

type TabType = "today" | "saved";

export default function Page() {
    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("My Plan page must be used inside FitProvider");
    }

    const {
        plans,
        saves,
    } = fitContext;

    const router = useRouter();
    const searchParams = useSearchParams();

    // URL থেকে active tab নেওয়া
    const tab = searchParams.get("tab");

    const activeTab: TabType = tab === "saved" ? "saved" : "today";

    // Sort state
    const [sortBy, setSortBy] = useState<SortOption>("Duration");

    // Active tab অনুযায়ী current list
    const currentPlans = activeTab === "today" ? plans : saves;

    // Current list-এর উপর sorting
    const sortedPlans = [...currentPlans].sort((a, b) => {
        switch (sortBy) {
            case "Duration":
                return a.duration - b.duration;

            case "Calories":
                return a.caloriesBurned - b.caloriesBurned;

            case "Rating":
                return a.rating - b.rating;

            default:
                return 0;
        }
    });

    // Dynamic metrics
    const totalExercises = currentPlans.length;

    const totalMinutes = currentPlans.reduce(
        (total, plan) => total + plan.duration,
        0
    );

    const totalCalories = currentPlans.reduce(
        (total, plan) => total + plan.caloriesBurned,
        0
    );

    return (
        <section className="container mx-auto px-4 text-white">
            <div className="mx-auto max-w-5xl space-y-6 py-8 sm:py-10">

                {/* Heading */}
                <div>
                    <h2 className="text-2xl font-bold leading-tight uppercase sm:text-3xl">
                        MY PLAN
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Top Metrics Container */}
                <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#15171D] p-4 sm:p-6">

                    {/* Exercises */}
                    <div className="flex-1 border-r border-[#24262B] pr-2 sm:pr-4">
                        <h2 className="text-xs font-semibold text-muted sm:text-sm">
                            Exercises
                        </h2>

                        <p className="mt-1 text-lg font-bold sm:text-xl">
                            {totalExercises}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="flex-1 border-r border-[#24262B] px-2 sm:px-4">
                        <h2 className="text-xs font-semibold text-muted sm:text-sm">
                            Minutes
                        </h2>

                        <p className="mt-1 text-lg font-bold sm:text-xl">
                            {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex-1 pl-2 sm:pl-4">
                        <h2 className="text-xs font-semibold text-muted sm:text-sm">
                            Calories
                        </h2>

                        <p className="mt-1 text-lg font-bold sm:text-xl">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs & Sort Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    {/* Tabs */}
                    <div className="flex w-fit items-center gap-1 rounded-xl border border-gray-800 bg-[#15171D] p-1.5">

                        {/* Today's Plan */}
                        <button
                            type="button"
                            onClick={() => router.push("/my-plan?tab=today")}
                            className={`cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:px-4 ${activeTab === "today"
                                ? "bg-[#21242D] text-white shadow"
                                : "text-muted hover:text-white"
                                }`}
                        >
                            Today's plan
                        </button>

                        {/* Saved */}
                        <button
                            type="button"
                            onClick={() => router.push("/my-plan?tab=saved")}
                            className={`cursor-pointer rounded-lg px-3 py-2 text-xs font-semibold transition-all sm:px-4 ${activeTab === "saved"
                                ? "bg-[#21242D] text-white shadow"
                                : "text-muted hover:text-white"
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex w-full items-center gap-2 text-xs sm:w-auto">

                        <p className="text-muted">
                            Sort By
                        </p>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value as SortOption)
                            }
                            className="w-full rounded-xl border border-gray-800 bg-[#15171D] px-3 py-2 text-xs text-muted outline-none sm:w-auto"
                        >
                            <option value="Duration">
                                Duration
                            </option>

                            <option value="Calories">
                                Calories
                            </option>

                            <option value="Rating">
                                Rating
                            </option>
                        </select>

                    </div>

                </div>

                {/* Card Display Area */}
                <div className="space-y-4 pt-2">

                    {sortedPlans.length > 0 ? (

                        sortedPlans.map((plan: WorkoutType) => (
                            <MyPlanCard
                                key={plan.id}
                                plan={plan}
                                activeTab={activeTab}
                            />
                        ))

                    ) : (

                        <NoData />

                    )}

                </div>

            </div>
        </section>
    );
}
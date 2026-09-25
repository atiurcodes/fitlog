
'use client'

import MyPlanCard from "@/components/MyPlanCard";
import NoData from "@/components/NoData";
import { FitContext } from "@/context/FitContext";
import { WorkoutType } from "@/type";
import { use } from "react";

export default function Page() {
    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("My Plan page must be used inside FitProvider");
    }

    const {
        plans,
        saves,
        activeTab,
        setActiveTab,
    } = fitContext;

    // Active tab অনুযায়ী data select হবে
    const currentPlans = activeTab === 'today' ? plans : saves;

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
            <div className="mx-auto max-w-5xl space-y-6 py-10">

                {/* Heading */}
                <div>
                    <h2 className="text-2xl font-bold leading-tight uppercase lg:text-3xl">
                        MY PLAN
                    </h2>

                    <p className="mt-1 text-sm text-muted">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Top Metrics Container */}
                <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-[#15171D] p-6">

                    {/* Exercises */}
                    <div className="flex-1 border-r border-[#24262B]">
                        <h2 className="text-sm font-semibold text-muted">
                            Exercises
                        </h2>

                        <p className="mt-1 text-xl font-bold">
                            {totalExercises}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="flex-1 border-r border-[#24262B]">
                        <h2 className="text-sm font-semibold text-muted">
                            Minutes
                        </h2>

                        <p className="mt-1 text-xl font-bold">
                            {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="flex-1">
                        <h2 className="text-sm font-semibold text-muted">
                            Calories
                        </h2>

                        <p className="mt-1 text-xl font-bold">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs & Sort Header */}
                <div className="flex items-center justify-between">

                    {/* Tabs */}
                    <div className="flex items-center gap-1 rounded-xl border border-gray-800 bg-[#15171D] p-1.5">

                        {/* Today's Plan */}
                        <button
                            type="button"
                            onClick={() => setActiveTab('today')}
                            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${activeTab === 'today'
                                ? 'bg-[#21242D] text-white shadow'
                                : 'text-muted hover:text-white'
                                }`}
                        >
                            Today's plan
                        </button>

                        {/* Saved */}
                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-all ${activeTab === 'saved'
                                ? 'bg-[#21242D] text-white shadow'
                                : 'text-muted hover:text-white'
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort Dropdown */}
                    <div>
                        <select
                            defaultValue="Duration"
                            className="rounded-xl border border-gray-800 bg-[#15171D] px-3 py-2 text-xs text-white outline-none"
                        >
                            <option value="Duration">
                                Sort By: Duration
                            </option>

                            <option value="Calories">
                                Sort By: Calories
                            </option>
                        </select>
                    </div>

                </div>

                {/* Card Display Area */}
                <div className="space-y-4 pt-2">

                    {currentPlans.length > 0 ? (

                        currentPlans.map((plan: WorkoutType) => (
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

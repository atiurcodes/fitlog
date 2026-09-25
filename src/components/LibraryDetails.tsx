
import { WorkoutType } from "@/type"
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import MyPlanButton from "./LibraryDetails/myPlanButton";
import SaveButton from "./LibraryDetails/SaveButton";

export interface LibraryDetailsProps {
    singleData: WorkoutType;
}

export default function LibraryDetails({ singleData }: LibraryDetailsProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10 lg:flex-row">

                <div className="w-full lg:w-1/2">
                    <Image
                        src={singleData.image}
                        alt={singleData.name}
                        width={500}
                        height={500}
                        className="mx-auto w-full max-w-[600px] rounded-xl object-cover"
                    />
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                        {singleData.name}
                    </h2>

                    <p className="py-2 text-sm leading-6 text-muted sm:text-base">
                        {singleData.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {singleData.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-brand px-3 py-1 text-sm font-bold text-black sm:px-4 sm:text-base"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="my-6 rounded-xl bg-[#15171D] p-3 sm:p-4">

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                EQUIPMENT
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.equipment}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                DIFFICULTY
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.difficulty}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                SETS
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.sets}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                REPS
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.reps}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                DURATION
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.duration}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                CALORIES
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.caloriesBurned}
                            </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-2">
                            <h2 className="text-sm font-bold text-muted sm:text-xl">
                                RATING
                            </h2>
                            <p className="text-right text-sm font-semibold text-muted sm:text-base">
                                {singleData.rating}
                            </p>
                        </div>

                    </div>

                    <div>
                        <h2>INSTRUCTIONS</h2>

                        <ol className="space-y-2 pl-4 text-sm sm:text-base">
                            {
                                singleData.instructions.map((ins, index) => (
                                    <li key={index}>{ins}</li>
                                ))
                            }
                        </ol>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <MyPlanButton singleData={singleData} />
                        <SaveButton singleData={singleData} />
                    </div>

                </div>
            </div>
        </section>
    )
}

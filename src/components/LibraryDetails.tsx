import { WorkoutType } from "@/type"
import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import MyPlanButton from "./LibraryDetails/myPlanButton";

export interface LibraryDetailsProps {
    singleData: WorkoutType;
}

export default function LibraryDetails({ singleData }: LibraryDetailsProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="flex gap-10 py-10">
                <div className="div">
                    <Image src={singleData.image} alt={singleData.name} width={500} height={500} className="w-full rounded-xl" />
                </div>
                <div className="div">
                    <h2 className="text-2xl font-bold leading-tight text-white lg:text-4xl">{singleData.name}</h2>
                    <p className="text-secondary py-2">{singleData.description}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        {singleData.muscleGroups.map((muscle, index) => (
                            <span
                                key={index}
                                className="text-black bg-primary px-3 sm:px-4 py-1 rounded-full font-bold text-sm sm:text-base"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>
                    <div className="bg-[#15171D] p-4 rounded-xl my-6">
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">EQUIPMENT</h2>
                            <p className="text-secondary font-semibold">{singleData.equipment}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">DIFFICULTY</h2>
                            <p className="text-secondary font-semibold">{singleData.difficulty}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">SETS</h2>
                            <p className="text-secondary font-semibold">{singleData.sets}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">REPS</h2>
                            <p className="text-secondary font-semibold">{singleData.reps}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">DURATION</h2>
                            <p className="text-secondary font-semibold">{singleData.duration}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">CALORIES</h2>
                            <p className="text-secondary font-semibold">{singleData.caloriesBurned}</p>
                        </div>
                        <div className="flex items-center justify-between p-2 ">
                            <h2 className="text-secondary text-xl font-bold">RATING</h2>
                            <p className="text-secondary font-semibold">{singleData.rating}</p>
                        </div>
                    </div>
                    <div>
                        <h2>INSTRUCTIONS</h2>
                        <ol className="list-decimal pl-4 space-y-2">
                            {
                                singleData.instructions.map((ins, index) => <li key={index}>{ins}</li>)
                            }
                        </ol>
                    </div>
                    <div className="flex items-center gap-4">
                        <MyPlanButton singleData={singleData} />
                        <button className="flex items-center gap-2 mt-7 rounded-lg bg-primary px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <FiBookmark />Save for later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
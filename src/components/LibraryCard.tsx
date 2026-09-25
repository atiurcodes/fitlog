import { WorkoutType } from "@/type"
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

export interface LibraryCardProps {
    data: WorkoutType;
}

export default function LibraryCard({ data }: LibraryCardProps) {
    return (
        <section className="py-10">
            <Link href={`/workouts/${data.id}`} >
                <div className="bg-[#15171D] rounded-xl border border-transparent hover:border-brand transition-all duration-300 overflow-hidden">
                    <div>
                        <Image
                            src={data.image}
                            alt={data.name}
                            width={400}
                            height={300}
                            className="h-52 sm:h-56 w-full object-cover rounded-t-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-5 space-y-4 sm:space-y-5">

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                            {data.muscleGroups.map((muscle, index) => (
                                <span
                                    key={index}
                                    className="text-black bg-brand px-3 sm:px-4 py-1 rounded-full font-bold text-sm sm:text-base"
                                >
                                    {muscle}
                                </span>
                            ))}
                        </div>

                        {/* Name & Equipment */}
                        <div className="space-y-2">
                            <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-white">
                                {data.name}
                            </h2>

                            <p className="text-muted text-sm sm:text-base">
                                {data.equipment}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full border-t-2 border-[#24262B]"></div>

                        {/* Workout Info */}
                        <div className="flex flex-wrap gap-x-5 gap-y-3 sm:gap-x-8 items-center text-muted text-sm sm:text-base">
                            <span className="flex items-center gap-2">
                                <FaClock />
                                {data.duration}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaFire />
                                {data.caloriesBurned}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaStar />
                                {data.rating}
                            </span>
                        </div>

                    </div>
                </div>
            </Link>
        </section>
    )
}
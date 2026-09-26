
import { WorkoutType } from "@/type";
import LibraryCard from "./WorkoutsCard";

const PromiseData = async (): Promise<WorkoutType[]> => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!res.ok) {
        throw new Error("Failed to fetch workout data.");
    }

    const data = await res.json();

    return data;
};

export default async function Workouts() {
    const datas = await PromiseData();

    return (
        <section className="container mx-auto px-4" id="library">
            <div className="space-y-1">
                <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
                    THE LIBRARY
                </h2>

                <p className="text-muted mb-6">
                    Twelve lifts covering every major muscle group.
                </p>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {datas.map((data) => (
                        <LibraryCard
                            key={data.id}
                            data={data}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

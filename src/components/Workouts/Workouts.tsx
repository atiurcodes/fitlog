
import { WorkoutType } from "@/type";
import LibraryCard from "./LibraryCard";

const PromiseData = async (): Promise<WorkoutType[]> => {
    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch workout data.");
    }

    const data = await res.json();

    return data;
};

export default async function Workouts() {
    const datas = await PromiseData();

    return (
        <section className="container mx-auto px-4">
            <div className="space-y-1 py-4">
                <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">
                    THE LIBRARY
                </h2>

                <p className="text-muted">
                    Twelve lifts covering every major muscle group.
                </p>

                <div className="grid grid-cols-3 items-center gap-5">
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

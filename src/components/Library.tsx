import { WorkoutType } from "@/type"
import LibraryCard from "./LibraryCard";

export interface LibraryProps {
    datas: WorkoutType[];
}

export default function Library({ datas }: LibraryProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="space-y-1 py-4">
                <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">THE LIBRARY</h2>
                <p className="text-secondary">Twelve lifts covering every major muscle group.</p>
                <div className="grid grid-cols-3 items-center gap-5">
                    {
                        datas.map(data => <LibraryCard key={data.id} data={data} />)
                    }
                </div>
            </div>
        </section>
    )
}
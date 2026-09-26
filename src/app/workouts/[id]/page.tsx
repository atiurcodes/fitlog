
import LibraryDetails from "@/components/Workouts/WorkoutsDetails";
import { WorkoutType } from "@/type";
import { notFound } from "next/navigation";

export interface PageProps {
    params: Promise<{ id: string }>;
}

const singleDataPromise = async (id: string): Promise<WorkoutType> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        notFound();
    }
    const data = await res.json();
    return data;
};

export default async function Page({ params }: PageProps) {
    const { id } = await params;
    const singleData = await singleDataPromise(id);
    return (
        <section>
            <LibraryDetails singleData={singleData} />
        </section>
    )
}
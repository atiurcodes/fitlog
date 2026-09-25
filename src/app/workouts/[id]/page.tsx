
import LibraryDetails from "@/components/Workouts/LibraryDetails";
import { WorkoutType } from "@/type";

export interface PageProps {
    params: Promise<{ id: string }>;
}

const singleDataPromise = async (id: string): Promise<WorkoutType> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        throw new Error('Failed to single data fatching.')
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
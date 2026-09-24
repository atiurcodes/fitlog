import Library from "@/components/Library";
import { WorkoutType } from "@/type";

export interface PageProps {
    prop: string
}

const PromiseData = async (): Promise<WorkoutType[]> => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
    if (!res.ok) {
        if (!res.ok) {
            throw new Error('Failed to Books data fatching.')
        }
    }
    const data = await res.json();
    return data;
}

export default async function Page({ prop }: PageProps) {
    const datas = await PromiseData();
    return (
        <section>
            <Library datas={datas} />
        </section>
    )
}
export interface PageProps {
    prop: string
}

export default function Page({ prop }: PageProps) {
    return (
        <section className="container mx-auto px-4">
            <div className="py-10">
                <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">MY PLAN</h2>
                <p className="text-secondary">Cap of five lifts for today. Finish them, then load more.</p>
            </div>
        </section>
    )
}
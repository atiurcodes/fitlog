import Image from "next/image";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <div className="flex flex-col-reverse items-center justify-between gap-10 px-4 py-12 sm:px-8 md:flex-row md:gap-8 
                md:px-10 md:py-10 lg:py-12 bg-[#15171D] rounded-xl">

                {/* Banner Content */}
                <div className="w-full text-center md:w-1/2 md:text-left">
                    <h4 className="mb-3 text-sm font-semibold tracking-widest text-brand">
                        WORKOUT LIBRARY
                    </h4>

                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <button className="mt-7 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Banner Image */}
                <div className="w-full md:w-1/2">
                    <Image
                        src={bannerImg}
                        alt="Banner Image"
                        width={450}
                        height={450}
                        className="mx-auto h-auto w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;
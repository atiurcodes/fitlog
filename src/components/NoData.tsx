import Link from 'next/link';
import React from 'react';

const NoData = () => {
    return (
        <section className='container mx-auto px-4'>
            <div className='bg-[#15171D] p-10 flex flex-col justify-center items-center space-y-4 rounded-xl'>
                <h2 className="text-2xl font-bold leading-tight text-white lg:text-3xl">NOTHING HERE YET</h2>
                <p className="text-muted">Browse the library and add a lift to get today moving.</p>
                <Link href='/'>
                    <button className="cursor-pointer flex items-center gap-2 mt-7 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Go to workouts
                    </button></Link>
            </div>
        </section>
    );
};

export default NoData;
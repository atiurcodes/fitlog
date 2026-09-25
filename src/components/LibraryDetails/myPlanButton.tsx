'use client'
import { FitContext } from '@/context/FitContext';
import { WorkoutType } from '@/type';
import React, { use } from 'react';
import { FaShoppingBag } from 'react-icons/fa';

const MyPlanButton = ({ singleData }: { singleData: WorkoutType }) => {
    const fitContext = use(FitContext);
    if (!fitContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { plans, setPlans } = fitContext;
    const handleAddPlan = (singleData: WorkoutType) => {
        setPlans([...plans, singleData]);
    }
    return (
        <div>
            <button onClick={() => handleAddPlan(singleData)}
                className="flex items-center gap-2 mt-7 rounded-lg bg-brand cursor-pointer px-6 py-3 font-semibold text-black 
                transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <FaShoppingBag />Add to today's plan
            </button>
        </div>
    );
};

export default MyPlanButton;
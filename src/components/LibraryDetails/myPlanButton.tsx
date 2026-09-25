
'use client'

import { FitContext } from '@/context/FitContext';
import { WorkoutType } from '@/type';
import { use } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyPlanButton = ({
    singleData,
}: {
    singleData: WorkoutType;
}) => {
    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("MyPlanButton must be used inside FitProvider");
    }

    const { plans, setPlans } = fitContext;

    const handleAddPlan = (singleData: WorkoutType) => {
        const alreadyExists = plans.some(
            (plan) => plan.id === singleData.id
        );

        if (alreadyExists) {
            toast.info(`${singleData.name} is already in your plan.`);
            return;
        }

        setPlans([...plans, singleData]);
        toast.success(`${singleData.name} added to your plan!`);

    };

    return (
        <div>
            <button
                type="button"
                onClick={() => handleAddPlan(singleData)}
                className="flex items-center gap-2 mt-7 rounded-lg bg-brand cursor-pointer px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                <FaShoppingBag />
                Add to today's plan
            </button>
        </div>
    );
};

export default MyPlanButton;

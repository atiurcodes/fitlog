
'use client'

import { FitContext } from '@/context/FitContext';
import { WorkoutType } from '@/type';
import { use } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';

const SaveButton = ({ singleData }: { singleData: WorkoutType }) => {

    const fitContext = use(FitContext);

    if (!fitContext) {
        throw new Error("SaveButton must be used inside FitProvider");
    }

    const { saves, setSaves } = fitContext;

    const handleSavePlan = (singleData: WorkoutType) => {

        const alreadyExists = saves.some(
            (plan) => plan.id === singleData.id
        );

        if (alreadyExists) {
            toast.info("This workout is already saved.");
            return;
        }

        setSaves([...saves, singleData]);
        toast.success("Workout saved successfully.");
    };

    return (
        <div>
            <button
                type="button"
                onClick={() => handleSavePlan(singleData)}
                className="mt-7 flex cursor-pointer items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                <FiBookmark />
                Save for later
            </button>
        </div>
    );
};

export default SaveButton;

'use client'
import { FitContext } from '@/context/FitContext';
import { WorkoutType } from '@/type';
import React, { use } from 'react';
import { FiBookmark } from 'react-icons/fi';

const SaveButton = ({ singleData }: { singleData: WorkoutType }) => {
    const fitContext = use(FitContext);
    if (!fitContext) {
        throw new Error("ReadButton must be used inside BooksProvider");
    }
    const { saves, setSaves } = fitContext;
    const handleSavePlan = (singleData: WorkoutType) => {
        const alreadyExists = saves.some(
            (plan) => plan.id === singleData.id
        );
        if (alreadyExists) {
            return;
        }
        setSaves([...saves, singleData]);
    }
    return (
        <div>
            <button onClick={() => handleSavePlan(singleData)}
                className="flex items-center gap-2 mt-7 rounded-lg bg-brand px-6 py-3 font-semibold text-black transition-all 
            duration-300 hover:scale-105 hover:shadow-lg">
                <FiBookmark />Save for later
            </button>
        </div>
    );
};

export default SaveButton;
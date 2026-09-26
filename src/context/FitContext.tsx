'use client'

import { WorkoutType } from "@/type";
import { createContext, ReactNode, useState } from "react";

export interface FitContextType {
    plans: WorkoutType[];
    setPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;

    saves: WorkoutType[];
    setSaves: React.Dispatch<React.SetStateAction<WorkoutType[]>>;

    // Completed workout IDs
    completedPlans: string[];
    setCompletedPlans: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FitContext = createContext<FitContextType | null>(null);

export default function FitProvider({ children }: { children: ReactNode }) {
    const [plans, setPlans] = useState<WorkoutType[]>([]);
    const [saves, setSaves] = useState<WorkoutType[]>([]);

    // Store IDs of completed workouts
    const [completedPlans, setCompletedPlans] = useState<string[]>([]);

    const sharedData = {
        plans,
        setPlans,

        saves,
        setSaves,

        completedPlans,
        setCompletedPlans,
    };

    return (
        <FitContext.Provider value={sharedData}>
            {children}
        </FitContext.Provider>
    );
}
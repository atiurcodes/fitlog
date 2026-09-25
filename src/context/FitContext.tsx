'use client'
import { WorkoutType } from "@/type";
import { createContext, ReactNode, useState } from "react"

export interface FitContextType {
    plans: WorkoutType[];
    setPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
    saves: WorkoutType[];
    setSaves: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
}

export const FitContext = createContext<FitContextType | null>(null);

export default function FitProvider({ children }: { children: ReactNode }) {
    const [plans, setPlans] = useState<WorkoutType[]>([]);
    const [saves, setSaves] = useState<WorkoutType[]>([]);

    const sharedData = {
        plans,
        setPlans,
        saves,
        setSaves
    }

    return (
        <FitContext.Provider value={sharedData}>
            {children}
        </FitContext.Provider>
    )
}
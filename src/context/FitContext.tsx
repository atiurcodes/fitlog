'use client'
import { WorkoutType } from "@/type";
import { createContext, ReactNode, useState } from "react"

export interface FitContextType {
    plan: WorkoutType[];
    setPlan: React.Dispatch<React.SetStateAction<WorkoutType[]>>;
}

export const FitContext = createContext<FitContextType | null>(null);

export default function FitProvider({ children }: { children: ReactNode }) {
    const [plan, setPlan] = useState<WorkoutType[]>([]);

    const sharedData = {
        plan,
        setPlan,
    }

    return (
        <FitContext.Provider value={sharedData}>
            {children}
        </FitContext.Provider>
    )
}
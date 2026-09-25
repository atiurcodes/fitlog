
'use client'

import { WorkoutType } from "@/type";
import { createContext, ReactNode, useState } from "react"

export interface FitContextType {
    plans: WorkoutType[];
    setPlans: React.Dispatch<React.SetStateAction<WorkoutType[]>>;

    saves: WorkoutType[];
    setSaves: React.Dispatch<React.SetStateAction<WorkoutType[]>>;

    activeTab: 'today' | 'saved';
    setActiveTab: React.Dispatch<React.SetStateAction<'today' | 'saved'>>;
}

export const FitContext = createContext<FitContextType | null>(null);

export default function FitProvider({ children }: { children: ReactNode }) {
    const [plans, setPlans] = useState<WorkoutType[]>([]);
    const [saves, setSaves] = useState<WorkoutType[]>([]);

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    const sharedData = {
        plans,
        setPlans,
        saves,
        setSaves,
        activeTab,
        setActiveTab,
    }

    return (
        <FitContext.Provider value={sharedData}>
            {children}
        </FitContext.Provider>
    )
}

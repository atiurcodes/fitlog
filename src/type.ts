export interface WorkoutType {
    id: string;
    name: string;
    category: string;
    muscleGroups: string[];
    equipment: string;
    difficulty: "Beginner" | "Intermediate" | "Advanced";
    duration: number;
    caloriesBurned: number;
    sets: number;
    reps: string;
    rating: number
    image: string;
    description: string;
    instructions: string[];
}
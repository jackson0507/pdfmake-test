export interface AptitudeTask {
    id: number; // needed?
    name: string; // Object Identification
    description: string;
    iconFile: string;
    color: string;
    exitColor: string;
    instructions: string;
    scoringMatrix: [number, number][];
    generalScoringMatrix?: [number, number][]; // Some tasks are used for the General Learning aptitude as well
    questionCount: number;
}


export interface Aptitude {
    type: 'General' | 'Verbal' | 'Numerical' | 'Spatial' | 'Form' | 'Clerical';
    name: string;
    score?: number;
    percentile?: number;
    scoreComponents?: string; // Holds the task raw score and score contribution
}

export interface AptitudeTask {
    id: number; // needed?
    name: string; // Object Identification
    description: string;
    iconFile: string;
    color: string;
    exitColor: string;
    instructions: string;
    aptitude: 'Verbal' | 'Numerical' | 'Spatial' | 'Form' | 'Clerical';
    scoringMatrix: [number, number][];
    generalScoringMatrix?: [number, number][]; // Some tasks are used for the General Learning aptitude as well
    questionCount: number;
}


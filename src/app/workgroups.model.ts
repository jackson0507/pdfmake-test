
export interface WorkGroup {
    id: number; // Workgroup id from db
    // Convert to INTEREST
    interestCategory: string;
    area: number;
    group: number;
    prefix: string;
    name: string;
    description: string;
    aptitude_text: 'QUALIFIED' | 'QUALIFIED W/SEM' | null;
    cutText: string; // Text version of what aptitudes and cut scores tie to this workgroup
    aptitudeMinimums: AptitudeMinimum[];
    jobs: Job[];
}

interface AptitudeMinimum {
    // aptitudeAcronym: 'MD' | 'FD' | 'KC' | 'QA' | 'PA' | 'SA' | 'NA' | 'VA' | 'GA';
    aptitudeAcronym: string;
    score: number; // 100 is the 50% percentile score minimum
}

export interface Job {
    name: string;
    dotNum: string;

    mathGEDReq: number;
    languageGEDReq: number;
    svp: number; // Specific Vocational Preparation

    wgCheck: string;
}


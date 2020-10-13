export interface Interest {
    id: number;
    interestCategory: 'Art' | 'Sci' | 'Pla' | 'Prt' | 'Mch' | 'Ind' | 'Bus' | 'Sel' | 'Acc' | 'Hum' | 'Ldi' | 'Phy';
    name: string;
    description: string;
    exampleProfessions: string;
    color: string;
    svgLogo: string;
    pillLogo: string;
    scoring: InterestScorePercentiles[];
    plikes?: number; // Unsure what this is
    likes?: number;
    dislikes?: number;
    percentile?: number;
}

export interface InterestScorePercentiles {
    type: 'T' | 'M' | 'F',
    percentiles: number[]
}
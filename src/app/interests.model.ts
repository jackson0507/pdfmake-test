export interface Interest {
    interestCategory: 'Art' | 'Sci' | 'Pla' | 'Prt' | 'Mch' | 'Ind' | 'Bus' | 'Sel' | 'Acc' | 'Hum' | 'Ldi' | 'Phy';
    name: string;
    description: string;
    color: string;
    svgLogo: string;
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
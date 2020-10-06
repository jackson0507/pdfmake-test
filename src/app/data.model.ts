export interface Evaluee {
    uid: string;
    aptitudeTasks: DataAptitudeTask[];
    interestQuestions: DataInterestQuestion[];
}
export interface DataAptitudeTask {
    id: number;
    complete: boolean;
    questions: DataAptitudeQuestion[];
}

export interface DataAptitudeQuestion {
    id: number;
    answer?: number; // Assessment taker's answer
}



export interface DataInterestQuestion {
    id: number;
    answer?: number;
}


// TODO: I swapped which timestamp was commented out and used firestore timestamp on exerciseComplete

// import { Timestamp } from '../../node_modules/rxjs/internal/operators/timestamp';
import { Timestamp } from '@firebase/firestore-types';

// TODO: switch id's back to string

export interface Evaluee {
    sqlId?: string; // legacy SQL ID, won't be used for new evaluees
    logonName: string; // continue to use?
    fullName: string; // convert first / last to full name
    birthdate: Date;
    age: number;
    currentGrade: number;
    // From evaluee_admins may be an array
    status: 'completed' | 'in progress' | 'new' | 'reviewed';
    occubrowseAccess: boolean;
    lastActivity?: string;
    lastActivityDate?: Date;
    interestComplete?: Date;
    exercisesComplete?: Timestamp;
    topInterests?: {interest: number, rank: number}[];
    lastImported?: Date;
    // templateId
    // reportConfiguration
    // standardAdmin ??????
    // csIntroViewed
    // csIntroClosedCaptioned
    // audioDelivery
    // untimedDelivery
    // interestVersion
    // mouseScreeningDelivery
    // surveyDelivery
    // trainingDelivery
    // k f m
    // k f m sources
    // language E | S
    // mouseScreening
    // mouseScreeningScores
    // defaultOverride ????
    // official ??

    // transaction_id

    evalueeAnswers: EvalueeAnswer[];
    taskResults: TaskResult[];
    interestResults: InterestResult[];
    aptitudeScores: AptitudeScore[];
    interestScores: InterestScore[];
}

// Not used evaluee_admins
// cscope_version
// time_to_complete_aptitude
// time_to_complete_interest



// From Evaluee_answers
interface EvalueeAnswer {
    taskId: number;  // The interest questionaire is a task for this purpose
    questionId: number;
    answer: number;
}


// From Evaluee_results
interface TaskResult {
    taskId: number;
    correct: number;
    incorrect: number;
    unanswered: number;
}


interface InterestResult {
    interestId: number;
    like: number;
    dislike: number;
    unanswered: number;
}

// evaluee_interests
export interface InterestScore {
    interestId: number;
    percentLike: number;
    totalScore: number;
    vsMale: number;
    vsFemale: number;
    deviation: number; // ?
    csdi: number; // ?
    rank: number;

    // ipa and evaluee_result_id are always null and significant is always "N"
}

// evaluee_aptitudes
interface AptitudeScore {
    aptitude: string;
    score: number;
    // TODO: look into how each of these is computed, do we need to store?
    percentile_score: number;
    grade_adjusted_score: number;
    SEM_adjusted_score: number;
}




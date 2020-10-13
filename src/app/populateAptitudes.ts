import { Aptitude, AptitudeTask } from './aptitudes.model';
import { objectIdentificationIcon, abstractIcon, clericalMatchingIcon, patternMatchingIcon, computationIcon, numericalReasoningIcon, wordMeaningsIcon } from './svg';


export const aptitudes: Aptitude[] = [
    { type: 'General', name: 'General Learning' },
    { type: 'Verbal', name: 'Verbal Aptitude' },
    { type: 'Numerical', name: 'Numerical Aptitude' },
    { type: 'Spatial', name: 'Spatial Aptitude' },
    { type: 'Form', name: 'Form Perception' },
    { type: 'Clerical', name: 'Clerical Perception' }
];


export const aptitudeTasks: AptitudeTask[] = [

    {
        id: 1,
        name: 'Object Identification',
        description: 'Match detailed drawings of objects',
        iconFile: objectIdentificationIcon,
        color: '#0F4C81',
        exitColor: '#A8D4FF',
        instructions: 'Choose the object that is exactly the same as the target object.',
        aptitude: 'Form',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 12], [1, 14], [2, 16], [3, 18], [4, 20], [5, 22], [6, 25], [7, 28], [8, 31], [9, 34], [10, 37], [11, 40], [12, 43], [13, 46], [14, 49], [15, 52], [16, 55], [17, 58], [18, 61], [19, 64], [20, 67], [21, 70], [22, 73], [23, 76], [24, 79], [25, 82], [26, 85], [27, 87], [28, 88], [29, 89], [30, 90]],
        questionCount: 30,
    },

    {
        id: 3,
        name: 'Shape Matching', // 'Abstract Shape Matching',
        description: 'Match shapes that may be rotated or flipped',
        iconFile: abstractIcon,
        color: '#7E60E2',
        exitColor: '#D8CEF9',
        instructions: 'Choose the shape that is exactly the same as the target shape, even if it is rotated or flipped.',
        aptitude: 'Form',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 32], [1, 33], [2, 34], [3, 35], [4, 36], [5, 37], [6, 38], [7, 39], [8, 40], [9, 42], [10, 44], [11, 46], [12, 48], [13, 49], [14, 51], [15, 52], [16, 54], [17, 56], [18, 58], [19, 60], [20, 62], [21, 64], [22, 66], [23, 68], [24, 70], [25, 72], [26, 73], [27, 74], [28, 75], [29, 76], [30, 77]],
        questionCount: 30,
    },

    {
        id: 6,
        name: 'Clerical Matching',
        description: 'Identify whether text is the same or different',
        iconFile: clericalMatchingIcon,
        color: '#025335',
        exitColor: '#059560',
        instructions: 'If both names are <u>exactly</u> the same, click on the area with the word &quot;SAME&quot;.   If the two names are different, in any way, click on the area with the word &quot;DIFFERENT&quot;.',
        aptitude: 'Clerical',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 62], [1, 64], [2, 66], [3, 68], [4, 71], [5, 75], [6, 79], [7, 84], [8, 89], [9, 94], [10, 99], [11, 105], [12, 109], [13, 113], [14, 116], [15, 119], [16, 123], [17, 128], [18, 134], [19, 140], [20, 145], [21, 150], [22, 156], [23, 160], [24, 164], [25, 167], [26, 170], [27, 173], [28, 175], [29, 177], [30, 179]],
        questionCount: 30,
    },

    {
        id: 8,
        name: 'Pattern Visualization',
        description: 'Identify three dimensional shapes based on their folding pattern',
        iconFile: patternMatchingIcon,
        color: '#208752',
        exitColor: '#78D0A3',
        instructions: 'Choose the shape that would be created if the pattern was folded on the dotted lines.',
        aptitude: 'Spatial',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 52], [1, 55], [2, 58], [3, 61], [4, 64], [5, 67], [6, 70], [7, 75], [8, 80], [9, 85], [10, 89], [11, 93], [12, 97], [13, 100], [14, 104], [15, 107], [16, 110], [17, 114], [18, 118], [19, 121], [20, 124], [21, 127], [22, 130], [23, 133], [24, 137], [25, 140], [26, 144], [27, 148], [28, 152], [29, 156], [30, 160]],
        // tslint:disable-next-line: max-line-length
        generalScoringMatrix: [[0, 3], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 13], [11, 14], [12, 15], [13, 16], [14, 17], [15, 17], [16, 18], [17, 19], [18, 20], [19, 21], [20, 22], [21, 23], [22, 24], [23, 25], [24, 26], [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32]],
        questionCount: 30,
    },

    {
        id: 10,
        name: 'Computation',
        description: 'Add, subtract, multiply, or divide numbers',
        iconFile: computationIcon,
        color: '#BF3945',
        exitColor: '#FD7F8A',
        instructions: 'Solve the math problem and choose the correct answer.  If the correct answer does not appear, choose "NONE OF THESE".  You may use paper and pencil, but not a calculator.',
        aptitude: 'Numerical',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 48], [1, 50], [2, 52], [3, 54], [4, 56], [5, 58], [6, 60], [7, 62], [8, 64], [9, 67], [10, 70], [11, 73], [12, 76], [13, 78], [14, 80], [15, 82], [16, 84], [17, 86], [18, 88], [19, 90], [20, 93], [21, 96], [22, 99], [23, 101], [24, 103], [25, 105], [26, 107], [27, 109], [28, 111], [29, 113], [30, 115]],
        questionCount: 30,
    },

    {
        id: 12,
        name: 'Numerical Reasoning',
        description: 'Solve mathematical word problems',
        iconFile: numericalReasoningIcon,
        color: '#2F78C0',
        exitColor: '#A0CCF8',
        instructions: 'Read the problem and choose the correct answer.  If the correct answer does not appear, choose "NONE OF THESE".  You may use paper and pencil, but not a calculator.',
        aptitude: 'Numerical',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 18], [16, 20], [17, 22], [18, 24], [19, 26], [20, 28], [21, 30], [22, 32], [23, 34], [0, 1], [1, 2], [2, 3], [3, 4], [4, 6], [5, 8], [6, 10], [7, 12], [8, 14], [9, 16], [10, 18], [11, 20], [12, 22], [13, 24], [14, 26], [15, 28], [16, 30], [17, 32], [18, 34], [19, 36], [20, 39], [21, 42], [22, 44], [23, 46]],
        // tslint:disable-next-line: max-line-length
        generalScoringMatrix: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 6], [5, 8], [6, 10], [7, 12], [8, 14], [9, 16], [10, 18], [11, 20], [12, 22], [13, 24], [14, 26], [15, 28], [16, 30], [17, 32], [18, 34], [19, 36], [20, 39], [21, 42], [22, 44], [23, 46]],
        questionCount: 23,
    },

    {
        id: 14,
        name: 'Word Meanings',
        description: 'Identify words with the same or opposite meanings as the target',
        iconFile: wordMeaningsIcon,
        color: '#CA4092',
        exitColor: '#ECA5CF',
        instructions: 'Choose the word which is most nearly the SAME or most nearly the OPPOSITE in meaning to the target word.',
        aptitude: 'Verbal',
        // tslint:disable-next-line: max-line-length
        scoringMatrix: [[0, 60], [1, 61], [2, 62], [3, 63], [4, 64], [5, 66], [6, 69], [7, 72], [8, 75], [9, 78], [10, 81], [11, 84], [12, 86], [13, 88], [14, 90], [15, 92], [16, 94], [17, 96], [18, 98], [19, 100], [20, 102], [21, 104], [22, 107], [23, 110], [24, 112], [25, 115], [26, 118], [27, 121], [28, 124], [29, 129], [30, 133]],
        // tslint:disable-next-line: max-line-length
        generalScoringMatrix: [[0, 43], [1, 43], [2, 44], [3, 44], [4, 45], [5, 46], [6, 47], [7, 48], [8, 49], [9, 50], [10, 51], [11, 52], [12, 52], [13, 53], [14, 54], [15, 55], [16, 56], [17, 57], [18, 58], [19, 59], [20, 60], [21, 61], [22, 62], [23, 63], [24, 64], [25, 65], [26, 66], [27, 67], [28, 68], [29, 68], [30, 69]],
        questionCount: 30,
    }
];


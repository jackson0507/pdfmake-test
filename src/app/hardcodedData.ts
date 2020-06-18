export const InterestsData = [
    [{ text: '', colSpan: 5 }, '', '', '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center' }, '', '', 'Percent', ''],
    [{ text: 'Interest Area', colSpan: 2, style: 'tableHeader' }, '', { text: 'Like', style: 'tableHeader' }, { text: '?', style: 'tableHeader' }, { text: 'Dislike', style: 'tableHeader' }, { text: 'Total', style: 'tableHeader' }, { text: 'Male', style: 'tableHeader' }, { text: 'Female', style: 'tableHeader' }, { text: 'Like', style: 'tableHeader' }, { text: 'IPA', style: 'tableHeader' }],
    ['01', { text: 'Artistic', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['02', { text: 'Scientific', alignment: 'left' }, 0, 0, 13, 14, 12, 16, 0, ''],
    ['03', { text: 'Plants/Animals', alignment: 'left' }, 0, 0, 11, 14, 12, 16, 0, ''],
    ['04', { text: 'Protective', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['05', { text: 'Mechanical', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['06', { text: 'Industrial', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['07', { text: 'Business Detail', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['08', { text: 'Selling', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['09', { text: 'Accomodating', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['10', { text: 'Humanitarian', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['11', { text: 'Influencing', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2],
    ['12', { text: 'Physical Performing', alignment: 'left' }, 10, 0, 4, 84, 86, 83, 71, 2]
];

export const InterestsGraphData = [
    [{ text: 'Interest Area', colSpan: 2 }, '', '% Like', ''],
    ['01', { text: 'Artistic', alignment: 'left' }, 71, buildInterestGraph(71)],
    ['02', { text: 'Scientific', alignment: 'left' }, 0, buildInterestGraph(0)],
    ['03', { text: 'Plants/Animals', alignment: 'left' }, 0, buildInterestGraph(0)],
    ['04', { text: 'Protective', alignment: 'left' }, 52, buildInterestGraph(52)],
    ['05', { text: 'Mechanical', alignment: 'left' }, 24, buildInterestGraph(24)],
    ['06', { text: 'Industrial', alignment: 'left' }, 71, buildInterestGraph(71)],
    ['07', { text: 'Business Detail', alignment: 'left' }, 10, buildInterestGraph(10)],
    ['08', { text: 'Selling', alignment: 'left' }, 91, buildInterestGraph(91)],
    ['09', { text: 'Accomodating', alignment: 'left' }, 24, buildInterestGraph(24)],
    ['10', { text: 'Humanitarian', alignment: 'left' }, 4, buildInterestGraph(4)],
    ['11', { text: 'Influencing', alignment: 'left' }, 51, buildInterestGraph(51)],
    ['12', { text: 'Physical Performing', alignment: 'left' }, 71, buildInterestGraph(71)]
];

export const InterestsHalfGraphData = [
    [{ text: 'Interest Area', colSpan: 2 }, '', '% Like', ''],
    ['01', { text: 'Artistic', alignment: 'left' }, 71, buildHalfInterestGraph(71)],
    ['02', { text: 'Scientific', alignment: 'left' }, 0, buildHalfInterestGraph(0)],
    ['03', { text: 'Plants/Animals', alignment: 'left' }, 0, buildHalfInterestGraph(0)],
    ['04', { text: 'Protective', alignment: 'left' }, 52, buildHalfInterestGraph(52)],
    ['05', { text: 'Mechanical', alignment: 'left' }, 24, buildHalfInterestGraph(24)],
    ['06', { text: 'Industrial', alignment: 'left' }, 71, buildHalfInterestGraph(71)],
    ['07', { text: 'Business Detail', alignment: 'left' }, 10, buildHalfInterestGraph(10)],
    ['08', { text: 'Selling', alignment: 'left' }, 91, buildHalfInterestGraph(91)],
    ['09', { text: 'Accomodating', alignment: 'left' }, 24, buildHalfInterestGraph(24)],
    ['10', { text: 'Humanitarian', alignment: 'left' }, 4, buildHalfInterestGraph(4)],
    ['11', { text: 'Influencing', alignment: 'left' }, 51, buildHalfInterestGraph(51)],
    ['12', { text: 'Physical Performing', alignment: 'left' }, 71, buildHalfInterestGraph(71)]
];

export const PerformanceData = [
    [{ text: 'Task', style: 'tableHeader', alignment: 'left' }, { text: 'Correct', style: 'tableHeader' }, { text: 'Attempted', style: 'tableHeader' }],
    [{ text: 'Object Identification', alignment: 'left' }, 22, 22],
    [{ text: 'Abstract Shape Matching', alignment: 'left' }, 18, 27],
    [{ text: 'Clerical Matching', alignment: 'left' }, 18, 18],
    [{ text: 'Pattern Visualization', alignment: 'left' }, 12, 17],
    [{ text: 'Computation', alignment: 'left' }, 15, 19],
    [{ text: 'Numerical Reasoning', alignment: 'left' }, 19, 22],
    [{ text: 'Word Meanings', alignment: 'left' }, 28, 30]
];

export const AptitudeData = [
    [{ text: 'Aptitude', style: 'tableHeader', alignment: 'left' }, { text: 'Score', style: 'tableHeader', alignment: 'left' }, { text: '%tile', style: 'tableHeader', alignment: 'left' }, { text: 'Average Range', style: 'tableHeader' }],
    [{ text: 'General Learning', alignment: 'left' }, 119, 83, buildGraphAptitude(119)],
    [{ text: 'Verbal Aptitude', alignment: 'left' }, 124, 88, buildGraphAptitude(124)],
    [{ text: 'Numerical Aptitude', alignment: 'left' }, 108, 66, buildGraphAptitude(108)],
    [{ text: 'Spatial Aptitude', alignment: 'left' }, 102, 66, buildGraphAptitude(102)],
    [{ text: 'Form Perception', alignment: 'left' }, 94, 66, buildGraphAptitude(94)],
    [{ text: 'Clerical Perception', alignment: 'left' }, 84, 66, buildGraphAptitude(84)],
    [{ text: 'Motor Coordiantion', alignment: 'left' }, 80, 66, buildGraphAptitude(80)],
    [{ text: 'Finger Dexterity', alignment: 'left' }, 120, 66, buildGraphAptitude(120)],
    [{ text: 'Manual Dexterity', alignment: 'left' }, 66, 66, buildGraphAptitude(66)],
];

export const AptitudeHalfData = [
    [{ text: 'Aptitude', style: 'tableHeader', alignment: 'left' }, { text: 'Score', style: 'tableHeader', alignment: 'left' }, { text: '%tile', style: 'tableHeader', alignment: 'left' }, { text: 'Average Range', style: 'tableHeader' }],
    [{ text: 'General Learning', alignment: 'left' }, 119, 83, buildHalfGraphAptitude(119)],
    [{ text: 'Verbal Aptitude', alignment: 'left' }, 124, 88, buildHalfGraphAptitude(124)],
    [{ text: 'Numerical Aptitude', alignment: 'left' }, 108, 66, buildHalfGraphAptitude(108)],
    [{ text: 'Spatial Aptitude', alignment: 'left' }, 102, 66, buildHalfGraphAptitude(102)],
    [{ text: 'Form Perception', alignment: 'left' }, 94, 66, buildHalfGraphAptitude(94)],
    [{ text: 'Clerical Perception', alignment: 'left' }, 84, 66, buildHalfGraphAptitude(84)],
    [{ text: 'Motor Coordiantion', alignment: 'left' }, 80, 66, buildHalfGraphAptitude(80)],
    [{ text: 'Finger Dexterity', alignment: 'left' }, 120, 66, buildHalfGraphAptitude(120)],
    [{ text: 'Manual Dexterity', alignment: 'left' }, 66, 66, buildHalfGraphAptitude(66)],
];

export const RecData1 = [
    [{ text: '', colSpan: 2 }, '', { text: 'GED Req', colSpan: 2 }, '', ''],
    [{ text: 'Job Title', style: 'tableHeader', alignment: 'left' }, { text: 'DOT #', style: 'tableHeader' }, { text: 'M', style: 'tableHeader' }, { text: 'L', style: 'tableHeader' }, { text: 'SVP Req', style: 'tableHeader' }],
    [{ text: 'Programmer, Eng. & Scient.', alignment: 'left' }, '030.162-018', 6, 6, 8],
    [{ text: 'Consultant', alignment: 'left' }, '189.117-050', 5, 5, 8],
    [{ text: 'Software Engineer', alignment: 'left' }, '189.117-050', 5, 5, 8],
    [{ text: 'Information Scientist', alignment: 'left' }, '189.117-050', 5, 5, 8],
];

export const RecData2 = [
    [{ text: '', colSpan: 2 }, '', { text: 'GED Req', colSpan: 2 }, '', ''],
    [{ text: 'Job Title', style: 'tableHeader', alignment: 'left' }, { text: 'DOT #', style: 'tableHeader' }, { text: 'M', style: 'tableHeader' }, { text: 'L', style: 'tableHeader' }, { text: 'SVP Req', style: 'tableHeader' }],
    [{ text: 'Programmer, Eng. & Scient.', alignment: 'left' }, '030.162-018', 6, 6, 8],
    [{ text: 'Consultant', alignment: 'left' }, '189.117-050', 5, 5, 8],
    [{ text: 'Software Engineer', alignment: 'left' }, '189.117-050', 5, 5, 8],
    [{ text: 'Information Scientist', alignment: 'left' }, '189.117-050', 5, 5, 8],
];

export const WorkGroup = [
    [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
    [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, filledInCircle()],
    [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, openCircle()],
    [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, openCircle()],
    [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, filledInCircle()],
];

export const WorkGroup2 = [
    [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
    [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, filledInCircle()],
    [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, openCircle()],
    [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, openCircle()],
    [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, filledInCircle()],
];

export const WorkGroup3 = [
    [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
    [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, filledInCircle()],
    [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, openCircle()],
    [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, openCircle()],
    [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, filledInCircle()],
];

export const InterestAreasKey = [
    [{ text: 'Interest Area', style: 'tableHeader' }, { text: 'Definition', style: 'tableHeader' }, { text: 'Occupational Examples', style: 'tableHeader' }],
    [{ text: '01 Artistic', alignment: 'left' }, { text: 'An interest in creative expression of feeling or ideas through literary arts, visual arts, performing arts, or crafts.', alignment: 'left' }, { text: 'Writer, Painter, Actor, Editor, Dancer, Singer, Graphic Designer, Set Designer', alignment: 'left' }],
    [{ text: '02 Scientific', alignment: 'left' }, { text: 'An interest in discovering, collecting, and analyzing information about the natural world and applying scientific research findings to problems in medicine, the life sciences, and the natural sciences.', alignment: 'left' }, { text: 'Physician, Audiologist, Veterinarian, Biologist, Chemist, Speech Pathologist, Laboratory Technician', alignment: 'left' }],
];

export const AptitudesKey = [
    [{ text: 'Aptitude', style: 'tableHeader' }, { text: 'Definition', style: 'tableHeader' }, { text: 'Specific Job Tasks', style: 'tableHeader' }, { text: 'CareerScope Tasks', style: 'tableHeader' }],
    [{ text: 'General Learning\nG' }, {
        stack: [
            {
                text: 'The ability to "catch on" or understand instructions and underlying principles; ability to reason and make judgements. Closely related to doing well in school.',
                alignment: 'left'
            }, {
                text: 'Examples',
                decoration: 'underline'
            }, {
                text: 'Use logic or scientific facts to define problems and draw conclusions; make decisions and judgements; plan and supervise the work of others.',
                alignment: 'left'
            }
        ]
    }, { text: 'Diagnose and treat illnesses or injuries; use facts to solve a crime; plan the layout of a computer network; inspect and test engine parts.', alignment: 'left' }, { text: 'Pattern Visualization, Numerical Reasoning, Word Meanings', alignment: 'left' }],
];

// used to build graph for individual profule analysis
function buildInterestGraph(width: any): any {
    var content = {
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 7,
                x2: (width * 2), y2: 7,
                lineWidth: 10,
                lineColor: 'gray',
            },
            {
                type: 'line',
                x1: 104, y1: -5,
                x2: 104, y2: 14,
                lineWidth: 1,
                lineColor: 'black'
            }
        ], alignment: 'left'
    };

    return content;
}


// builds aptitude graph
function buildGraphAptitude(width: any): any {
    var content = {
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 7,
                x2: aptWidthToLine(width), y2: 7,
                lineWidth: 10,
                lineColor: 'gray',
            },
            {
                type: 'line',
                x1: 50, y1: -12,
                x2: 50, y2: 14,
                lineWidth: 0.5,
                lineColor: 'black'
            },
            {
                type: 'line',
                x1: 150, y1: -12,
                x2: 150, y2: 14,
                lineWidth: 0.5,
                lineColor: 'black'
            }
        ], alignment: 'left'
    }

    return content;
}

// conversion function to help with the spread of the graphs for aptitude table
function aptWidthToLine(width: any): any {
    if (width >= 120) {
        return width * 1.25;
    } else if (width <= 80) {
        return width / 1.6;
    } else if (width > 100) {
        return width * 1.1;
    } else if (width < 100) {
        return width / 1.2;
    } else {
        return width;
    }
}

// SAME FUNCTIONS BUT ADJUSTED FOR SPLIT SCREEN TABLES

// used to build graph for individual profule analysis when table is in split screen
function buildHalfInterestGraph(width: any): any {
    var content = {
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 7,
                x2: (width), y2: 7,
                lineWidth: 10,
                lineColor: 'gray',
            },
            {
                type: 'line',
                x1: 52, y1: -5,
                x2: 52, y2: 14,
                lineWidth: 1,
                lineColor: 'black'
            }
        ], alignment: 'left'
    };

    return content;
}

function buildHalfGraphAptitude(width: any): any {
    var content = {
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 7,
                x2: aptHalfWidthToLine(width), y2: 7,
                lineWidth: 10,
                lineColor: 'gray',
            },
            {
                type: 'line',
                x1: 30, y1: -12,
                x2: 30, y2: 14,
                lineWidth: 0.5,
                lineColor: 'black'
            },
            {
                type: 'line',
                x1: 90, y1: -12,
                x2: 90, y2: 14,
                lineWidth: 0.5,
                lineColor: 'black'
            }
        ], alignment: 'left'
    }

    return content;
}

function aptHalfWidthToLine(width: any): any {
    if (width >= 120) {
        return width / 1.333;
    } else if (width <= 80) {
        return width / 2.666;
    } else if (width > 100) {
        return width / 1.5;
    } else if (width < 100) {
        return width / 1.8;
    } else {
        return width;
    }
}

function filledInCircle() {
    var content = {
        canvas: [
            {
                type: 'ellipse',
                color: 'black',
                lineColor: 'black',
                x: 2.5, y: 4,
                r1: 2.5, r2: 2.5
            }
        ]
    };

    return content;
}

function openCircle() {
    var content = {
        canvas: [
            {
                type: 'ellipse',
                color: 'white',
                lineColor: 'black',
                x: 2.5, y: 4,
                r1: 2.5, r2: 2.5
            }
        ]
    };

    return content;
}
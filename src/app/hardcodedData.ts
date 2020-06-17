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
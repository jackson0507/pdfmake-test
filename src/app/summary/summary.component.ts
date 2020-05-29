import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  generateSummary() {
    const interestsGraph = [
      [{ text: 'Interest Area', colSpan: 2 }, '', '% Like', ''],
      ['01', { text: 'Artistic', alignment: 'left' }, 71, this.buildGraph(71)],
      ['02', { text: 'Scientific', alignment: 'left' }, 0, this.buildGraph(0)],
      ['03', { text: 'Plants/Animals', alignment: 'left' }, 0, this.buildGraph(0)],
      ['04', { text: 'Protective', alignment: 'left' }, 52, this.buildGraph(52)],
      ['05', { text: 'Mechanical', alignment: 'left' }, 24, this.buildGraph(24)],
      ['06', { text: 'Industrial', alignment: 'left' }, 71, this.buildGraph(71)],
      ['07', { text: 'Business Detail', alignment: 'left' }, 10, this.buildGraph(10)],
      ['08', { text: 'Selling', alignment: 'left' }, 91, this.buildGraph(91)],
      ['09', { text: 'Accomodating', alignment: 'left' }, 24, this.buildGraph(24)],
      ['10', { text: 'Humanitarian', alignment: 'left' }, 4, this.buildGraph(4)],
      ['11', { text: 'Influencing', alignment: 'left' }, 51, this.buildGraph(51)],
      ['12', { text: 'Physical Performing', alignment: 'left' }, 71, this.buildGraph(71)]
    ];

    const aptitudeResults = [
      [{ text: 'Aptitude', style: 'tableHeader', alignment: 'left' }, { text: 'Score', style: 'tableHeader', alignment: 'left' }, { text: '%tile', style: 'tableHeader', alignment: 'left' }, { text: 'Average Range', style: 'tableHeader' }],
      [{ text: 'General Learning', alignment: 'left' }, 119, 83, this.buildGraphAptitude(119)],
      [{ text: 'Verbal Aptitude', alignment: 'left' }, 124, 88, this.buildGraphAptitude(124)],
      [{ text: 'Numerical Aptitude', alignment: 'left' }, 108, 66, this.buildGraphAptitude(108)],
      [{ text: 'Spatial Aptitude', alignment: 'left' }, 102, 66, this.buildGraphAptitude(102)],
      [{ text: 'Form Perception', alignment: 'left' }, 94, 66, this.buildGraphAptitude(94)],
      [{ text: 'Clerical Perception', alignment: 'left' }, 84, 66, this.buildGraphAptitude(84)],
      [{ text: 'Motor Coordiantion', alignment: 'left' }, 80, 66, this.buildGraphAptitude(80)],
      [{ text: 'Finger Dexterity', alignment: 'left' }, 120, 66, this.buildGraphAptitude(120)],
      [{ text: 'Manual Dexterity', alignment: 'left' }, 66, 66, this.buildGraphAptitude(66)],
    ];

    const workGroup = [
      [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
      [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, this.filledInCircle()],
      [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, this.filledInCircle()],
    ];

    const workGroup1 = [
      [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
      [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, this.filledInCircle()],
      [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, this.filledInCircle()],
    ];

    const workGroup2 = [
      [{ text: 'Work Group', colSpan: 2 }, '', 'I', 'A'],
      [{ text: '01.01', alignment: 'left' }, { text: 'Literary Arts', alignment: 'left' }, 3, this.filledInCircle()],
      [{ text: '01.02', alignment: 'left' }, { text: 'Visual Arts', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '03.04', alignment: 'left' }, { text: 'Elem Work: Plants/Animals', alignment: 'left' }, 3, this.openCircle()],
      [{ text: '10.02', alignment: 'left' }, { text: 'Nursing, Therapy & Specialized', alignment: 'left' }, 3, this.filledInCircle()],
    ];

    const interestAreas = [
      [{ text: 'Interest Area', style: 'tableHeader' }, { text: 'Definition', style: 'tableHeader' }, { text: 'Occupational Examples', style: 'tableHeader' }],
      [{ text: '01 Artistic', alignment: 'left' }, { text: 'An interest in creative expression of feeling or ideas through literary arts, visual arts, performing arts, or crafts.', alignment: 'left' }, { text: 'Writer, Painter, Actor, Editor, Dancer, Singer, Graphic Designer, Set Designer', alignment: 'left' }],
      [{ text: '02 Scientific', alignment: 'left' }, { text: 'An interest in discovering, collecting, and analyzing information about the natural world and applying scientific research findings to problems in medicine, the life sciences, and the natural sciences.', alignment: 'left' }, { text: 'Physician, Audiologist, Veterinarian, Biologist, Chemist, Speech Pathologist, Laboratory Technician', alignment: 'left' }],
    ]

    const aptitudes = [
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
    ]


    //const docDef = this.buildCounselorReport(interests);
    const docDef = this.buildSummaryReport(interestsGraph, aptitudeResults, workGroup, workGroup1, workGroup2, interestAreas, aptitudes);

    // The open command may need to be run from a component
    pdfMake.createPdf(docDef).open();
  }

  buildGraph(width: any): any {
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

  buildGraphAptitude(width: any): any {
    var content = {
      canvas: [
        {
          type: 'line',
          x1: 0, y1: 7,
          x2: this.aptWidthToLine(width), y2: 7,
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

  aptWidthToLine(width: any): any {
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

  filledInCircle() {
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

  openCircle() {
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

  buildSummaryReport(interestsGraph: any[], aptitudeResults: any[], workGroup: any[], workGroup1: any[], workGroup2: any[], interestAreas: any[], aptitudes: any[]): any {
    const documentDefinition = {
      pageMargins: [40, 80, 40, 80],
      header: function (currentPage, pageCount) {
        return [
          {
            columns: [
              {
                text: "Jackson.McIntyre",
                width: 148.75,
                fontSize: 12
              },
              {
                stack: [
                  {
                    text: "CareerScope® Summary Report",
                    fontSize: 16
                  }, {
                    text: "Jackson McIntyre",
                    fontSize: 12
                  }
                ],
                width: 298
              },
              {
                stack: [
                  {
                    text: currentPage.toString() + ' of ' + pageCount,
                    fontSize: 12
                  },
                  {
                    text: "05/13/2020",
                    fontSize: 12
                  }
                ],
                width: 148.75
              }
            ],
            margin: [0, 30],
            alignment: 'center'
          }
        ]
      },

      footer: { text: 'Standard:N  Audio:N  Untimed:N  Language:E  Intro:Y', alignment: 'right', margin: [15, 50] },

      content: [
        this.buildCover(),
        this.buildInterestAndAptitudeResults(interestsGraph, aptitudeResults),
        this.buildRecommendations(workGroup, workGroup1, workGroup2),
        this.buildSummaryInterestAreas(interestAreas),
        this.buildAptitudes(aptitudes),
      ],
      styles: {
        coverTitle: {
          fontSize: 20,
          alignment: 'center'
        },
        coverText: {
          fontSize: 15,
          alignment: 'center'
        },
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
          decoration: 'underline'
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
          decoration: 'underline'
        },
        summaryHeader: {
          fontSize: 14,
          decoration: 'underline',
          alignment: 'center',
          margin: [0, 0, 0, 5]
        },
        subtext: {
          fontSize: 8
        },
        tableExample: {
          margin: [0, 5, 0, 15],
          alignment: 'center'
        },
        tableHeader: {
          bold: true,
          color: 'black'
        }
      },
      defaultStyle: {
        fontSize: 8
      }
    };
    return documentDefinition;
  }

  buildCover(): any {
    var content = [];
    content.push({ text: 'CareerScope®', margin: [0, 175, 0, 0], style: 'coverTitle' });
    content.push({ text: 'Summary Report', margin: [0, 75], style: 'coverTitle' });
    content.push({ text: 'Date of Report: 5/13/20', margin: [0, 0, 0, 30], style: 'coverText' });
    content.push({ text: 'Jackson McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Jackson.McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Interest Administration: 5/13/20', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Aptitude Administration: 5/13/20', margin: [0, 0, 0, 20], style: 'coverText' });
    content.push({ text: 'Copyright © 2020 Vocational Research Institute', alignment: 'center', fontSize: 10, pageBreak: 'after' });

    return content;
  }

  buildInterestAndAptitudeResults(interestsGraph: any[], aptitudeResults: any[]): any {
    var content = [];

    content.push({
      columns: [
        [
          { text: 'INTEREST RESULTS', style: 'summaryHeader' },
          'The table below reports and displays the percentage of “LIKE” responses that you recorded for each of the twelve Interest Areas. The dark vertical line in the chart is your average percentage of “LIKE” responses (31%) across all twelve Interest Areas.',
          {
            style: 'tableExample',
            table: {
              widths: ['auto', 'auto', 'auto', 105],
              body:
                interestsGraph
            },
          },
          'The CareerScope system has analyzed your profile. The following Interest Areas stand out significantly above your average level of interest:',
          { text: '\n1. Physical Performing (12)' },
          { text: '2. Protective (4)' },
          { text: '3. Leading/Influencing (11)' },
          { text: '3. Artistic (1)' }
        ],
        [
          { text: 'APTITUDE RESULTS', style: 'summaryHeader' },
          'The graph below reports and displays your aptitudes as standard scores and as percentile scores. An aptitude score of 100 is exactly average. Scores between 80 and 120 can be thought of as “in the average range.” Percentile (%tile) scores report the percentage of people who score below you. The graph displays your relative strengths.',
          {
            style: 'tableExample',
            table: {
              widths: ['auto', 'auto', 'auto', 120],
              body:
                aptitudeResults
            },
          },
          { text: '--- Score can not be calculated', style: 'subtext' },
          { text: '•Your aptitude profile may include Motor Coordination, Finger Dexterity and Manual Dexterity scores. The sources of these scores are listed below. If “Counselor” is listed as the source of information, an assumption has been made regarding the score. If “None” is listed as the source, the performance factor will not be considered when making Work Group recommendations. Motor Coordination: Counselor; Finger Dexterity: Counselor; Manual Dexterity: Counselor', style: 'subtext' }

        ]
      ],
      columnGap: 20
    });

    return content;
  }

  buildRecommendations(workGroup: any[], workGroup1: any[], workGroup2: any[]): any {
    var content = [];
    content.push({ text: 'RECOMMENDATIONS', style: 'summaryHeader', margin: [0, 10] });
    content.push('The world of work has been divided into Interest Areas. These areas are further divided into Work Groups based upon aptitude requirements. 59 Work Groups are listed in the table below. When a number appears in the “I” column, it means the Work Group falls within one of your significant interest areas (1 = most preferred). When a symbol appears in the “A” column, it means that your aptitude scores qualify you for that Work Group. (You can be even more confident that you qualify for a Work Group when it is marked with a • symbol.)');
    content.push({
      columns: [
        [
          {
            style: 'tableExample',
            table: {
              widths: ['auto', 100, 'auto', 'auto'],
              body:
                workGroup
            },
          },
        ],
        [
          {
            style: 'tableExample',
            table: {
              widths: ['auto', 100, 'auto', 'auto'],
              body:
                workGroup1
            },
          },
        ],
        {
          style: 'tableExample',
          table: {
            widths: ['auto', 100, 'auto', 'auto'],
            body:
              workGroup2
          },
        },
      ],
      //columnGap: 10
    });
    return content;
  }

  buildSummaryInterestAreas(interestAreas: any[]): any {
    var content = [];
    content.push({ text: "INTEREST AREAS", style: 'summaryHeader', pageBreak: 'before' });
    content.push({ text: 'Occupations have been divided into twelve broad interest areas. The CareerScope Interest Inventory contains items that describe work activities from these Interest Areas. The table below explains the Interest Areas and lists some of the fastest-growing occupations within each area.' });
    content.push({
      style: 'tableExample',
      table: {
        widths: [75, 250, 160],
        body:
          interestAreas
      }
    });

    return content;
  }

  buildAptitudes(aptitudes: any[]): any {
    var content = [];
    content.push({ text: 'APTITUDES', style: 'summaryHeader', pageBreak: 'before' });
    content.push({ text: 'Different combinations of aptitudes are important for different occupations. The table below lists the aptitudes that are measured by CareerScope, and provides general examples and specific job tasks that require these aptitudes.', alignment: 'left' });
    content.push({
      style: 'tableExample',
      table: {
        widths: [40, 270, 75, 75],
        body:
          aptitudes
      }
    })

    return content;
  }


}
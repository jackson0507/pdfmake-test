import { Component, OnInit } from '@angular/core';
import { InterestsHalfGraphData, AptitudeHalfData, WorkGroup, WorkGroup2, WorkGroup3, InterestAreasKey, AptitudesKey } from '../hardcodedData'

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

    //const docDef = this.buildCounselorReport(interests);
    const docDef = this.buildSummaryReport(InterestsHalfGraphData, AptitudeHalfData, WorkGroup, WorkGroup2, WorkGroup3, InterestAreasKey, AptitudesKey);

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
import { Component } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdfmake-test';

  generatePdf() {

    const interests = [
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

    const resultNums = [
      [{ text: 'Task', style: 'tableHeader', alignment: 'left' }, { text: 'Correct', style: 'tableHeader' }, { text: 'Attempted', style: 'tableHeader' }],
      [{ text: 'Object Identification', alignment: 'left' }, 22, 22],
      [{ text: 'Abstract Shape Matching', alignment: 'left' }, 18, 27],
      [{ text: 'Clerical Matching', alignment: 'left' }, 18, 18],
      [{ text: 'Pattern Visualization', alignment: 'left' }, 12, 17],
      [{ text: 'Computation', alignment: 'left' }, 15, 19],
      [{ text: 'Numerical Reasoning', alignment: 'left' }, 19, 22],
      [{ text: 'Word Meanings', alignment: 'left' }, 28, 30]
    ]

    const aptitudeResults = [
      [{ text: 'Aptitude', style: 'tableHeader', alignment: 'left' }, { text: 'Score', style: 'tableHeader', alignment: 'left' }, { text: '%tile', style: 'tableHeader', alignment: 'left' }],
      [{ text: 'General Learning', alignment: 'left' }, 119, 83],
      [{ text: 'Verbal Aptitude', alignment: 'left' }, 124, 88],
      [{ text: 'Numerical Aptitude', alignment: 'left' }, 108, 66],
      [{ text: 'Spatial Aptitude', alignment: 'left' }, 108, 66],
      [{ text: 'Form Perception', alignment: 'left' }, 108, 66],
      [{ text: 'Clerical Perception', alignment: 'left' }, 108, 66],
      [{ text: 'Motor Coordiantion', alignment: 'left' }, 108, 66],
      [{ text: 'Finger Dexterity', alignment: 'left' }, 108, 66],
      [{ text: 'Manual Dexterity', alignment: 'left' }, 108, 66],
    ]

    //const docDef = this.buildCounselorReport(interests);
    const docDef = this.buildAssesmentProfile(interests, interestsGraph, resultNums, aptitudeResults);

    // The open command may need to be run from a component
    pdfMake.createPdf(docDef).open();

  }

  buildGraph(width: any): any {
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
          x1: 104, y1: -4,
          x2: 104, y2: 14,
          lineWidth: 1,
          lineColor: 'black'
        }
      ], alignment: 'left'
    };

    return content;
  }

  buildAssesmentProfile(interests: any[], interestsGraph: any[], resultNums: any[], aptitudeResults: any[]): any {
    const documentDefinition = {
      pageMargins: [40, 80, 40, 80],
      header: function (currentPage, pageCount) {
        return [
          {
            columns: [
              {
                text: "Jackson.McIntyre",
                width: 148.75
              },
              {
                stack: [
                  {
                    text: "CareerScope® Assessment Profile",
                    fontSize: 16
                  },
                  "Jackson McIntyre"
                ],
                width: 298
              },
              {
                stack: [
                  {
                    text: currentPage.toString() + ' of ' + pageCount,
                    fontSize: 12
                  },
                  "05/13/2020"
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
        { text: 'INTEREST INVENTORY', style: 'header', alignment: 'center' },
        { text: 'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy.', margin: [0, 10] },
        this.buildInterestAreas(interests),
        this.buildIndividualProfileAnalysis(interestsGraph),
        { text: 'APTITUDE ASSESMENT', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildPerformanceOnTasks(resultNums),
        this.buildAptitudeProfile(aptitudeResults),
        { text: 'RECOMMENDATIONS', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildRecommendations()
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
        subtext: {
          fontSize: 9
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
        // alignment: 'justify'
      }
    };
    return documentDefinition;
  }

  /*
  buildHeader(currentPage: any, pageCount: any): any {
    var content = [];
    content.push({
      columns: [
        {
          text: "Jackson.McIntyre",
          width: 148.75
        },
        {
          stack: [
            {
              text: "CareerScope® Assessment Profile",
              fontSize: 16
            },
            "Jackson McIntyre"
          ],
          width: 298
        },
        {
          stack: [
            {
              text: currentPage.toString() + ' of ' + pageCount,
              fontSize: 12
            },
            "05/03/2019"
          ],
          width: 148.75
        }
      ],
      margin: [0, 30],
      alignment: 'center'
    });

    return content;
  }
  */

  buildCover(): any {
    var content = [];
    content.push({ text: 'CareerScope®', margin: [0, 175, 0, 0], style: 'coverTitle' });
    content.push({ text: 'Assessment Profile', margin: [0, 75], style: 'coverTitle' });
    content.push({ text: 'Date of Report: 5/13/20', margin: [0, 0, 0, 30], style: 'coverText' });
    content.push({ text: 'Jackson McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Jackson.McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Interest Administration: 5/13/20', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Aptitude Administration: 5/13/20', margin: [0, 0, 0, 20], style: 'coverText' });
    content.push({ text: 'Copyright © 2020 Vocational Research Institute', alignment: 'center', fontSize: 10, pageBreak: 'after' });

    return content;
  }

  buildInterestAreas(interests: any[]): any {
    var content = [];
    content.push({ text: 'I. Interest Area Scores', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'Your total number of “LIKE,” “?” and “DISLIKE” responses for each Interest Area are reported below. Percentile scores show the percentage of other people who gave fewer “LIKE” responses than you did in each Interest Area. A percentile score of 50 shows average interest; 70 or higher shows above average interest as compared to other people. Percentile scores are listed below for males and females as well as for the total group. Your percentile scores are based upon a comparison between your results and the results of people who are 18 years of age or older.', margin: [0, 10] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              interests
          },
          //layout: 'lightHorizontalLines'
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 2 : 1;
            },
            vLineWidth: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 2 : 1;
            },
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
            }
          },
        },
        { width: '*', text: '' }
      ]
    });

    content.push({ text: 'Your most significant Interest Areas are identified in the “IPA” column and are based upon data found in the “Percent Like” column. Please refer to the Individual Profile Analysis on the next page for more detailed information.', pageBreak: 'after' });

    return content;
  }

  buildIndividualProfileAnalysis(interestsGraph: any[]): any {
    var content = [];
    content.push({ text: 'II. Interest Profile Analysis', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'The table below reports and displays the percentage of “LIKE” responses that you recorded within each of the twelve Interest Areas. The dark vertical line in the chart is your average percentage of “LIKE” responses (31%) across all twelve Interest Areas', margin: [0, 10] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              interestsGraph
          },
          //layout: 'lightHorizontalLines'
        },
        { width: '*', text: '' },
      ]
    });
    content.push('The CareerScope system has analyzed your profile. The following Interest Areas stand out significantly above your average level of interest:');
    content.push(
      { text: '\n1. Physical Performing (12)' },
      { text: '2. Protective (4)' },
      { text: '3. Leading/Influencing (11)' },
      { text: '3. Artistic (1)' }
    );

    return content;
  }

  buildPerformanceOnTasks(resultNums: any[]): any {
    var content = [];
    content.push({ text: 'I. Performance on tasks', style: 'subheader' });
    content.push('The table below reports the number of correct answers and the number of questions you attempted in each assessment task.');
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              resultNums
          },
          layout: 'lightHorizontalLines'
        },
        { width: '*', text: '' },
      ]
    });
    return content;
  }

  buildAptitudeProfile(aptitudeResults: any[]): any {
    var content = [];
    content.push({ text: 'II. Aptitude Profile', style: 'subheader' });
    content.push('The table below reports and graphically displays your aptitudes as standard scores and as percentile scores. Both types of scores involve the comparison of your performance against the performance of other adults.');
    content.push('\nAn aptitude score of 100 is exactly average. Scores between 80 and 120 can be thought of as “in the average range.” Percentile (%tile) scores report the percentage of people who score below you. The graph displays your relative strengths. Different combinations of aptitudes (listed on the left) are important in different Work Groups.');
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          style: 'tableExample',
          table: {
            body:
              aptitudeResults
          },
          layout: 'lightHorizontalLines'
        },
        { width: '*', text: '' },
      ]
    });
    content.push({ text: '--- Score can not be calculated', style: 'subtext' });
    content.push({ text: '•Your aptitude profile may include Motor Coordination, Finger Dexterity and Manual Dexterity scores. The sources of these scores are listed below. If “Counselor” is listed as the source of information, an assumption has been made regarding the score. If “None” is listed as the source, the performance factor will not be considered when making Work Group recommendations. Motor Coordination: Counselor; Finger Dexterity: Counselor; Manual Dexterity: Counselor', style: 'subtext' });


    return content;
  }

  buildRecommendations() {
    var content = [];
    content.push('Occupations have been divided into twelve Interest Areas as described in the Guide for Occupational Exploration (GOE) and elsewhere. The Guide for Occupational Exploration further subdivides the Interest Areas into Work Groups, based upon aptitude score requirements. Occupations that belong to the same Work Group require similar interests and similar aptitudes.');
    content.push('\nReported below are career directions that match your aptitudes as well as your 3 strongest interest areas. When you see a • symbol next to a GOE Work Group number and name it means you can be more confident that your aptitude scores qualify you for that Work Group. Review your CareerScope recommendations and score results with a career guidance and counseling professional to learn about the Work Groups that best match your assessment results.');

    return content;
  }












  /* NOT PART OF ASSESSMENT PROFILE */

  buildCounselorReport(interests: any[]): any {
    const documentDefinition = {
      content: [
        { text: `CareerScope Counselor's Report`, style: 'header' },
        'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
        { text: 'Interest Inventory Scores', style: 'subheader' },

        {
          style: 'tableExample',
          table: {
            body:

              interests

          },
          layout: 'lightHorizontalLines'
        },
        { text: 'Scores Based Upon Adult Standards', alignment: 'center' },
        { text: ' \n' },
        {
          columns: [
            {
              width: 180,
              style: 'tableExample',
              table: {
                body: [
                  [{ text: 'Task Performance', style: 'tableHeader', colSpan: 3, alignment: 'center' }, '', ''],
                  [' \nTask', ' \nCorrect', ' \nAttempted'],
                  ['01', 19, 19],
                  ['02', 16, 21],
                  ['03', 26, 26],
                  ['04', 23, 27],
                  ['05', 12, 12],
                  ['06', 21, 22],
                  ['07', 27, 27]
                ]
              },
              layout: 'lightHorizontalLines'
            },
            {
              style: 'tableExample',
              table: {
                body: [
                  [{ text: 'Aptitude Profile', style: 'tableHeader', colSpan: 3, alignment: 'center' }, '', '', ''],
                  ['Aptitude', 'Standard\nScore', 'Percentile', 'Adjusted Score\n(w/SEM)'],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139]
                ]
              },
              layout: 'lightHorizontalLines'
            }
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15],
          alignment: 'center'
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    };
    return documentDefinition;
  }
  buildSummary(interests: any[]) {
    const documentDefinition = {
      content: [
        { text: `CareerScope Summary Report`, style: 'header' },
        'Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.',
        { text: 'Interest Inventory Scores', style: 'subheader' },

        {
          style: 'tableExample',
          table: {
            body:

              interests

          },
          layout: 'lightHorizontalLines'
        },
        { text: 'Scores Based Upon Adult Standards', alignment: 'center' },
        { text: ' \n' },
        {
          columns: [
            {
              width: 180,
              style: 'tableExample',
              table: {
                body: [
                  [{ text: 'Task Performance', style: 'tableHeader', colSpan: 3, alignment: 'center' }, '', ''],
                  [' \nTask', ' \nCorrect', ' \nAttempted'],
                  ['01', 19, 19],
                  ['02', 16, 21],
                  ['03', 26, 26],
                  ['04', 23, 27],
                  ['05', 12, 12],
                  ['06', 21, 22],
                  ['07', 27, 27]
                ]
              },
              layout: 'lightHorizontalLines'
            },
            {
              style: 'tableExample',
              table: {
                body: [
                  [{ text: 'Aptitude Profile', style: 'tableHeader', colSpan: 3, alignment: 'center' }, '', '', ''],
                  ['Aptitude', 'Standard\nScore', 'Percentile', 'Adjusted Score\n(w/SEM)'],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139],
                  ['G', 134, 96, 139]
                ]
              },
              layout: 'lightHorizontalLines'
            }
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15],
          alignment: 'center'
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        }
      },
      defaultStyle: {
        // alignment: 'justify'
      }
    };
  }
}

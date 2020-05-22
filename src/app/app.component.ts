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
      [{ text: 'Interest Area', colSpan: 2 }, '', '% Like'],
      ['01', { text: 'Artistic', alignment: 'left' }, 71],
      ['02', { text: 'Scientific', alignment: 'left' }, 0],
      ['03', { text: 'Plants/Animals', alignment: 'left' }, 0],
      ['04', { text: 'Protective', alignment: 'left' }, 71],
      ['05', { text: 'Mechanical', alignment: 'left' }, 71],
      ['06', { text: 'Industrial', alignment: 'left' }, 71],
      ['07', { text: 'Business Detail', alignment: 'left' }, 71],
      ['08', { text: 'Selling', alignment: 'left' }, 71],
      ['09', { text: 'Accomodating', alignment: 'left' }, 71],
      ['10', { text: 'Humanitarian', alignment: 'left' }, 71],
      ['11', { text: 'Influencing', alignment: 'left' }, 71],
      ['12', { text: 'Physical Performing', alignment: 'left' }, 71]
    ];

    const resultNums = [
      [{ text: 'Task', style: 'tableHeader', alignment: 'left'}, { text: 'Correct', style: 'tableHeader' }, { text: 'Attempted', style: 'tableHeader'}],
      [{ text: 'Object Identification', alignment: 'left' }, 22, 22],
      [{ text: 'Abstract Shape Matching', alignment: 'left' }, 18, 27],
      [{ text: 'Clerical Matching', alignment: 'left' }, 18, 18],
      [{ text: 'Pattern Visualization', alignment: 'left' }, 12, 17],
      [{ text: 'Computation', alignment: 'left' }, 15, 19],
      [{ text: 'Numerical Reasoning', alignment: 'left' }, 19, 22],
      [{ text: 'Word Meanings', alignment: 'left' }, 28, 30]
    ]

    //const docDef = this.buildCounselorReport(interests);
    const docDef = this.buildAssesmentProfile(interests, interestsGraph, resultNums);

    // The open command may need to be run from a component
    pdfMake.createPdf(docDef).open();

  }

  buildAssesmentProfile(interests: any[], interestsGraph: any[], resultNums: any[]): any {
    const documentDefinition = {
      pageMargins: [40, 80, 40, 80],
      header: {
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
                text: "Page 1 of 14",
                fontSize: 12
              },
              "05/03/2019"
            ],
            width: 148.75
          }
        ],
        margin: [0, 30],
        alignment: 'center'
      },

      footer: { text: 'Standard:N  Audio:N  Untimed:N  Language:E  Intro:Y', alignment: 'right', margin: [15,50] },

      content: [
        this.buildCover(),
        { text: 'INTEREST INVENTORY', style: 'header', alignment: 'center' },
        { text: 'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy.', margin: [0, 10] },
        this.buildInterestAreas(interests),
        this.buildIndividualProfileAnalysis(interestsGraph),
        { text: 'APTITUDE ASSESMENT', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildPerformanceOnTasks(resultNums)
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

  buildCover(): any {
    var content = [];
    content.push({ text: 'CareerScope®', margin: [0, 175, 0, 0], style: 'coverTitle' });
    content.push({ text: 'Assessment Profile', margin: [0, 75], style: 'coverTitle' });
    content.push({ text: 'Date of Report: 5/13/20', margin: [0, 0, 0, 30], style: 'coverText' });
    content.push({ text: 'Jackson McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Jackson.McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Interest Administration: 5/13/20', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Aptitude Administration: 5/13/20', margin: [0, 0, 0, 20], style: 'coverText' });
    content.push({ text: 'Copyright © 2020 Vocational Research Institute', alignment: 'center', fontSize: 10, pageBreak: 'after'});

    return content;
  }

  buildInterestAreas(interests: any[]): any {
    var content = [];
    content.push({ text: 'I. Interest Area Scores', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'Your total number of “LIKE,” “?” and “DISLIKE” responses for each Interest Area are reported below. Percentile scores show the percentage of other people who gave fewer “LIKE” responses than you did in each Interest Area. A percentile score of 50 shows average interest; 70 or higher shows above average interest as compared to other people. Percentile scores are listed below for males and females as well as for the total group. Your percentile scores are based upon a comparison between your results and the results of people who are 18 years of age or older.', margin: [0, 10] });
    content.push({
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
    });
    content.push({ text: 'Your most significant Interest Areas are identified in the “IPA” column and are based upon data found in the “Percent Like” column. Please refer to the Individual Profile Analysis on the next page for more detailed information.', pageBreak: 'after' });
    
    return content;
  }

  buildIndividualProfileAnalysis(interestsGraph: any[]): any {
    var content = [];
    content.push({ text: 'II. Interest Profile Analysis', style: 'subheader', margin: [0, 5] });
    content.push({ text: 'The table below reports and displays the percentage of “LIKE” responses that you recorded within each of the twelve Interest Areas. The dark vertical line in the chart is your average percentage of “LIKE” responses (31%) across all twelve Interest Areas', margin: [0, 10] });
    content.push({
      style: 'tableExample',
      table: {
        body:
          interestsGraph
      },
      layout: 'lightHorizontalLines'
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
    content.push({ text: 'I. Performance on tasks', style: 'subheader'});
    content.push('The table below reports the number of correct answers and the number of questions you attempted in each assessment task.');
    content.push({
      style: 'tableExample',
      table: {
        body: resultNums
      },
      layout: 'lightHorizontalLines'
    });
    return content;
  }


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

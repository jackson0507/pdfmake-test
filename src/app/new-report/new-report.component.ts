import { Component } from '@angular/core';
import { careerScopeLogoSVG, careerScopeLogoSVGInverse, jobBoard, jellyBeanBackground, reportTabBackground, reportExercises, artisticPillIcon, scientificPillIcon } from '../svg';
import { interests } from '../populateInterests';
import { workgroups } from '../populateWorkgroups';
import { WorkgroupsService } from '../workgroups.service';


import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


const fonts = {
  Nunito: {
    normal: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap',
    bold: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap',
    italics: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&display=swap',
    bolditalics: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap'
  },

  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf'
  },
}

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

  constructor(
    private ws: WorkgroupsService
  ) { }

  generatePDFReport() {

    const tableOfContents = [
      [{ text: 'Assessment Settings', color: '#0F4C81', margin: [0, 0, 200, 0] }, { text: 'Pg 3', color: '#0F4C81' }],
      [{
        stack: [
          { text: 'Interest Inventory', color: '#0F4C81', margin: [0, 0, 0, 5] },
          { text: '   Interest Scores', color: '#0F4C81', preserveLeadingSpaces: true },
          { text: '   Individual Profile Analysis', color: '#0F4C81', preserveLeadingSpaces: true },
        ]
      },
      {
        stack: [
          { text: 'Pg 4', color: '#0F4C81', margin: [0, 0, 0, 5] },
          { text: 'Pg 5', color: '#0F4C81' },
          { text: 'Pg 6', color: '#0F4C81' },
        ]
      }],
      [{
        stack: [
          { text: 'Aptitude Assessment', color: '#0F4C81', margin: [0, 0, 0, 5] },
          { text: '   Performance on tasks', color: '#0F4C81', preserveLeadingSpaces: true },
          { text: '   Aptitude Profile', color: '#0F4C81', preserveLeadingSpaces: true },
        ]
      },
      {
        stack: [
          { text: 'Pg 4', color: '#0F4C81', margin: [0, 0, 0, 5] },
          { text: 'Pg 5', color: '#0F4C81' },
          { text: 'Pg 6', color: '#0F4C81' },
        ]
      }],
      [{ text: 'Recommendations from the GOE/DOT', color: '#0F4C81' }, { text: 'Pg 10', color: '#0F4C81' }],
      [{ text: 'Recommendations from the DOE', color: '#0F4C81' }, { text: 'Pg 15', color: '#0F4C81' }],
    ];

    const interestGOETable = [
      [
        {
          stack: [
            { svg: artisticPillIcon, width: 100, margin: [-10, 0, 0, -5] },
            { text: 'The GOE identifies this as Interest Area 01.', fontSize: 10, margin: [30, 7, 0, 3] },
            { text: '6 Work Groups', fontSize: 10, margin: [30, 0, 0, 3] },
            { text: '56 Job matches', fontSize: 10, margin: [30, 0, 0, 3] },
            {
              canvas: [
                {
                  type: 'line',
                  x1: 12.5, y1: -23,
                  x2: 25, y2: -23,
                  lineWidth: 1,
                  lineColor: '#E0E0E0',
                },
                {
                  type: 'line',
                  x1: 12.5, y1: -53,
                  x2: 12.5, y2: -23,
                  lineWidth: 1,
                  lineColor: '#E0E0E0',
                },
              ]
            }
          ]
        },
        {
          stack: [
            { svg: scientificPillIcon, width: 100, margin: [-10, 0, 0, -5] },
            { text: 'The GOE identifies this as Interest Area 03.', fontSize: 10, margin: [30, 7, 0, 3] },
            { text: '3 Work Groups', fontSize: 10, margin: [30, 0, 0, 3] },
            { text: '31 Job matches', fontSize: 10, margin: [30, 0, 0, 3] },
            {
              canvas: [
                {
                  type: 'line',
                  x1: 12.5, y1: -23,
                  x2: 25, y2: -23,
                  lineWidth: 1,
                  lineColor: '#E0E0E0',
                },
                {
                  type: 'line',
                  x1: 12.5, y1: -53,
                  x2: 12.5, y2: -23,
                  lineWidth: 1,
                  lineColor: '#E0E0E0',
                },
              ]
            }
          ]
        },
      ]
    ];

    const docDef = this.buildReport(tableOfContents, interestGOETable);
    pdfMake.createPdf(docDef).open();
  }

  buildReport(tableOfContents: any, interestGOETable: any) {
    const docDef = {
      pageMargins: [40, 80, 40, 80],
      header: function (currentPage) {
        if (currentPage > 2) {
          return [
            {
              columns: [
                {
                  stack: [
                    {
                      text: "Assessment Profile Report",
                      fontSize: 9,
                      color: '#0F4C81'
                    }, {
                      text: "Carly Sims   5/18/20",
                      fontSize: 9,
                      margin: [0, 2.5, 0, 0],
                      color: '#0F4C81'
                    }
                  ],
                  alignment: 'center',
                  width: 125,
                },
                {
                  text: 'Pg ' + (currentPage - 1).toString(),
                  fontSize: 12,
                  alignment: 'center',
                  margin: [0, 5, 0, 0],
                  color: '#0F4C81'
                }
              ],
              margin: [400, 20, 0, 0]
            },
            {
              canvas: [
                {
                  type: 'line',
                  x1: 532, y1: -27,
                  x2: 532, y2: 3,
                  lineWidth: 1,
                  lineColor: '#0F4C81',
                }
              ]
            }
          ]
        }
      },
      footer: this.buildFooter(),
      background: function (currentPage) {
        if (currentPage === 1) {
          return {
            canvas: [
              {
                type: 'polyline',
                lineWidth: 1,
                closePath: true,
                color: '#0F4C81',
                points: [{ x: 0, y: 750 }, { x: 550, y: 0 }, { x: 0, y: 0 }]
              }
            ]
          }
        }
      },
      content: [
        this.buildCover(),
        this.buildTableOfContents(tableOfContents),
        this.buildAssessmentSettings(),
        this.buildInterestInventory(),
        this.buildInterestAreaScores(),
        this.buildIndividualProfileAnalysis(),
        this.buildPerformanceOnTasks(),
        this.buildAptitudeProfile(),
        this.buildGOERecommendations(interestGOETable),
        this.buildGOEJobSection(),
        this.buildJobTable(0),
        this.buildJobTable(8),
        this.buildJobTable(10),
        this.buildJobDescriptionTable(0),
        this.buildJobDescriptionTable(8),
        this.buildJobDescriptionTable(10),
      ],
      defaultStyle: {
        //font: 'Nunito'
      }
    }

    return docDef;
  }

  buildCover() {
    var content = [];

    content.push({
      svg: careerScopeLogoSVGInverse,
      fit: [325, 325],
      margin: [0, 50, 0, 0]
    });
    content.push({
      text: 'Assessment Profile Report',
      margin: [250, 250, 0, 0],
      fontSize: 30,
      alignment: 'right',
      color: '#0F4C81'
    });
    content.push({
      text: 'Carly Sims',
      margin: [250, 25, 0, 0],
      fontSize: 20,
      alignment: 'right',
      color: '#808080'
    });
    content.push({
      text: '5/18/20',
      fontSize: 20,
      alignment: 'right',
      color: '#808080',
      pageBreak: 'after'
    });


    content.push({
      svg: careerScopeLogoSVG,
      fit: [400, 400],
      alignment: 'center'
    });
    content.push({
      text: 'Assessment Profile',
      margin: [0, 300, 0, 0],
      fontSize: 30,
      alignment: 'center',
      color: '#0F4C81'
    });
    content.push({
      text: 'Report',
      fontSize: 30,
      alignment: 'center',
      color: '#0F4C81'
    });
    content.push({
      text: 'Carly Sims',
      margin: [0, 25, 0, 0],
      fontSize: 20,
      alignment: 'center',
      color: '#808080'
    });
    content.push({
      text: '5/18/20',
      fontSize: 20,
      alignment: 'center',
      color: '#808080',
      pageBreak: 'after'
    });

    return content;
  }

  buildFooter() {
    var content = [];


    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 30,
          x2: 700, y2: 30,
          lineWidth: 4,
          lineColor: '#0F4C81',
        }
      ]
    });
    content.push({
      columns: [
        {
          width: 'auto',
          svg: careerScopeLogoSVG,
          fit: [100, 100],
          margin: [20, 10, 0, 0]
        }, {
          text: 'Copyright © 2020 Vocational Research Institute', alignment: 'right', margin: [15, 20], color: '#0F4C81'
        }
      ]
    });

    return content;

  }

  buildTableOfContents(tableOfContents: any) {
    var content = [];

    content.push({
      text: 'Table of Contents',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: tableOfContents
      },
      layout: {
        fillColor: function (rowIndex, node, columnIndex) {
          return (rowIndex % 2 === 0) ? '#F0F0F0' : null;
        },
        defaultBorder: false,
        paddingTop: function (i, node) { return 5; },
        paddingBottom: function (i, node) { return 5; },
      }
    });
    content.push({
      margin: [0, 325, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81' }]
        ]
      },
      layout: {
        fillColor: '#F0F0F0',
        defaultBorder: false,
        paddingTop: function (i, node) { return 12; },
        paddingBottom: function (i, node) { return 12; },
        paddingLeft: function (i, node) { return 10; },
        paddingRight: function (i, node) { return 2; },
      },
    });

    return content;
  }

  buildAssessmentSettings() {
    var content = [];

    content.push({
      text: 'Assessment Settings',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push(
      { text: 'Audio Instructions', fontSize: 12, margin: [0, 60, 0, 12.5] },
      { text: 'Audio delivery enabled?', fontSize: 10, margin: [0, 0, 0, 7.25] },
      { text: 'Yes', fontSize: 10, color: '#0F4C81' }
    );
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -20, y1: 10,
          x2: 300, y2: 10,
          lineWidth: 1,
          lineColor: '#F0F0F0',
        },
      ]
    });
    content.push(
      { text: 'Default Language', fontSize: 12, margin: [0, 10, 0, 12.5] },
      { text: 'What was the default delivery language?', fontSize: 10, margin: [0, 0, 0, 7.25] },
      { text: 'English', fontSize: 10, color: '#0F4C81' }
    );
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -20, y1: 10,
          x2: 300, y2: 10,
          lineWidth: 1,
          lineColor: '#F0F0F0',
        },
      ]
    });
    content.push(
      { text: 'Assessment Untiming', fontSize: 12, margin: [0, 10, 0, 12.5] },
      { text: 'Was untimed delivery enabled?', fontSize: 10, margin: [0, 0, 0, 7.25] },
      { text: 'No', fontSize: 10, color: '#0F4C81' }
    );
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -20, y1: 10,
          x2: 500, y2: 10,
          lineWidth: 1,
          lineColor: '#F0F0F0',
        },
      ]
    });
    content.push({
      columns: [
        {
          stack: [
            { text: 'Introduction', fontSize: 12, margin: [0, 10, 0, 12.5] },
            { text: 'Was the introduction video enabled?', fontSize: 10, margin: [0, 0, 0, 7.25] },
            { text: 'No', fontSize: 10, color: '#0F4C81' }
          ]
        },
        {
          stack: [
            { text: 'Were closed captions enabled?', fontSize: 10, margin: [0, 36.5, 0, 7.25] },
            { text: 'No', fontSize: 10, color: '#0F4C81' }
          ]
        }
      ]
    });
    content.push({
      margin: [0, 200, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81' }]
        ]
      },
      layout: {
        fillColor: '#F0F0F0',
        defaultBorder: false,
        paddingTop: function (i, node) { return 12; },
        paddingBottom: function (i, node) { return 12; },
        paddingLeft: function (i, node) { return 10; },
        paddingRight: function (i, node) { return 2; },
      },
    });

    return content;
  }

  buildInterestInventory() {
    var content = [];

    content.push({
      text: 'Interest Inventory',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 40, 0, 0],
      columns: [
        {
          stack: [
            { text: 'Introduction', fontSize: 12, margin: [0, 0, 0, 10] },
            { text: 'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy!', fontSize: 10 }
          ]
        },
        { svg: jobBoard, width: 200 }
      ]
    });
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: this.buildInterestInventoryTable1()
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });
    content.push({
      text: 'Interest Inventory',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: this.buildInterestInventoryTable2()
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestInventoryTable1() {
    var interestInventoryTable1 = [];

    var i;
    for (i = 0; i < interests.length / 2; i += 2) {
      interestInventoryTable1.push([
        {
          columns: [
            { svg: interests[i].svgLogo, width: 35, margin: [0, 19, 0, 0] },
            {
              margin: [5, 0],
              stack: [
                { text: interests[i].name, fontSize: 12, margin: [0, 30, 0, 15] },
                { text: interests[i].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i].exampleProfessions, color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
        {
          columns: [
            { svg: interests[i + 1].svgLogo, width: 35, margin: [0, 19, 0, 0] },
            {
              margin: [5, 0],
              stack: [
                { text: interests[i + 1].name, fontSize: 12, margin: [0, 30, 0, 15] },
                { text: interests[i + 1].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i + 1].exampleProfessions, color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
      ]);
    }

    return interestInventoryTable1;
  }

  buildInterestInventoryTable2() {
    var interestInventoryTable2 = [];

    var i;
    for (i = 0; i < interests.length / 2; i += 2) {
      interestInventoryTable2.push([
        {
          columns: [
            { svg: interests[i].svgLogo, width: 35, margin: [0, 19, 0, 0] },
            {
              margin: [5, 0],
              stack: [
                { text: interests[i].name, fontSize: 12, margin: [0, 30, 0, 15] },
                { text: interests[i].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i].exampleProfessions, color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
        {
          columns: [
            { svg: interests[i + 1].svgLogo, width: 35, margin: [0, 19, 0, 0] },
            {
              margin: [5, 0],
              stack: [
                { text: interests[i + 1].name, fontSize: 12, margin: [0, 30, 0, 15] },
                { text: interests[i + 1].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i + 1].exampleProfessions, color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
      ]);
    }

    return interestInventoryTable2;
  }

  buildInterestAreaScores() {
    var content = [];

    content.push({
      text: 'Interest Inventory',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 40, 0, 0],
      columns: [
        {
          width: 300,
          stack: [
            { text: 'Interest Area Scores', fontSize: 12, margin: [0, 0, 0, 10] },
            { text: 'Your total number of “LIKE,” “?” and “DISLIKE” responses for each Interest Area are reported below.', fontSize: 10, margin: [0, 0, 0, 10] },
            { text: 'Percentile scores show the percentage of other people who gave fewer “LIKE” responses than you did in each Interest Area.', fontSize: 10, margin: [0, 0, 0, 10] },
            {
              ul: [
                { text: 'A percentile score of 50 shows average interest; 70 or higher shows above average interest', fontSize: 10 },
                { text: '70 or higher shows above average interest as compared to other people.', fontSize: 10, margin: [0, 10, 0, 0] },
                { text: 'Percentile scores are listed below for males and females as well as for the total group.', fontSize: 10, margin: [0, 10, 0, 0] },
                { text: 'Your percentile scores are based upon a comparison between your results and the results of people who are 18 years of age or older.', fontSize: 10, margin: [0, 10, 0, 0] }
              ], margin: [30, 0, 0, 0]
            },
          ]
        }, {
          stack: [
            { svg: reportTabBackground, width: 185, margin: [50, 0, 0, 0] },
            { text: 'Your Top Interests', fontSize: 12, margin: [68, -192, 0, 0] },
            { text: 'Your most significant Interest Areas are identified in the “IPA” column and are based upon data found in the “Percent Like” column.', fontSize: 10, margin: [68, 10, 0, 0] },
            { text: 'Please refer to the Individual Profile Analysis on the next pages for more detailed information. between your results and the results of people who are 18 years of age or older.', fontSize: 10, margin: [68, 10, 0, 0] }
          ], width: 215
        }
      ]
    });
    content.push({ text: 'My Top Interest', fontSize: 12, margin: [0, 20, 0, 0] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              this.buildInterestTable()
          },
          layout: {
            fillColor: function (rowIndex, node, columnIndex) {
              return (columnIndex === 9) ? '#F0F0F0' : null;
            },
            defaultBorder: false,
            hLineColor: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor: function (i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            },
            paddingTop: function (i, node) { return 5; },
            paddingBottom: function (i, node) { return 5; },
            paddingLeft: function (i, node) { return 5; },
            paddingRight: function (i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestTable() {
    var interestTable = [];

    interestTable.push([{ text: 'Interests', colSpan: 2 }, '', { text: 'Responses', colSpan: 3, alignment: 'center' }, '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center', border: [true, false, true, false] }, '', '', 'Percent', 'Result']);
    interestTable.push([{ text: 'Area Names', colSpan: 2 }, '', { text: 'Like' }, { text: '?' }, { text: 'Dislike' }, { text: 'Total', border: [true, false, false, false] }, { text: 'Male' }, { text: 'Female', border: [false, false, true, false] }, { text: 'Like' }, { text: 'IPA' }]);
    interests.forEach(i => {
      interestTable.push([{ svg: i.svgLogo, width: 20 }, { text: i.name, alignment: 'left' }, 10, 0, 4, { text: '84', border: [true, false, false, false] }, 86, { text: '83', border: [false, false, true, false] }, 71, 2]);
    });

    return interestTable;
  }

  buildIndividualProfileAnalysis() {
    var content = [];
    content.push({
      text: 'Interest Inventory',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 40, 0, 0],
      columns: [
        {
          width: 350,
          stack: [
            { text: 'Individual Profile Analysis', fontSize: 12, margin: [0, 0, 0, 10] },
            { text: 'The table below reports and displays the percentage of “LIKE” responses that you recorded within each of the twelve Interest Areas.', fontSize: 10, margin: [0, 0, 0, 10] },
            { text: 'The dark vertical line in the chart is your average percentage of “LIKE” responses (XX%) across all twelve Interest Areas.', fontSize: 10 },
          ]
        },
        {
          stack: [
            { svg: jellyBeanBackground, width: 175 },
            { text: 'CareerScope has identified 5 Interest Areas that stand out significantly above your average level of interest!', fontSize: 10, margin: [15, -95, 0, 0], lineHeight: 1.25 }
          ],
          width: 150
        }
      ]
    });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              this.buildIPATable()
          },
          layout: {
            defaultBorder: false,
            paddingTop: function (i, node) { return 5; },
            paddingBottom: function (i, node) { return 5; },
            paddingLeft: function (i, node) { return 5; },
            paddingRight: function (i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildIPATable() {
    var IPATable = [];

    IPATable.push([{ text: 'Interest Area', colSpan: 2, color: '#0F4C81' }, '', { text: '% Like', color: '#0F4C81' }, { text: 'IPA (XX%)', color: '#0F4C81' }]);
    interests.forEach(i => {
      IPATable.push([{ svg: i.svgLogo, width: 25 }, { text: i.name, alignment: 'left' }, i.plikes, this.buildIPAGraphLine(i.plikes, i.color)]);
    });

    return IPATable;
  }

  buildIPAGraphLine(width: any, color: any) {
    var content = [];

    content.push({
      canvas: [
        {
          type: 'line',
          x1: 0, y1: 7,
          x2: 250, y2: 7,
          lineWidth: 15,
          lineColor: '#F0F0F0',
        },
        {
          type: 'line',
          x1: 0, y1: 7,
          x2: (width * 2.5), y2: 7,
          lineWidth: 15,
          lineColor: color,
        },
        {
          type: 'line',
          x1: 104, y1: -15,
          x2: 104, y2: 25,
          lineWidth: 1,
          lineColor: 'black'
        },
      ], alignment: 'left'
    });

    return content;
  }

  buildPerformanceOnTasks() {
    var content = [];

    content.push({
      text: 'Aptitude Assessment',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({
      margin: [0, 40, 0, 0],
      columns: [
        {
          width: 350,
          stack: [
            { text: 'Performance on Tasks', fontSize: 12, margin: [0, 40, 0, 10] },
            { text: 'The table below reports the number of correct answers and the number of questions you attempted in each assessment task', fontSize: 10, margin: [0, 0, 0, 10] }
          ]
        },
        { svg: reportExercises, width: 175 }
      ]
    });

    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              this.buildPerformanceTable()
          },
          layout: {
            defaultBorder: false
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildPerformanceTable() {
    var performanceTable = [];

    performanceTable.push([{ text: 'Task', color: '#0F4C81' }, { text: 'Correct', color: '#0F4C81' }, { text: 'Attempted', color: '#0F4C81' }]);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);
    performanceTable.push(['Object Identification', '19', '19']);

    return performanceTable;
  }

  buildAptitudeProfile() {
    var content = [];

    content.push({
      text: 'Aptitude Assessment',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({ text: 'Aptitude Profile', fontSize: 12, margin: [0, 20, 0, 10] });
    content.push({ text: 'The table below reports and graphically displays your aptitudes as standard scores and as percentile scores.  Both types of scores involve the comparison of your performace against the performace of other adults.', fontSize: 10, margin: [0, 0, 0, 20] });
    content.push({ text: 'Consider this:', fontSize: 10, margin: [0, 0, 0, 10] });
    content.push({
      ul: [
        { text: 'An aptitude score of 100 is exactly average. Scores between 80 and 120 can be thought of as “in the average range.”', fontSize: 10, margin: [20, 0, 0, 10] },
        { text: 'Percentile (%tile) scores report the percentage of people who score below you.', fontSize: 10, margin: [20, 0, 0, 10] },
        { text: 'The graph displays your relative strengths.', fontSize: 10, margin: [20, 0, 0, 10] },
        { text: 'Different combinations of aptitudes are important in different Work Groups.', fontSize: 10, margin: [20, 0, 0, 50] }
      ]
    });
    content.push({ 
      canvas: [
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#FFD700',
          //fillOpacity: 0.5,
          closePath: true,
          points: [{ x: 300, y: 0 }, { x: 400, y: 0 }, { x: 400, y: 250 }, { x: 300, y: 250 }]
        }
      ]
    });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              this.buildAptitudeProfileTable()
          },
          layout: {
            hLineWidth: function (i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
            },
            vLineWidth: function (i, node) {
              return 0;
            },
            hLineColor: function (i, node) {
              return 'gray';
            },
            paddingTop: function (i, node) { return 10; },
            paddingBottom: function (i, node) { return 10; },
            paddingLeft: function (i, node) { return 5; },
            paddingRight: function (i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      margin: [0, -250, 0, 0],
      pageBreak: 'after'
    });

    return content;
  }

  buildAptitudeProfileTable() {
    let aptitudeProfileTable = [];

    aptitudeProfileTable.push([{ text: 'Aptitude', color: '#0F4C81' }, { text: 'Score', color: '#0F4C81' }, { text: '%tile', color: '#0F4C81' }, { text: 'Average Range', color: '#0F4C81', alignment: 'center' }]);
    aptitudeProfileTable.push(['General Learning', 134, 96, this.buildAptitudeProfileGraph(96)]);
    aptitudeProfileTable.push(['Verbal Aptitude', 106, 62, this.buildAptitudeProfileGraph(62)]);
    aptitudeProfileTable.push(['Numerical Aptitude', 121, 85, this.buildAptitudeProfileGraph(85)]);
    aptitudeProfileTable.push(['Spatial Aptitude', 106, 62, this.buildAptitudeProfileGraph(62)]);
    aptitudeProfileTable.push(['Form Perception', 68, 23, this.buildAptitudeProfileGraph(23)]);
    aptitudeProfileTable.push(['Clerical Perception', 106, 62, this.buildAptitudeProfileGraph(62)]);

    return aptitudeProfileTable;
  }

  buildAptitudeProfileGraph(width: number) {
    var content = [];

    content.push({
      canvas: [
        /*
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#FFFF00',
          //fillOpacity: 0.5,
          closePath: true,
          points: [{ x: 75, y: -5 }, { x: 175, y: -5 }, { x: 175, y: 20 }, { x: 75, y: 20 }]
        }, */
        {
          type: 'line',
          x1: 0, y1: 7,
          x2: 250, y2: 7,
          lineWidth: 15,
          lineColor: '#F0F0F0',
        },
        {
          type: 'line',
          x1: 0, y1: 7,
          x2: (width * 2.5), y2: 7,
          lineWidth: 15,
          lineColor: '#0F4C81',
        },
      ], alignment: 'left'
    });

    return content;
  }

  buildGOERecommendations(interestGOETable: any) {
    var content = [];

    content.push({
      text: 'GOE Recommendations',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });
    content.push({ text: 'Introduction', fontSize: 12, margin: [0, 40, 0, 10] });
    content.push({ text: 'Occupations have been divided into twelve Interest Areas as described in the Guide for Occupational Exploration (GOE) and elsewhere. The Guide for Occupational Exploration further subdivides the Interest Areas into Work Groups, based upon aptitude score requirements. Occupations that belong to the same Work Group require similar interests and similar aptitudes.', fontSize: 10 });
    content.push({ text: 'Understanding Your Report', fontSize: 12, margin: [0, 40, 0, 10] });
    content.push({ text: 'Reported below are career directions that match your aptitudes as well as your 5 strongest interest areas.', fontSize: 10, margin: [0, 0, 0, 10] });
    content.push({ text: 'Review your CareerScope recommendations and score results with a career guidance and counseling professional to learn about the Work Groups that best match your assessment results.', fontSize: 10 });
    content.push({ text: 'Your Interest Areas', fontSize: 12, margin: [0, 40, 0, 20] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              interestGOETable
          },
          layout: {
            defaultBorder: false,
            paddingTop: function (i, node) { return 5; },
            paddingBottom: function (i, node) { return 5; },
            paddingLeft: function (i, node) { return 5; },
            paddingRight: function (i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildGOEJobSection() {
    var content = [];

    content.push({
      text: 'GOE Recommendations',
      fontSize: 23,
      color: '#0F4C81'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -40, y1: 6,
          x2: 240, y2: 6,
          lineWidth: 3,
          lineColor: '#0F4C81',
        },
        {
          type: 'polyline',
          lineWidth: 2,
          color: '#0F4C81',
          closePath: true,
          points: [{ x: 223, y: 6 }, { x: 237, y: 6 }, { x: 230, y: 12 }]
        }
      ]
    });

    return content;
  }

  buildJobTable(interestIndex: number) {
    var content = [];

    content.push({
      columns: [
        { text: 'Interest Area ' + (interestIndex >= 9 ? (interestIndex + 1) : '0' + (interestIndex + 1)) + ' - ' + interests[interestIndex].name, fontSize: 12, margin: [0, 40, 5, 10], width: 'auto' },
        { svg: interests[interestIndex].svgLogo, width: 25, margin: [0, 35, 0, 0] }
      ]
    });
    content.push({ text: interests[interestIndex].description, margin: [0, 10, 0, 20] });
    content.push({
      table: {
        body: this.buildWorkGroupTable(interestIndex + 1)
      },
      layout: {
        defaultBorder: false
      },
      style: {
        cellSpacing: { margin: [0, 20, 0, 0] }
      }
    });

    return content;
  }

  buildWorkGroupTable(workgroupArea: number) {
    var table = [];

    var workgroup = this.ws.workgroups.filter(group => { return group.area === workgroupArea });

    workgroup.forEach(group => {
      table.push([{ text: 'Work Group', fontSize: 8, color: '#0F4C81', colSpan: 4, style: 'cellSpacing' }, '', '', '']);
      table.push([{ text: group.prefix + ' ' + group.name, fontSize: 12, colSpan: 4 }, '', '', '']);
      table.push([{ text: group.description, fontSize: 10, colSpan: 4 }, '', '', '']);
      table.push([{ text: 'Job Title', fontSize: 8, color: '#0F4C81' }, { text: 'D.O.T #', fontSize: 8, color: '#0F4C81' }, { text: 'GED Req', fontSize: 8, color: '#0F4C81' }, { text: 'SVP Req', fontSize: 8, color: '#0F4C81' }]);
      group.jobs.forEach(job => {
        table.push([{ text: job.name, fontSize: 12 }, { text: job.dotNum, fontSize: 12 }, { text: 'M' + job.mathGEDReq + ' / L' + job.languageGEDReq, fontSize: 12 }, { text: job.svp, fontSize: 12 }]);
      });
      table.push(['', '', '', '']);
      table.push(['', '', '', '']);
      table.push(['', '', '', '']);
    });

    return table;
  }

  buildJobDescriptionTable(interestIndex: number) {
    var content = [];

    content.push({
      columns: [
        { text: 'Interest Area ' + (interestIndex >= 9 ? (interestIndex + 1) : '0' + (interestIndex + 1)) + ' - ' + interests[interestIndex].name, fontSize: 12, margin: [0, 40, 5, 10], width: 'auto' },
        { svg: interests[interestIndex].svgLogo, width: 25, margin: [0, 35, 0, 0] }
      ],
      pageBreak: 'before'
    });
    content.push({
      canvas: [
        {
          type: 'line',
          x1: -5, y1: 0,
          x2: 520, y2: 0,
          lineWidth: 1,
          lineColor: interests[interestIndex].color,
        }
      ]
    })
    content.push({ text: interests[interestIndex].description, margin: [0, 10, 0, 20] });
    content.push({
      table: {
        body: this.buildWorkGroupDescriptionTable(interestIndex + 1)
      },
      layout: {
        defaultBorder: false
      },
      style: {
        cellSpacing: { margin: [0, 20, 0, 0] }
      }
    });

    return content;
  }

  buildWorkGroupDescriptionTable(workgroupArea: number) {
    var table = [];

    var workgroup = this.ws.workgroups.filter(group => { return group.area === workgroupArea });

    workgroup.forEach(group => {
      table.push([{ text: 'Work Group', fontSize: 8, color: '#0F4C81', style: 'cellSpacing' },]);
      table.push([{ text: group.prefix + ' ' + group.name, fontSize: 12 }]);
      table.push([{ text: group.description, fontSize: 10 }]);
      table.push(['']);
      table.push(['']);
      table.push(['']);
    });

    return table;
  }
}

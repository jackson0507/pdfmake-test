import { Component } from '@angular/core';
import { careerScopeLogoSVG, careerScopeLogoSVGInverse, jobBoard, jellyBeanBackground, reportTabBackground, reportExercises } from '../svg';
import { interests } from '../populateInterests';
import { WorkgroupsService } from '../workgroups.service';
import { aptitudeTasks } from '../populateAptitudes';
import { EvalueeService } from '../evaluee.service';
import { AptitudeService } from '../aptitude.service';


import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import pdfFonts from 'pdf/fonts/custom-fonts.js';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

  constructor(
    private ws: WorkgroupsService,
    private es: EvalueeService,
    private as: AptitudeService,
  ) {
    es.loadEvaluee('2C7gl1C9dmWPwaMIvRAgAwIQrhA3');
    es.loadRegister('85zTOc8KSwi0iB9mroGz');
    es.loadEvalueePortal('1001269');
  }

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

    const docDef = this.buildReport(tableOfContents);

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const fonts = {
      Nunito: {
        normal: 'Nunito-Regular.ttf',
        bold: 'Nunito-Bold.ttf',
        italics: 'Nunito-Italic.ttf',
        bolditalics: 'Nunito-BoldItalic.ttf'
      }
    };

    pdfMake.fonts = fonts;
    pdfMake.createPdf(docDef).open();
  }

  buildReport(tableOfContents: any, evalName: string = this.es.evalueePortal.fullName) {
    const docDef = {
      pageMargins: [40, 80, 40, 80],
      header(currentPage) {
        if (currentPage > 2) {
          return [
            {
              columns: [
                {
                  stack: [
                    {
                      text: 'Assessment Profile Report',
                      fontSize: 9,
                      color: '#0F4C81'
                    }, {
                      text: evalName + '    5/18/20',
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
          ];
        }
      },
      footer: this.buildFooter(),
      background(currentPage) {
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
          };
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
        this.buildUnscoredAptitudes(),
        this.buildGOERecommendations(),
        this.buildJobTables(),
        this.buildJobDescriptionTable(0),
        this.buildJobDescriptionTable(8),
        this.buildJobDescriptionTable(10),
      ],
      defaultStyle: {
        font: 'Nunito'
      }
    };

    return docDef;
  }

  buildCover() {
    const content = [];

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
      text: this.es.evalueePortal.fullName,
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
      text: this.es.evalueePortal.fullName,
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
    const content = [];


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

  buildPageHeader(title: string) {
    const content = [];

    content.push({
      text: title,
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

  buildTableOfContents(tableOfContents: any) {
    const content = [];

    content.push(this.buildPageHeader('Table Of Contents'));
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: tableOfContents
      },
      layout: {
        fillColor(rowIndex, node, columnIndex) {
          return (rowIndex % 2 === 0) ? '#F0F0F0' : null;
        },
        defaultBorder: false,
        paddingTop(i, node) { return 5; },
        paddingBottom(i, node) { return 5; },
      }
    });
    content.push({
      margin: [0, 275, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81' }]
        ]
      },
      layout: {
        fillColor: '#F0F0F0',
        defaultBorder: false,
        paddingTop(i, node) { return 12; },
        paddingBottom(i, node) { return 12; },
        paddingLeft(i, node) { return 10; },
        paddingRight(i, node) { return 2; },
      },
    });

    return content;
  }

  buildAssessmentSettings() {
    const content = [];

    content.push(this.buildPageHeader('Assessment Settings'));
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
      margin: [0, 150, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81' }]
        ]
      },
      layout: {
        fillColor: '#F0F0F0',
        defaultBorder: false,
        paddingTop(i, node) { return 12; },
        paddingBottom(i, node) { return 12; },
        paddingLeft(i, node) { return 10; },
        paddingRight(i, node) { return 2; },
      },
    });

    return content;
  }

  buildInterestInventory() {
    const content = [];

    content.push(this.buildPageHeader('Interest Inventory'));
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
      margin: [0, 10, 0, 0],
      table: {
        body: this.buildInterestInventoryTable1()
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });
    content.push(this.buildPageHeader('Interest Inventory'));
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
    const interestInventoryTable1 = [];

    let i;
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
    const interestInventoryTable2 = [];

    let i;
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
    const content = [];

    content.push(this.buildPageHeader('Interest Inventory'));
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
    content.push({ text: 'Your Top Interests', fontSize: 12, margin: [0, 20, 0, 10] });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              this.buildInterestTopFive()
          },
          layout: {
            fillColor(rowIndex, node, columnIndex) {
              return (columnIndex === 9) ? '#F0F0F0' : null;
            },
            defaultBorder: false,
            hLineColor(i, node) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor(i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            },
            paddingTop(i, node) { return 5; },
            paddingBottom(i, node) { return 5; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });
    content.push(this.buildPageHeader('Interest Inventory'));
    content.push({ text: 'Your Interest Results', fontSize: 12, margin: [0, 40, 0, 10] });
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
            fillColor(rowIndex, node, columnIndex) {
              return (columnIndex === 9) ? '#F0F0F0' : null;
            },
            defaultBorder: false,
            hLineColor(i, node) {
              return (i === 0 || i === node.table.body.length) ? 'gray' : 'gray';
            },
            vLineColor(i, node) {
              return (i === 0 || i === node.table.widths.length) ? 'gray' : 'gray';
            },
            paddingTop(i, node) { return 5; },
            paddingBottom(i, node) { return 5; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestTopFive() {
    const interestTable = [];

    interestTable.push([{ text: 'Interests', colSpan: 2, color: '#0F4C81' }, '', { text: 'Responses', colSpan: 3, alignment: 'center', color: '#0F4C81' }, '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center', border: [true, false, true, false], color: '#0F4C81' }, '', '', { text: 'Percent', color: '#0F4C81' }, { text: 'Result', color: '#0F4C81' }]);
    interestTable.push([{ text: 'Area Names', colSpan: 2, color: '#0F4C81' }, '', { text: 'Like', color: '#0F4C81' }, { text: '?', color: '#0F4C81' }, { text: 'Dislike', color: '#0F4C81' }, { text: 'Total', border: [true, false, false, false], color: '#0F4C81' }, { text: 'Male', color: '#0F4C81' }, { text: 'Female', border: [false, false, true, false], color: '#0F4C81' }, { text: 'Like', color: '#0F4C81' }, { text: 'IPA', color: '#0F4C81' }]);

    interests.forEach(i => {
      const evalueeResult = this.es.evalueePortal.interestResults.find(interest => interest.interestId === i.id);
      const evalueeScore = this.es.evalueePortal.interestScores.find(interest => interest.interestId === i.id);
      if (evalueeScore.rank > 0) {
        interestTable.push([
          { svg: i.svgLogo, width: 20 },
          { text: i.name, alignment: 'left', margin: [0, 3, 0, 0] },
          { text: evalueeResult.like, margin: [0, 3, 0, 0] },
          { text: evalueeResult.unanswered, margin: [0, 3, 0, 0] },
          { text: evalueeResult.dislike, margin: [0, 3, 0, 0] },
          { text: evalueeScore.totalScore, border: [true, false, false, false], margin: [0, 3, 0, 0] },
          { text: evalueeScore.vsMale, margin: [0, 3, 0, 0] },
          { text: evalueeScore.vsFemale, border: [false, false, true, false], margin: [0, 3, 0, 0] },
          { text: evalueeScore.percentLike, margin: [0, 3, 0, 0] },
          { text: evalueeScore.rank, margin: [0, 3, 0, 0] }
        ]);
      }
    });

    return interestTable;
  }

  buildInterestTable() {
    const interestTable = [];

    interestTable.push([{ text: 'Interests', colSpan: 2, color: '#0F4C81' }, '', { text: 'Responses', colSpan: 3, alignment: 'center', color: '#0F4C81' }, '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center', border: [true, false, true, false], color: '#0F4C81' }, '', '', { text: 'Percent', color: '#0F4C81' }, { text: 'Result', color: '#0F4C81' }]);
    interestTable.push([{ text: 'Area Names', colSpan: 2, color: '#0F4C81' }, '', { text: 'Like', color: '#0F4C81' }, { text: '?', color: '#0F4C81' }, { text: 'Dislike', color: '#0F4C81' }, { text: 'Total', border: [true, false, false, false], color: '#0F4C81' }, { text: 'Male', color: '#0F4C81' }, { text: 'Female', border: [false, false, true, false], color: '#0F4C81' }, { text: 'Like', color: '#0F4C81' }, { text: 'IPA', color: '#0F4C81' }]);

    interests.forEach(i => {
      const evalueeResult = this.es.evalueePortal.interestResults.find(interest => interest.interestId === i.id);
      const evalueeScore = this.es.evalueePortal.interestScores.find(interest => interest.interestId === i.id);
      interestTable.push([
        { svg: i.svgLogo, width: 20 },
        { text: i.name, alignment: 'left', margin: [0, 3, 0, 0] },
        { text: evalueeResult.like, margin: [0, 3, 0, 0] },
        { text: evalueeResult.unanswered, margin: [0, 3, 0, 0] },
        { text: evalueeResult.dislike, margin: [0, 3, 0, 0] },
        { text: evalueeScore.totalScore, border: [true, false, false, false], margin: [0, 3, 0, 0] },
        { text: evalueeScore.vsMale, margin: [0, 3, 0, 0] },
        { text: evalueeScore.vsFemale, border: [false, false, true, false], margin: [0, 3, 0, 0] },
        { text: evalueeScore.percentLike, margin: [0, 3, 0, 0] },
        { text: evalueeScore.rank, margin: [0, 3, 0, 0] }
      ]);
    });

    return interestTable;
  }

  buildIndividualProfileAnalysis() {
    const content = [];
    content.push(this.buildPageHeader('Interest Inventory'));
    content.push({
      margin: [0, 40, 0, 40],
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
            paddingTop(i, node) { return 2; },
            paddingBottom(i, node) { return 2; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildIPATable() {
    const IPATable = [];

    IPATable.push([{ text: 'Interest Area', colSpan: 2, color: '#0F4C81' }, '', { text: '% Like', color: '#0F4C81' }, { text: 'IPA (XX%)', color: '#0F4C81' }]);

    interests.forEach(i => {
      const evalueeScore = this.es.evalueePortal.interestScores.find(interest => interest.interestId === i.id);
      IPATable.push([
        { svg: i.svgLogo, width: 25 },
        { text: i.name, alignment: 'left', margin: [0, 5, 0, 0] },
        { text: evalueeScore.percentLike, margin: [0, 5, 0, 0] },
        this.buildIPAGraphLine(evalueeScore.percentLike, i.color)
      ]);
    });

    return IPATable;
  }

  buildIPAGraphLine(width: any, color: any) {
    const content = [];

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
          x1: 104, y1: -20,
          x2: 104, y2: 25,
          lineWidth: 1,
          lineColor: 'black'
        },
      ],
      alignment: 'left',
      margin: [0, 5, 0, 0]
    });

    return content;
  }

  buildPerformanceOnTasks() {
    const content = [];

    content.push(this.buildPageHeader('Aptitude Assessment'));
    content.push({
      margin: [0, 40, 0, 60],
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
            hLineWidth(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
            },
            vLineWidth(i, node) {
              return 0;
            },
            hLineColor(i, node) {
              return 'gray';
            },
            paddingTop(i, node) { return 5; },
            paddingBottom(i, node) { return 5; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildPerformanceTable() {
    const performanceTable = [];

    performanceTable.push([{ text: 'Task', color: '#0F4C81', colSpan: 2 }, '', { text: 'Correct', color: '#0F4C81' }, { text: 'Attempted', color: '#0F4C81' }]);
    aptitudeTasks.forEach(t => {
      const evalueeResult = this.es.evalueePortal.taskResults.find(task => task.taskId === t.id);
      performanceTable.push([
        { svg: t.iconFile, width: 25 },
        { text: t.name, margin: [0, 5, 75, 0] },
        { text: evalueeResult.correct, margin: [0, 5, 75, 0] },
        { text: t.questionCount, margin: [0, 5, 0, 0] }
      ]);
    });

    return performanceTable;
  }

  buildAptitudeProfile() {
    const content = [];
    const averageRangeHeight = 300;

    content.push(this.buildPageHeader('Aptitude Assessment'));
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
          // fillOpacity: 0.5,
          closePath: true,
          points: [{ x: 305, y: 0 }, { x: 400, y: 0 }, { x: 400, y: averageRangeHeight }, { x: 310, y: averageRangeHeight }]
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
            hLineWidth(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
            },
            vLineWidth(i, node) {
              return 0;
            },
            hLineColor(i, node) {
              return 'gray';
            },
            paddingTop(i, node) { return 10; },
            paddingBottom(i, node) { return 10; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      margin: [0, -averageRangeHeight - 5, 0, 0],
      pageBreak: 'after'
    });

    return content;
  }

  buildAptitudeProfileTable() {
    const aptitudeProfileTable = [];
    this.as.tally();

    aptitudeProfileTable.push([{ text: 'Aptitude', color: '#0F4C81' }, { text: 'Score', color: '#0F4C81' }, { text: '%tile', color: '#0F4C81' }, { text: 'Average Range', color: '#0F4C81', alignment: 'center' }]);

    this.as.aptitudes.forEach(a => {
      aptitudeProfileTable.push([
        { text: a.name },
        { text: a.score },
        { text: a.percentile },
        this.buildAptitudeProfileGraph(a.percentile)
      ]);
    });

    return aptitudeProfileTable;
  }

  buildAptitudeProfileGraph(width: number) {
    const content = [];

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
          lineColor: '#A9A9A9',
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

  buildUnscoredAptitudes() {
    const content = [];

    content.push(this.buildPageHeader('Aptitude Assessment'));
    content.push({ text: 'Unscored Aptitudes', fontSize: 12, margin: [0, 40, 0, 20] });
    content.push({ text: 'Your aptitude profile may include aptitudes that can not be calculated via online exercises.', fontSize: 10, margin: [0, 0, 0, 10] });
    content.push({ text: 'Those aptitudes may include:', fontSize: 10 });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              [
                [{ text: 'Aptitude', color: '#0F4C81', fontSize: 10, margin: [0, 0, 40, 0] }, { text: 'Source', color: '#0F4C81', fontSize: 10 }],
                [{ text: 'Motor Coordination (K)', fontSize: 12, margin: [0, 0, 40, 0] }, { text: 'Counselor', fontSize: 12 }],
                [{ text: 'Finger Dexerity (F)', fontSize: 12, margin: [0, 0, 40, 0] }, { text: 'Counselor', fontSize: 12 }],
                [{ text: 'Manual Dexerity (M)', fontSize: 12, margin: [0, 0, 40, 0] }, { text: 'Counselor', fontSize: 12 }]
              ]
          },
          layout: {
            hLineWidth(i, node) {
              return (i === 0 || i === node.table.body.length) ? 0 : 0.5;
            },
            vLineWidth(i, node) {
              return 0;
            },
            hLineColor(i, node) {
              return 'gray';
            },
            paddingTop(i, node) { return 10; },
            paddingBottom(i, node) { return 10; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      margin: [0, 40, 0, 40]
    });
    content.push({ text: 'If “Counselor” is listed as the source of information, an assumption has been made regarding the score.', fontSize: 10, margin: [0, 0, 0, 10] });
    content.push({ text: 'If "None" is listed as the source, the performance factor will not be considered when making Work Group recommendations', fontSize: 10, pageBreak: 'after' });

    return content;
  }

  buildGOERecommendations() {
    const content = [];

    content.push(this.buildPageHeader('GOE Recommendations'));
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
              this.buildInterestGOETable()
          },
          layout: {
            defaultBorder: false,
            paddingTop(i, node) { return 5; },
            paddingBottom(i, node) { return 5; },
            paddingLeft(i, node) { return 5; },
            paddingRight(i, node) { return 5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestGOETable() {
    const interestGOETable = [];

    const topInterests = this.es.evalueePortal.interestScores.filter(interest => interest.rank > 0);

    let i;
    for (i = 0; i < topInterests.length; i += 2) {
      interestGOETable.push([
        {
          stack: [
            { svg: interests.find(interest => interest.id === topInterests[i].interestId).pillLogo, width: 100, margin: [-10, 0, 0, -5] },
            { text: 'The GOE identifies this as Interest Area ' + (topInterests[i].interestId > 9 ? topInterests[i].interestId : '0' + topInterests[i].interestId) + '.', fontSize: 10, margin: [30, 7, 0, 3] },
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
          ],
          margin: [0, 0, 0, 10]
        },
        {
          stack: [
            { svg: interests.find(interest => interest.id === topInterests[i + 1].interestId).pillLogo, width: 100, margin: [-10, 0, 0, -5] },
            { text: 'The GOE identifies this as Interest Area ' + (topInterests[i + 1].interestId > 9 ? topInterests[i + 1].interestId : '0' + topInterests[i + 1].interestId) + '.', fontSize: 10, margin: [30, 7, 0, 3] },
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
          ],
          margin: [0, 0, 0, 10]
        },
      ]);
    }

    return interestGOETable;
  }

  buildJobTables() {
    const content = [];

    content.push(this.buildPageHeader('GOE Recommendations'));

    const topInterests = this.es.evalueePortal.interestScores.filter(interest => interest.rank > 0);

    topInterests.forEach(i => {
      const interest = interests.find(interest => interest.id === i.interestId);

      content.push({
        columns: [
          { text: 'Interest Area ' + (i.interestId > 9 ? i.interestId : '0' + i.interestId) + ' - ' + interest.name, fontSize: 12, margin: [0, 40, 5, 10], width: 'auto' },
          { svg: interest.svgLogo, width: 25, margin: [0, 35, 0, 0] }
        ]
      });
      content.push({ text: interest.description, margin: [0, 10, 0, 20] });
      content.push({
        table: {
          body: this.buildWorkGroupTable(i.interestId)
        },
        layout: {
          defaultBorder: false
        },
        style: {
          cellSpacing: { margin: [0, 20, 0, 0] }
        }
      });
    });


    return content;
  }

  buildWorkGroupTable(workgroupArea: number) {
    const table = [];

    const workgroup = this.ws.workgroups.filter(group => group.area === workgroupArea);

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
    const content = [];

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
    });
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
    const table = [];

    const workgroup = this.ws.workgroups.filter(group => group.area === workgroupArea);

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

import { Component } from '@angular/core';
import { careerScopeLogoSVG, careerScopeLogoSVGInverse, jobBoard, jellyBeanBackground, reportTabBackground, reportExercises, checkmark } from '../svg';
import { interests } from '../populateInterests';
import { InterestScore } from '../evaluee.model';
import { WorkgroupsService } from '../workgroups.service';
import { aptitudeTasks } from '../populateAptitudes';
import { EvalueeService } from '../evaluee.service';
import { AptitudeService } from '../aptitude.service';


import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
import pdfFonts from 'pdf/fonts/custom-fonts.js';
import { Interest } from '../interests.model';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

  topInterests: InterestScore[];
  today = new Date().toLocaleDateString();

  constructor(
    private ws: WorkgroupsService,
    private es: EvalueeService,
    private as: AptitudeService,
  ) { }

  /*
  createDate() {
    const dd = String(this.today.getDate()).padStart(2, '0');
    const mm = String(this.today.getMonth() + 1).padStart(2, '0');
    const yyyy = this.today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
  }*/

  async generatePDFReport() {
    await this.es.loadEvaluee('R04470_DNMM', '1038734');

    this.topInterests = this.es.evaluee.interestScores.filter(interest => interest.rank > 0);
    this.topInterests.sort(this.sortInterests);

    const docDef = this.buildReport();

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

  buildReport(evalName: string = this.es.evaluee.fullName, today: string = this.today) {
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
                      text: evalName + '    ' + today,
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
        this.buildTOC(),
        this.buildAssessmentSettings(),
        this.buildInterestInventory(),
        this.buildInterestAreaScores(),
        this.buildIndividualProfileAnalysis(),
        this.buildPerformanceOnTasks(),
        this.buildAptitudeProfile(),
        this.buildUnscoredAptitudes(),
        this.buildGOERecommendations(),
        this.buildJobTables(),
        this.buildJobDescriptionTables()
      ],
      defaultStyle: {
        font: 'Nunito',
        fontSize: 10
      },
      styles: {
        tableHeader: {
          italics: true,
          fontSize: 10,
          color: '#0F4C81'
        }
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
      text: this.es.evaluee.fullName,
      margin: [250, 25, 0, 0],
      fontSize: 20,
      alignment: 'right',
      color: '#808080'
    });
    content.push({
      text: this.today,
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
      text: this.es.evaluee.fullName,
      margin: [0, 25, 0, 0],
      fontSize: 20,
      alignment: 'center',
      color: '#808080'
    });
    content.push({
      text: this.today,
      margin: [0, 0, 0, 10],
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

  buildPageHeader(title: string, tocItem: boolean) {
    const content = [];

    if (tocItem && (title === 'Assessment Settings' || title === 'Aptitude Assessment')) {
      content.push({
        text: title,
        fontSize: 23,
        color: '#0F4C81',
        tocItem: true,
        tocMargin: [5, 2.5, 0, 2.5],
        tocStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 },
        tocNumberStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 }
      });
    } else if (tocItem) {
      content.push({
        text: title,
        fontSize: 23,
        color: '#0F4C81',
        tocItem: true,
        tocMargin: [5, 2.5, 0, 2.5],
        tocStyle: { color: '#0F4C81', fontSize: 12 },
        tocNumberStyle: { color: '#0F4C81', fontSize: 12 }
      });
    } else {
      content.push({
        text: title,
        fontSize: 23,
        color: '#0F4C81'
      });
    }
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

  buildTOC() {
    const content = [];

    content.push(this.buildPageHeader('Table Of Contents', false));
    content.push({
      toc: {
        title: { text: '' }
      },
      margin: [0, 30, 200, 0]
    });
    content.push({
      margin: [0, 325, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81', fontSize: 12 }]
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
      pageBreak: 'after'
    });

    return content;
  }

  buildAssessmentSettings() {
    const content = [];

    content.push(this.buildPageHeader('Assessment Settings', true));
    content.push(
      { text: 'Assessment Date', fontSize: 12, margin: [0, 60, 0, 12.5] },
      {
        columns: [
          { text: 'Taken on:', fontSize: 10 },
          { text: (new Date(this.es.evaluee.exercisesComplete.toDate())).toDateString(), fontSize: 10, color: '#0F4C81', margin: [-210, 0, 0, 0] }
        ], margin: [0, 0, 0, 0]
      }
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
      { text: 'Audio Instructions', fontSize: 12, margin: [0, 10, 0, 12.5] },
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
      margin: [0, 100, 0, 0],
      table: {
        widths: [150],
        body: [
          [{ text: 'Visit www.careerscope.net to view your highlighted results & engage with your newly discovered paths!', color: '#0F4C81', fontSize: 12 }]
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
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestInventory() {
    const content = [];

    content.push(this.buildPageHeader('Interest Inventory', true));
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
        body: this.buildInterestInventoryTable(0, interests.length / 2)
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });
    content.push(this.buildPageHeader('Interest Inventory', false));
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: this.buildInterestInventoryTable(interests.length / 2, interests.length)
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });

    return content;
  }

  buildInterestInventoryTable(start: number, end: number) {
    const interestInventoryTable = [];

    let i;
    for (i = start; i < end; i += 2) {
      interestInventoryTable.push([
        {
          columns: [
            { svg: interests[i].svgLogo, width: 25, margin: [0, 25, 0, 0] },
            {
              margin: [5, 0, 0, 0],
              stack: [
                { text: interests[i].name, fontSize: 12, margin: [0, 30, 0, 15] },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: -35, y1: -10,
                      x2: 200, y2: -10,
                      lineWidth: 1,
                      lineColor: interests[i].color,
                    }
                  ]
                },
                { text: interests[i].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i].exampleProfessions, color: '#0F4C81', fontSize: 8 }
              ], width: 200
            }
          ], margin: [0, 0, 20, 0]
        },
        {
          columns: [
            { svg: interests[i + 1].svgLogo, width: 25, margin: [0, 25, 0, 0] },
            {
              margin: [5, 0],
              stack: [
                { text: interests[i + 1].name, fontSize: 12, margin: [0, 30, 0, 15] },
                {
                  canvas: [
                    {
                      type: 'line',
                      x1: -35, y1: -10,
                      x2: 200, y2: -10,
                      lineWidth: 1,
                      lineColor: interests[i + 1].color,
                    }
                  ]
                },
                { text: interests[i + 1].description, fontSize: 10, margin: [0, 0, 0, 10] },
                { text: interests[i + 1].exampleProfessions, color: '#0F4C81', fontSize: 8 }
              ], width: 200
            }
          ]
        },
      ]);
    }

    return interestInventoryTable;
  }

  buildInterestAreaScores() {
    const content = [];

    content.push(this.buildPageHeader('Interest Inventory', false));
    content.push({
      margin: [0, 40, 0, 0],
      columns: [
        {
          width: 300,
          stack: [
            { text: 'Interest Area Scores', fontSize: 12, margin: [0, 0, 0, 10], tocItem: true, tocMargin: [20, 0, 0, 0], tocStyle: { color: '#0F4C81', fontSize: 12 }, tocNumberStyle: { color: '#0F4C81', fontSize: 12 } },
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
              this.buildTopInterestTable()
          },
          layout: {
            fillColor(rowIndex, node, columnIndex) {
              return (columnIndex === 9) ? '#F0F0F0' : null;
            },
            hLineWidth(i, node) {
              return (i === 0 || i === 1 || i === 2 || i === node.table.body.length) ? 0 : 1;
            },
            vLineWidth(i, node) {
              return (i === 5 || i === 8 ? 1 : 0);
            },
            hLineColor(i, node) {
              return '#D3D3D3';
            },
            vLineColor(i, node) {
              return '#D3D3D3';
            },
            paddingTop(i, node) { return 10; },
            paddingBottom(i, node) {
              return (i === 0) ? 0 : 10;
            },
            paddingLeft(i, node) { return 7.5; },
            paddingRight(i, node) { return 7.5; },
          }
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });
    content.push(this.buildPageHeader('Interest Inventory', false));
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
            hLineWidth(i, node) {
              return (i === 0 || i === 1 || i === 2 || i === node.table.body.length) ? 0 : 1;
            },
            vLineWidth(i, node) {
              return (i === 5 || i === 8 ? 1 : 0);
            },
            hLineColor(i, node) {
              return '#D3D3D3';
            },
            vLineColor(i, node) {
              return '#D3D3D3';
            },
            paddingTop(i, node) { return 10; },
            paddingBottom(i, node) {
              return (i === 0) ? 0 : 10;
            },
            paddingLeft(i, node) { return 7.5; },
            paddingRight(i, node) { return 7.5; },
          },
        },
        { width: '*', text: '' },
      ],
      pageBreak: 'after'
    });

    return content;
  }

  sortInterests(a, b) {
    if (a.rank < b.rank) {
      return -1;
    }
    if (a.rank > b.rank) {
      return 1;
    }
    return 0;
  }

  buildTopInterestTable() {
    const interestTable = [];

    interestTable.push([{ text: 'Interests', colSpan: 2, style: 'tableHeader' }, '', { text: 'Responses', colSpan: 3, alignment: 'center', style: 'tableHeader' }, '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center', border: [true, false, true, false], style: 'tableHeader' }, '', '', { text: 'Percent', style: 'tableHeader' }, { text: 'Result', style: 'tableHeader' }]);
    interestTable.push([{ text: 'Area Names', colSpan: 2, style: 'tableHeader' }, '', { text: 'Like', style: 'tableHeader' }, { text: '?', style: 'tableHeader' }, { text: 'Dislike', style: 'tableHeader' }, { text: 'Total', border: [true, false, false, false], style: 'tableHeader' }, { text: 'Male', style: 'tableHeader' }, { text: 'Female', border: [false, false, true, false], style: 'tableHeader' }, { text: 'Like', alignment: 'center', style: 'tableHeader' }, { text: 'IPA', alignment: 'center', style: 'tableHeader' }]);

    this.topInterests.forEach(i => {
      const topInterest = interests.find(interest => interest.id === i.interestId);
      const evalueeResult = this.es.evaluee.interestResults.find(interest => interest.interestId === i.interestId);

      if (i.rank > 0) {
        interestTable.push([
          { svg: topInterest.svgLogo, width: 20 },
          { text: topInterest.name, alignment: 'left', margin: [0, 3, 0, 0] },
          { text: evalueeResult.like, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: evalueeResult.unanswered, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: evalueeResult.dislike, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: i.totalScore, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: i.vsMale, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: i.vsFemale, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: i.percentLike, alignment: 'center', margin: [0, 3, 0, 0] },
          { text: i.rank, alignment: 'center', margin: [0, 3, 0, 0] }
        ]);
      }
    });

    return interestTable;
  }

  buildInterestTable() {
    const interestTable = [];

    interestTable.push([{ text: 'Interests', colSpan: 2, style: 'tableHeader' }, '', { text: 'Responses', colSpan: 3, alignment: 'center', style: 'tableHeader' }, '', '', { text: 'Percentiles', colSpan: 3, alignment: 'center', border: [true, false, true, false], style: 'tableHeader' }, '', '', { text: 'Percent', style: 'tableHeader' }, { text: 'Result', style: 'tableHeader' }]);
    interestTable.push([{ text: 'Area Names', colSpan: 2, style: 'tableHeader' }, '', { text: 'Like', style: 'tableHeader' }, { text: '?', style: 'tableHeader' }, { text: 'Dislike', style: 'tableHeader' }, { text: 'Total', border: [true, false, false, false], style: 'tableHeader' }, { text: 'Male', style: 'tableHeader' }, { text: 'Female', border: [false, false, true, false], style: 'tableHeader' }, { text: 'Like', alignment: 'center', style: 'tableHeader' }, { text: 'IPA', alignment: 'center', style: 'tableHeader' }]);

    interests.forEach(i => {
      const evalueeResult = this.es.evaluee.interestResults.find(interest => interest.interestId === i.id);
      const evalueeScore = this.es.evaluee.interestScores.find(interest => interest.interestId === i.id);
      interestTable.push([
        { svg: i.svgLogo, width: 20 },
        { text: i.name, alignment: 'left', margin: [0, 3, 0, 0] },
        { text: evalueeResult.like, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeResult.unanswered, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeResult.dislike, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeScore.totalScore, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeScore.vsMale, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeScore.vsFemale, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeScore.percentLike, alignment: 'center', margin: [0, 3, 0, 0] },
        { text: evalueeScore.rank, alignment: 'center', margin: [0, 3, 0, 0] }
      ]);
    });

    return interestTable;
  }

  buildIndividualProfileAnalysis() {
    let evalPercentLikeAvg = 0;
    interests.forEach(i => {
      evalPercentLikeAvg += this.es.evaluee.interestScores.find(interest => interest.interestId === i.id).percentLike;
    });
    evalPercentLikeAvg = evalPercentLikeAvg / interests.length;

    const content = [];
    content.push(this.buildPageHeader('Interest Inventory', false));
    content.push({
      margin: [0, 40, 0, 40],
      columns: [
        {
          width: 350,
          stack: [
            { text: 'Individual Profile Analysis', fontSize: 12, margin: [0, 0, 0, 10], tocItem: true, tocMargin: [20, 0, 0, 2.5], tocStyle: { color: '#0F4C81', fontSize: 12 }, tocNumberStyle: { color: '#0F4C81', fontSize: 12 } },
            { text: 'The table below reports and displays the percentage of “LIKE” responses that you recorded within each of the twelve Interest Areas.', fontSize: 10, margin: [0, 0, 0, 10] },
            { text: 'The dark vertical line in the chart is your average percentage of “LIKE” responses (XX%) across all twelve Interest Areas.', fontSize: 10 },
          ]
        },
        {
          stack: [
            { svg: jellyBeanBackground, width: 175 },
            { text: 'CareerScope has identified ' + this.topInterests.length + ' Interest Areas that stand out significantly above your average level of interest!', fontSize: 10, margin: [15, -95, 0, 0], lineHeight: 1.25 }
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
              this.buildIPATable(evalPercentLikeAvg)
          },
          layout: {
            hLineWidth(i, node) {
              return (i === 0 || i === 1 || i === node.table.body.length) ? 0 : 1;
            },
            vLineWidth(i, node) {
              return 0;
            },
            hLineColor(i, node) {
              return '#D3D3D3';
            },
            paddingTop(i, node) { return 2; },
            paddingBottom(i, node) {
              return (i === 0) ? 12 : 2;
            },
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

  buildIPATable(percentLikeAvg: number) {
    const IPATable = [];

    IPATable.push([{ text: 'Interest Area', colSpan: 2, style: 'tableHeader' }, '', { text: '% Like', style: 'tableHeader' }, { text: 'IPA (XX%)', style: 'tableHeader', margin: [(percentLikeAvg * 2.5) - 22, 0, 0, 0] }]);

    interests.forEach(i => {
      const evalueeScore = this.es.evaluee.interestScores.find(interest => interest.interestId === i.id);
      IPATable.push([
        { svg: i.svgLogo, width: 25, margin: [0, 2.5, 0, 0] },
        { text: i.name, alignment: 'left', margin: [0, 7.5, 0, 0] },
        { text: evalueeScore.percentLike, alignment: 'center', margin: [0, 7.5, 0, 0] },
        this.buildIPAGraphLine(evalueeScore.percentLike, i.color, percentLikeAvg)
      ]);
    });

    return IPATable;
  }

  buildIPAGraphLine(width: any, color: any, percentLikeAvg: number) {
    const content = [];

    content.push({
      canvas: [
        {
          type: 'line',
          x1: 0, y1: 10,
          x2: 250, y2: 10,
          lineWidth: 15,
          lineColor: '#F0F0F0',
        },
        {
          type: 'line',
          x1: 0, y1: 10,
          x2: (width * 2.5), y2: 10,
          lineWidth: 15,
          lineColor: color,
        },
        {
          type: 'line',
          x1: (percentLikeAvg * 2.5), y1: -10,
          x2: (percentLikeAvg * 2.5), y2: 25,
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

    content.push(this.buildPageHeader('Aptitude Assessment', true));
    content.push({
      margin: [0, 20, 0, 60],
      columns: [
        {
          width: 350,
          stack: [
            { text: 'Performance on Tasks', fontSize: 12, margin: [0, 40, 0, 10], tocItem: true, tocMargin: [20, 0, 0, 0], tocStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 }, tocNumberStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 } },
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
              return (i === 0 || i === 1 || i === node.table.body.length) ? 0 : 0.5;
            },
            vLineWidth(i, node) {
              return 0;
            },
            hLineColor(i, node) {
              return 'gray';
            },
            paddingTop(i, node) { return 5; },
            paddingBottom(i, node) {
              return (i === 0 || i === 1) ? 10 : 5
            },
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

    performanceTable.push([{ text: 'Task', colSpan: 2, style: 'tableHeader' }, '', { text: 'Correct', style: 'tableHeader' }, { text: 'Attempted', style: 'tableHeader' }]);
    aptitudeTasks.forEach(t => {
      const evalueeResult = this.es.evaluee.taskResults.find(task => task.taskId === t.id);
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
    const averageRangeHeight = 250;

    content.push(this.buildPageHeader('Aptitude Assessment', false));
    content.push({ text: 'Aptitude Profile', fontSize: 12, margin: [0, 20, 0, 10], tocItem: true, tocMargin: [20, 0, 0, 2.5], tocStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 }, tocNumberStyle: { color: '#0F4C81', fillColor: '#F0F0F0', fontSize: 12 } });
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
          color: '#E8E8E8',
          lineColor: '#20B2AA',
          // fillOpacity: 0.5,
          closePath: true,
          points: [{ x: 285, y: 0 }, { x: 364, y: 0 }, { x: 364, y: averageRangeHeight }, { x: 285, y: averageRangeHeight }]
        }
      ]
    });
    content.push({
      columns: [
        { width: 30, text: '' },
        {
          width: 600,
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
        { width: 30, text: '' },
      ],
      margin: [0, -averageRangeHeight - 5, 0, 0],
      pageBreak: 'after'
    });

    return content;
  }

  buildAptitudeProfileTable() {
    const aptitudeProfileTable = [];
    this.as.tally();

    aptitudeProfileTable.push([{ text: 'Aptitude', style: 'tableHeader' }, { text: 'Score', style: 'tableHeader' }, { text: '%tile', style: 'tableHeader' }, { text: 'Average Range', style: 'tableHeader', alignment: 'center' }]);

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
          type: 'polyline',
          points: [{ x: 0, y: 0 }, { x: 250, y: 0 }, { x: 250, y: 15 }, { x: 0, y: 15 }],
          color: 'white',
          //x1: 0, y1: 7,
          //x2: 250, y2: 7,
          lineWidth: 2,
          //lineColor: '#A9A9A9',
          lineColor: '#0F4C81'
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

    content.push(this.buildPageHeader('Aptitude Assessment', false));
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

    content.push(this.buildPageHeader('GOE Recommendations', true));
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

    const self = this;
    this.topInterests.forEach(function (topInterest, i) {
      const interest = interests.find(interest => interest.id === topInterest.interestId);
      if (i % 2 === 0 && i !== self.topInterests.length - 1) {
        const interest2 = interests.find(interest => interest.id === self.topInterests[i + 1].interestId);
        interestGOETable.push([
          self.buildInterestGOEStub(interest, topInterest),
          self.buildInterestGOEStub(interest2, self.topInterests[i + 1])
        ]);
      } else if (i % 2 === 0 ) {
        interestGOETable.push([
          self.buildInterestGOEStub(interest, topInterest),
          ''
        ]);
      }
    });

    return interestGOETable;
  }

  buildInterestGOEStub(interest: Interest, interestScore: InterestScore) {
    const stub = [];

    stub.push({
      stack: [
        {
          columns: [
            { svg: interest.svgLogo, width: 20, margin: [3, 0, 0, 3] },
            { text: interest.name, fontSize: 12, margin: [15, 4, 0, 0] }
          ]
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0, y1: 0,
              x2: 225, y2: 0,
              lineWidth: 1.2,
              lineColor: interest.color,
            }
          ]
        },
        { text: 'The GOE identifies this as Interest Area ' + (interestScore.interestId > 9 ? interestScore.interestId : '0' + interestScore.interestId) + '.', fontSize: 10, margin: [30, 7, 0, 3] },
        { text: this.ws.workgroups.filter(group => group.area === interestScore.interestId).length + ' Work Groups', fontSize: 10, margin: [30, 0, 0, 3] },
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
    });

    return stub;
  }

  buildJobTables() {
    const content = [];

    content.push(this.buildPageHeader('GOE Recommendations', false));

    this.topInterests.forEach(i => {
      const interest = interests.find(interest => interest.id === i.interestId);

      content.push({
        columns: [
          { svg: interest.svgLogo, width: 25, margin: [0, 33, 10, 0] },
          { text: 'Interest Area ' + (i.interestId > 9 ? i.interestId : '0' + i.interestId) + ' - ' + interest.name, fontSize: 12, margin: [5, 40, 0, 10], width: 'auto' },
        ]
      });
      content.push({
        canvas: [
          {
            type: 'line',
            x1: -10, y1: -5,
            x2: 515, y2: -5,
            lineWidth: 1.2,
            lineColor: interest.color,
          }
        ]
      });
      content.push({ text: interest.description, margin: [0, 10, 0, 20] });
      if (i.interestId !== 12) {
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
      }
    });


    return content;
  }

  buildWorkGroupTable(workgroupArea: number) {
    const table = [];

    const workgroup = this.ws.workgroups.filter(group => group.area === workgroupArea);

    workgroup.forEach(group => {
      table.push([{ text: 'Work Group', fontSize: 8, color: '#0F4C81', colSpan: 4, style: 'cellSpacing' }, '', '', '']);
      table.push([{
        columns: [
          { svg: checkmark, width: 15, margin: [-20, 0, 0, 0] },
          { text: 'GOE ' + group.prefix, bold: true, fontSize: 12, margin: [-16, 0, 0, 0] },
          { text: ' ' + group.name, fontSize: 12, margin: [-195, 0, 0, 0] }
        ], colSpan: 4
      }]);
      // table.push([{ text: group.prefix + ' ' + group.name, fontSize: 12, colSpan: 4 }, '', '', '']);
      table.push([{ text: group.description, fontSize: 10, colSpan: 4 }, '', '', '']);
      table.push([{ text: 'Job Title', fontSize: 8, color: '#0F4C81' }, { text: 'D.O.T #', fontSize: 8, color: '#0F4C81' }, { text: 'GED Req', fontSize: 8, color: '#0F4C81' }, { text: 'SVP Req', fontSize: 8, color: '#0F4C81' }]);
      group.jobs.forEach(job => {
        table.push([{ text: job.name, fontSize: 10 }, { text: job.dotNum, fontSize: 10 }, { text: 'M' + job.mathGEDReq + ' / L' + job.languageGEDReq, fontSize: 10 }, { text: job.svp, fontSize: 10 }]);
      });
      table.push(['', '', '', '']);
      table.push(['', '', '', '']);
      table.push(['', '', '', '']);
    });

    return table;
  }

  buildJobDescriptionTables() {
    const content = [];

    this.topInterests.forEach(i => {
      const interest = interests.find(interest => interest.id === i.interestId);

      content.push({
        columns: [
          { svg: interest.svgLogo, width: 25, margin: [0, 33, 10, 0] },
          { text: 'Interest Area ' + (i.interestId > 9 ? i.interestId : '0' + i.interestId) + ' - ' + interest.name, fontSize: 12, margin: [5, 40, 0, 10], width: 'auto' },
        ]
      });
      content.push({
        canvas: [
          {
            type: 'line',
            x1: -10, y1: -5,
            x2: 515, y2: -5,
            lineWidth: 1.2,
            lineColor: interest.color,
          }
        ]
      });
      if (i.interestId !== 12) {
        content.push({
          table: {
            body: this.buildWorkGroupDescriptionTable(i.interestId)
          },
          layout: {
            defaultBorder: false
          },
          style: {
            cellSpacing: { margin: [0, 20, 0, 0] }
          }
        });
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

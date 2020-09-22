import { Component } from '@angular/core';
import { careerScopeLogoSVG, artisticIcon, scientificIcon } from '../svg';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss']
})
export class NewReportComponent {

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

    const interestInventoryTable = [
      [
        {
          columns: [
            { svg: artisticIcon, width: 50 },
            {
              margin: [5, 0],
              stack: [
                { text: 'Artistic', fontSize: 12, margin: [0, 15, 0, 15] },
                { text: 'An interest in creative expression of feeling or ideas through literary arts, visual arts, performing arts, or crafts', fontSize: 10, margin: [0, 0, 0, 10] },
                { text: 'Writer, Painter, Actor, Editor, Dancer, Singer, Graphic Designer, Set Designer', color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
        {
          columns: [
            { svg: scientificIcon, width: 50 },
            {
              margin: [5, 0],
              stack: [
                { text: 'Scientific', fontSize: 12, margin: [0, 15, 0, 15] },
                { text: 'An interest in discovering, collecting, and analyzing information about the natural world and applying scientific research', fontSize: 10, margin: [0, 0, 0, 10] },
                { text: 'Physician, Audiologist, Veterinarian, Biologist, Chemist, Speech Pathologist, Laboratory Technician', color: '#0F4C81', fontSize: 10 }
              ]
            }
          ]
        },
      ]
    ];

    const IPAGraphs = [
      [{ text: 'Interest Area', colSpan: 2, color: '#0F4C81' }, '', { text: '% Like', color: '#0F4C81' }, { text: 'IPA (XX%)', color: '#0F4C81' }],
      [{ svg: artisticIcon, width: 25 }, { text: 'Artistic', alignment: 'left' }, 71, this.buildIPAGraphLine(71, '#FF69B4')],
      [{ svg: scientificIcon, width: 25 }, { text: 'Scientific', alignment: 'left' }, 32, this.buildIPAGraphLine(32, '#90ee90')],
      ['03', { text: 'Plants/Animals', alignment: 'left' }, 0, 71],
      ['04', { text: 'Protective', alignment: 'left' }, 52, 71],
      ['05', { text: 'Mechanical', alignment: 'left' }, 24, 71],
      ['06', { text: 'Industrial', alignment: 'left' }, 71, 71],
      ['07', { text: 'Business Detail', alignment: 'left' }, 10, 71],
      ['08', { text: 'Selling', alignment: 'left' }, 91, 71],
      ['09', { text: 'Accomodating', alignment: 'left' }, 24, 71],
      ['10', { text: 'Humanitarian', alignment: 'left' }, 4, 71],
      ['11', { text: 'Influencing', alignment: 'left' }, 51, 71],
      ['12', { text: 'Physical Performing', alignment: 'left' }, 71, 71]
    ];

    const docDef = this.buildReport(tableOfContents, interestInventoryTable, IPAGraphs);
    pdfMake.createPdf(docDef).open();
  }

  buildIPAGraphLine(width: any, color: any) {
    var content = {
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
          x2: (width * 2), y2: 7,
          lineWidth: 15,
          lineColor: color,
        },
        {
          type: 'line',
          x1: 104, y1: -15,
          x2: 104, y2: 25,
          lineWidth: 1,
          lineColor: 'black'
        }
      ], alignment: 'left'
    };

    return content;
  }

  buildReport(tableOfContents: any, interestInventoryTable: any, IPAGraphs: any) {
    const docDef = {
      pageMargins: [40, 80, 40, 80],
      header: function (currentPage, pageCount) {
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
                text: 'Pg ' + currentPage.toString(),
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
      },
      footer: this.buildFooter(),
      content: [
        this.buildCover(),
        this.buildTableOfContents(tableOfContents),
        this.buildAssessmentSettings(),
        this.buildInterestInventory(interestInventoryTable),
        this.buildIndividualProfileAnalysis(IPAGraphs)
      ]
    }

    return docDef;
  }

  buildCover() {
    var content = [];
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

  buildInterestInventory(interestInventoryTable: any) {
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
        { text: 'JOB BOARD 2 PICTURE ', fontSize: 40 }
      ]
    });
    content.push({
      margin: [0, 30, 0, 0],
      table: {
        body: interestInventoryTable
      },
      layout: {
        defaultBorder: false,
      },
      pageBreak: 'after'
    });

    return content;
  }

  buildIndividualProfileAnalysis(IPAGraphs: any) {
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
        { text: 'JOB BOARD 2 PICTURE ', fontSize: 40 }
      ]
    });
    content.push({
      columns: [
        { width: '*', text: '' },
        {
          width: 'auto',
          table: {
            body:
              IPAGraphs
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
      ]
    });

    return content;
  }
}

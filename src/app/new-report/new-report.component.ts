import { Component, OnInit } from '@angular/core';
import { careerScopeLogoSVG } from '../svg';

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

    const docDef = this.buildReport(tableOfContents);
    pdfMake.createPdf(docDef).open();
  }

  buildReport(tableOfContents: any) {
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
      footer: [
        this.buildFooter(),
        {
          canvas: [
            {
              type: 'line',
              x1: -40, y1: 6,
              x2: 400, y2: 6,
              lineWidth: 3,
              lineColor: '#0F4C81',
            },
          ]
        }],
      content: [
        this.buildCover(),
        this.buildTableOfContents(tableOfContents),
        this.buildAssessmentSettings()
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
      columns: [
        {
          width: 'auto',
          svg: careerScopeLogoSVG,
          fit: [100, 100],
          margin: [20, 40, 0, 0]
        }, {
          text: 'Copyright © 2020 Vocational Research Institute', alignment: 'right', margin: [15, 50], color: '#0F4C81'
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

    return content;
  }
}

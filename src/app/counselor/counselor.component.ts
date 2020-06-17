import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-counselor',
  templateUrl: './counselor.component.html',
  styleUrls: ['./counselor.component.scss']
})
export class CounselorComponent {

  generateCounselorsReport() {

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


    //const docDef = this.buildCounselorReport(interests);
    const docDef = this.buildCounselorsReport(interests);

    // The open command may need to be run from a component
    pdfMake.createPdf(docDef).open();
  }



  buildCounselorsReport(interests: any[]): any {
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
                    text: "CareerScope® Counselor's Report",
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
        this.buildInterestInventory(interests),
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
        //fontSize: 8
      }
    };
    return documentDefinition;
  }

  buildCover(): any {
    var content = [];
    content.push({ text: 'CareerScope®', margin: [0, 175, 0, 0], style: 'coverTitle' });
    content.push({ text: 'Counselor\'s Report', margin: [0, 75], style: 'coverTitle' });
    content.push({ text: 'Date of Report: 5/13/20', margin: [0, 0, 0, 30], style: 'coverText' });
    content.push({ text: 'Jackson McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Jackson.McIntyre', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Interest Administration: 5/13/20', margin: [0, 0, 0, 10], style: 'coverText' });
    content.push({ text: 'Date of Aptitude Administration: 5/13/20', margin: [0, 0, 0, 20], style: 'coverText' });
    content.push({ text: 'Copyright © 2020 Vocational Research Institute', alignment: 'center', fontSize: 10, pageBreak: 'after' });

    return content;
  }

  buildInterestInventory(interests: any[]): any {
    var content = [];
    content.push({ text: 'Interest Inventory Scores', style: 'subheader', margin: [0, 5], alignment: 'center' });
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

    content.push({ text: 'Scores Based Upon Adult Standards', style: 'subtext', alignment: 'center' });

    return content;
  }


}

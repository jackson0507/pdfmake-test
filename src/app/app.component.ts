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
      [{ text: 'Interest Area', colSpan: 2 }, '', 'Like', '?', 'Dislike', 'Total', 'Male', 'Female', 'Like', 'IPA'],
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
    const docDef = this.buildInterestInventory(interests);

    // The open command may need to be run from a component
    pdfMake.createPdf(docDef).open();

  }

  buildInterestInventory(interests: any[]): any {
    const documentDefinition = {
      content: [
        { text: 'Interest Inventory', style: 'header' },
        'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy.'
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

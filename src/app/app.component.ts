import { Component } from '@angular/core';
import { InterestsData, InterestsGraphData, PerformanceData, AptitudeData, RecData1, RecData2 } from './hardcodedData'

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

    const docDef = this.buildAssesmentProfile(InterestsData, InterestsGraphData, PerformanceData, AptitudeData, RecData1, RecData2);
    pdfMake.createPdf(docDef).open();

  }
  

  // main function, builds entire pdf

  buildAssesmentProfile(interests: any[], interestsGraph: any[], resultNums: any[], aptitudeResults: any[], leadingJobs: any[], leadingJobs2: any[]): any {
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
                    text: "CareerScope® Assessment Profile",
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
        { text: 'INTEREST INVENTORY', style: 'header', alignment: 'center' },
        { text: 'Occupations have been divided into twelve large groups, called Interest Areas, based upon the kind of activities workers perform. The CareerScope Interest Inventory includes a list of work activities from the twelve Interest Areas. This report examines your responses to the interest inventory items to help you choose the kind of work you will most enjoy.', margin: [0, 10] },
        this.buildInterestAreas(interests),
        this.buildIndividualProfileAnalysis(interestsGraph),
        { text: 'APTITUDE ASSESMENT', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildPerformanceOnTasks(resultNums),
        this.buildAptitudeProfile(aptitudeResults),
        { text: 'RECOMMENDATIONS', style: 'header', alignment: 'center', pageBreak: 'before' },
        this.buildRecommendations(leadingJobs, leadingJobs2)
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
      style: 'tableExample',
      table: {
        widths: ['auto', 'auto', 'auto', 200],
        body:
          aptitudeResults
      },
      //layout: 'lightHorizontalLines'
    });
    content.push({ text: '--- Score can not be calculated', style: 'subtext' });
    content.push({ text: '•Your aptitude profile may include Motor Coordination, Finger Dexterity and Manual Dexterity scores. The sources of these scores are listed below. If “Counselor” is listed as the source of information, an assumption has been made regarding the score. If “None” is listed as the source, the performance factor will not be considered when making Work Group recommendations. Motor Coordination: Counselor; Finger Dexterity: Counselor; Manual Dexterity: Counselor', style: 'subtext' });


    return content;
  }

  buildRecommendations(leadingJobs: any[], leadingJobs2: any[]): any {
    var content = [];
    content.push('Occupations have been divided into twelve Interest Areas as described in the Guide for Occupational Exploration (GOE) and elsewhere. The Guide for Occupational Exploration further subdivides the Interest Areas into Work Groups, based upon aptitude score requirements. Occupations that belong to the same Work Group require similar interests and similar aptitudes.');
    content.push('\nReported below are career directions that match your aptitudes as well as your 3 strongest interest areas. When you see a • symbol next to a GOE Work Group number and name it means you can be more confident that your aptitude scores qualify you for that Work Group. Review your CareerScope recommendations and score results with a career guidance and counseling professional to learn about the Work Groups that best match your assessment results.');
    content.push({ text: 'INTEREST AREA 11 - LEADING/INFLUENCING', style: 'subheader' });
    content.push({ text: 'An interest in leading and influencing others by using high-level verbal or numerical abilities' });

    //list
    content.push({
      ul: [
        [{ text: 'GOE 11.01 Mathematics & Statistics', decoration: 'underline', margin: [0, 10] },
        { text: 'Workers in this group use advanced math and statistics to solve problems and conduct research. They analyze and interpret numerical data for planning and decision making. Some of these workers may first study and then determine how computers may best be used to solve problems or process information.' },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              style: 'tableExample',
              table: {
                body:
                  leadingJobs
              },
              layout: 'lightHorizontalLines'
            },
            { width: '*', text: '' },
          ]
        }
        ],
        [{ text: 'GOE 11.02 Educational & Library Svcs', decoration: 'underline', margin: [0, 10] },
        { text: 'Workers in this group do general and specialized teaching, vocational training, advising in agriculture and home economics, and library work of various kinds.' },
        {
          columns: [
            { width: '*', text: '' },
            {
              width: 'auto',
              style: 'tableExample',
              table: {
                body:
                  leadingJobs2
              },
              layout: 'lightHorizontalLines'
            },
            { width: '*', text: '' },
          ]
        }
        ]
      ]
    })
    return content;
  }
}

import { Injectable } from '@angular/core';
import { Aptitude, AptitudeTask } from './aptitudes.model';
import { aptitudes, aptitudeTasks } from './populateAptitudes';
import { EvalueeService } from './evaluee.service';


@Injectable({
  providedIn: 'root'
})
export class AptitudeService {
  aptitudes: Aptitude[] = [];
  aptitudeTasks: AptitudeTask[] = [];
  percentileMatrix: [number, number][] = [];
  tasksComplete = 0;
  quizInProgress: boolean = false;

  constructor(private es: EvalueeService) {
    this.aptitudes = aptitudes;
    this.aptitudeTasks = aptitudeTasks;
    this.populatePercentiles();
    es.loadEvalueePortal('1001269');
  }


  tally() {

    this.aptitudes.forEach(a => {
      a.score = 0;
      a.scoreComponents = '';
    });

    const generalAptitude = this.aptitudes.find(a => a.type === 'General');

    this.aptitudeTasks.forEach(task => {
      const total = this.es.evalueePortal.taskResults.find(t => t.taskId === task.id).correct;
      const score = task.scoringMatrix[total] ? task.scoringMatrix[total][1] : 0;
      if (task.generalScoringMatrix) {
        const gaScore = task.generalScoringMatrix[total][1];
        generalAptitude.score += gaScore;
        generalAptitude.scoreComponents += total + '/' + gaScore + ' ';
      }
      const aptitude = this.aptitudes.find(a => a.type === task.aptitude);
      aptitude.score += score;
      aptitude.scoreComponents += total + '/' + score + ' ';
    });

    this.aptitudes.forEach(a => {
      a.percentile = this.percentileMatrix[a.score][1];
    });


  }

  private populatePercentiles() {
    // tslint:disable-next-line: max-line-length
    this.percentileMatrix = [[1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1], [20, 1], [21, 1], [22, 1], [23, 1], [24, 1], [25, 1], [26, 1], [27, 1], [28, 1], [29, 1], [30, 1], [31, 1], [32, 1], [33, 1], [34, 1], [35, 1], [36, 1], [37, 1], [38, 1], [39, 1], [40, 1], [41, 1], [42, 1], [43, 1], [44, 1], [45, 1], [46, 1], [47, 1], [48, 1], [49, 1], [50, 1], [51, 1], [52, 1], [53, 1], [54, 1], [55, 1], [56, 1], [57, 2], [58, 2], [59, 2], [60, 2], [61, 3], [62, 3], [63, 3], [64, 4], [65, 4], [66, 4], [67, 5], [68, 5], [69, 6], [70, 7], [71, 7], [72, 8], [73, 9], [74, 10], [75, 11], [76, 12], [77, 13], [78, 14], [79, 15], [80, 16], [81, 17], [82, 18], [83, 20], [84, 21], [85, 23], [86, 24], [87, 26], [88, 27], [89, 29], [90, 31], [91, 33], [92, 34], [93, 36], [94, 38], [95, 40], [96, 42], [97, 44], [98, 46], [99, 48], [100, 50], [101, 52], [102, 54], [103, 56], [104, 58], [105, 60], [106, 62], [107, 64], [108, 66], [109, 67], [110, 69], [111, 71], [112, 73], [113, 74], [114, 76], [115, 77], [116, 79], [117, 80], [118, 82], [119, 83], [120, 84], [121, 85], [122, 86], [123, 87], [124, 88], [125, 89], [126, 90], [127, 91], [128, 92], [129, 93], [130, 93], [131, 94], [132, 95], [133, 95], [134, 96], [135, 96], [136, 96], [137, 97], [138, 97], [139, 97], [140, 98], [141, 98], [142, 98], [143, 98], [144, 99], [145, 99], [146, 99], [147, 99], [148, 99], [149, 99], [150, 99], [151, 99], [152, 99], [153, 99], [154, 99], [155, 99], [156, 99], [157, 99], [158, 99], [159, 99], [160, 99], [161, 99], [162, 99], [163, 99], [164, 99], [165, 99], [166, 99], [167, 99], [168, 99], [169, 99], [170, 99], [171, 99], [172, 99], [173, 99], [174, 99], [175, 99], [176, 99], [177, 99], [178, 99], [179, 99], [180, 99], [181, 99], [182, 99], [183, 99], [184, 99], [185, 99], [186, 99], [187, 99], [188, 99], [189, 99], [190, 99], [191, 99], [192, 99], [193, 99], [194, 99], [195, 99], [196, 99], [197, 99], [198, 99], [199, 99], [200, 99], [201, 99], [202, 99], [203, 99], [204, 99], [205, 99], [206, 99], [207, 99], [208, 99], [209, 99], [210, 99], [211, 99], [212, 99]];
  }

}

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
  quizInProgress = false;

  constructor(private es: EvalueeService) {
    this.aptitudes = aptitudes;
    this.aptitudeTasks = aptitudeTasks;
  }
}

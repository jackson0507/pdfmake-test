import { Injectable } from '@angular/core';
import { WorkGroup, Job } from './workgroups.model';
import { workgroups, cutScoreJSON, jobsJSON } from './populateWorkgroups';

@Injectable({
  providedIn: 'root'
})
export class WorkgroupsService {
  workgroups: WorkGroup[] = [];
  constructor() {
    this.workgroups = workgroups;
    this.populateAptitudeMinimums();
    this.populateJobs();
  }

  
  // These would be stored in the document with the workgroup once we persist the data
  populateAptitudeMinimums() {
    this.workgroups.forEach(workgroup => {
      const cutScores = cutScoreJSON.filter(cs => cs.workgroup_id === workgroup.id);
      cutScores.forEach(cs => {
        workgroup.aptitudeMinimums.push({ aptitudeAcronym: cs.acronym, score: cs.score });
      });
    });
  }
  

  populateJobs() {
    this.workgroups.forEach(workgroup => {
      const jobs = jobsJSON.filter(job => job.workgroup_id === workgroup.id);
      jobs.forEach(job => {
        const newJob: Job = {
          name: job.name,
          dotNum: job.dotnum,
          mathGEDReq: Number(job.m),
          languageGEDReq: Number(job.l),
          svp: Number(job.svp),
          wgCheck: job.wgcheck
        };
        workgroup.jobs.push(newJob);
      });
    });
  }


}

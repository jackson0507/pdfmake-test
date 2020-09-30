import { TestBed } from '@angular/core/testing';

import { WorkgroupsService } from './workgroups.service';

describe('WorkgroupsService', () => {
  let service: WorkgroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkgroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

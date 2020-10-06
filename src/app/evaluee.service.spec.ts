import { TestBed } from '@angular/core/testing';

import { EvalueeService } from './evaluee.service';

describe('EvalueeService', () => {
  let service: EvalueeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvalueeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

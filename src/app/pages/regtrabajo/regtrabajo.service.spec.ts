import { TestBed, inject } from '@angular/core/testing';

import { RegtrabajoService } from './regtrabajo.service';

describe('RegtrabajoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegtrabajoService]
    });
  });

  it('should be created', inject([RegtrabajoService], (service: RegtrabajoService) => {
    expect(service).toBeTruthy();
  }));
});

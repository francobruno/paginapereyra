import { TestBed, inject } from '@angular/core/testing';

import { RegnosotrosService } from './regnosotros.service';

describe('RegnosotrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegnosotrosService]
    });
  });

  it('should be created', inject([RegnosotrosService], (service: RegnosotrosService) => {
    expect(service).toBeTruthy();
  }));
});

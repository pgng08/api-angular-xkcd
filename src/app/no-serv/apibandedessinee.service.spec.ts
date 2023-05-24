import { TestBed } from '@angular/core/testing';

import { ApiBandeDessinee } from './apibandedessinee.service';

describe('ApiBandeDessinee', () => {
  let service: ApiBandeDessinee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBandeDessinee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

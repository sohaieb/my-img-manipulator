import { TestBed } from '@angular/core/testing';

import { MyImgManipulatorService } from './my-img-manipulator.service';

describe('MyImgManipulatorService', () => {
  let service: MyImgManipulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyImgManipulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

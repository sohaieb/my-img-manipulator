import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgManipulatorComponent } from './my-img-manipulator.component';

describe('MyImgManipulatorComponent', () => {
  let component: MyImgManipulatorComponent;
  let fixture: ComponentFixture<MyImgManipulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImgManipulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImgManipulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

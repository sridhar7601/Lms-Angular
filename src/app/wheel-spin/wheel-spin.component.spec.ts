import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSpinComponent } from './wheel-spin.component';

describe('WheelSpinComponent', () => {
  let component: WheelSpinComponent;
  let fixture: ComponentFixture<WheelSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelSpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

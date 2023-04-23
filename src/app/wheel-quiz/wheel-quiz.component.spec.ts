import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelQuizComponent } from './wheel-quiz.component';

describe('WheelQuizComponent', () => {
  let component: WheelQuizComponent;
  let fixture: ComponentFixture<WheelQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

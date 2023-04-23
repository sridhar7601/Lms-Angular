import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizComponentComponent } from './quiz-component.component';

describe('QuizComponentComponent', () => {
  let component: QuizComponentComponent;
  let fixture: ComponentFixture<QuizComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

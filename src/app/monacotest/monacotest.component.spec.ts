import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacotestComponent } from './monacotest.component';

describe('MonacotestComponent', () => {
  let component: MonacotestComponent;
  let fixture: ComponentFixture<MonacotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonacotestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonacotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

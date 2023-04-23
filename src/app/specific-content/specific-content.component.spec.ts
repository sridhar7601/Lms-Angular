import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificContentComponent } from './specific-content.component';

describe('SpecificContentComponent', () => {
  let component: SpecificContentComponent;
  let fixture: ComponentFixture<SpecificContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

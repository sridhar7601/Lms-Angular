import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcomplierComponent } from './htmlcomplier.component';

describe('HtmlcomplierComponent', () => {
  let component: HtmlcomplierComponent;
  let fixture: ComponentFixture<HtmlcomplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlcomplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlcomplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

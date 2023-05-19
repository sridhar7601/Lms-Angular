import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadminjsonComponent } from './testadminjson.component';

describe('TestadminjsonComponent', () => {
  let component: TestadminjsonComponent;
  let fixture: ComponentFixture<TestadminjsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestadminjsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestadminjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

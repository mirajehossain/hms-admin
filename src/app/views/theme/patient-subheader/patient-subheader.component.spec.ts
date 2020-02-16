import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSubheaderComponent } from './patient-subheader.component';

describe('PatientSubheaderComponent', () => {
  let component: PatientSubheaderComponent;
  let fixture: ComponentFixture<PatientSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

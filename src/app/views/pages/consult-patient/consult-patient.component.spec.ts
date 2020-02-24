import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPatientComponent } from './consult-patient.component';

describe('ConsultPatientComponent', () => {
  let component: ConsultPatientComponent;
  let fixture: ComponentFixture<ConsultPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

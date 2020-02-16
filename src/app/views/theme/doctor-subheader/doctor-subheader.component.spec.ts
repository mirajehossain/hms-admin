import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSubheaderComponent } from './doctor-subheader.component';

describe('DoctorSubheaderComponent', () => {
  let component: DoctorSubheaderComponent;
  let fixture: ComponentFixture<DoctorSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

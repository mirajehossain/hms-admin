import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankSubheaderComponent } from './blood-bank-subheader.component';

describe('BloodBankSubheaderComponent', () => {
  let component: BloodBankSubheaderComponent;
  let fixture: ComponentFixture<BloodBankSubheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankSubheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

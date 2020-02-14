import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDialogComponent } from './fetch-dialog.component';

describe('FetchDialogComponent', () => {
  let component: FetchDialogComponent;
  let fixture: ComponentFixture<FetchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

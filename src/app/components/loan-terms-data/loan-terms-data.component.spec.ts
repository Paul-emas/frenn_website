import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTermsDataComponent } from './loan-terms-data.component';

describe('LoanTermsDataComponent', () => {
  let component: LoanTermsDataComponent;
  let fixture: ComponentFixture<LoanTermsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTermsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTermsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

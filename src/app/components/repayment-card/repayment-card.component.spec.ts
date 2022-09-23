import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepaymentCardComponent } from './repayment-card.component';

describe('RepaymentCardComponent', () => {
  let component: RepaymentCardComponent;
  let fixture: ComponentFixture<RepaymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepaymentCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepaymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

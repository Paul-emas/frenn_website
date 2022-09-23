import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPayinbitsComponent } from './terms-payinbits.component';

describe('TermsPayinbitsComponent', () => {
  let component: TermsPayinbitsComponent;
  let fixture: ComponentFixture<TermsPayinbitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsPayinbitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsPayinbitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

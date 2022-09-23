import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsPayinbitsDataComponent } from './terms-payinbits-data.component';

describe('TermsPayinbitsDataComponent', () => {
  let component: TermsPayinbitsDataComponent;
  let fixture: ComponentFixture<TermsPayinbitsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsPayinbitsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsPayinbitsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

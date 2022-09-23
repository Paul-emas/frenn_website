import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-payinbits',
  templateUrl: './terms-payinbits.component.html',
  styleUrls: ['./terms-payinbits.component.scss'],
})
export class TermsPayinbitsComponent implements OnInit {
  public selectedIndex = 0;
  public data: any = [
    { id: 'intro', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions and Interpretation' },
    { id: 'eligibility ', title: 'Eligibility ' },
    { id: 'apply', title: 'Applying for Frenn BNPL' },
    { id: 'accept', title: 'Acceptable use restrictions' },
    { id: 'approve', title: 'Approving your Frenn BNPL application' },
    // { id: 'variation', title: 'variation and termination' },
    // { id: 'exclusion', title: 'exclusion of liability' },
    // { id: 'indemnity', title: 'indemnity' },
    // {
    //   id: 'money',
    //   title: 'anti-money laundering and counter financing of terrorism',
    // },
    // { id: 'taxes', title: 'taxes' },
    // { id: 'general', title: 'general' },
    // { id: 'law', title: 'governing law ad dispute resolution' },
    // { id: 'privacy', title: 'privacy policy' },
  ];

  ngOnInit(): void {
    this.selectedIndex = this.data[0]?.title;
  }
}

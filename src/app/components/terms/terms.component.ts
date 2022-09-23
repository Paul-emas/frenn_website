import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css'],
})
export class TermsComponent implements OnInit {
  public selectedIndex = 0;
  public openMenu = false;
  public data: any = [
    { id: 'intro', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions and Interpretation' },
    { id: 'grant', title: 'Grant and scope of license' },
    { id: 'restrictions', title: 'Restrictions on the use of the license' },
    { id: 'accept', title: 'Acceptable use restrictions' },
    { id: 'personal', title: 'Personal information' },
    { id: 'account', title: 'Your account' },
    { id: 'request', title: 'Service requests' },
    { id: 'responsibility', title: 'user’s responsibilities' },
    { id: 'variation', title: 'Variation and termination' },
    {
      id: 'limit',
      title: 'limitations on liability and disclaimers of warranties',
    },
    { id: 'indemnity', title: 'indemnity' },
    {
      id: 'money',
      title: 'anti-money laundering and counter financing of terrorism',
    },
    { id: 'communication', title: 'communication between us' },
    { id: 'taxes', title: 'taxes' },
    { id: 'general', title: 'general' },
    { id: 'law', title: 'governing law ad dispute resolution' },
    { id: 'privacy', title: 'privacy policy' },
  ];

  ngOnInit(): void {
    this.selectedIndex = this.data[0]?.title;
  }
}

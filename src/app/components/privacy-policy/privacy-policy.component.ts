import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  public selectedIndex = 0;
  public openMenu = false;
  public data: any = [
    { id: 'intro', title: 'Introduction' },
    { id: 'scope', title: 'Scope of Policy' },
    { id: 'data', title: 'Data we collect from you' },
    { id: 'tracking', title: 'Tracking and cookies' },
    { id: 'utilities', title: 'Data utilities' },
    { id: 'access', title: 'Consent and access rights' },
    { id: 'subject', title: `Data subject's rights` },
    { id: 'personal', title: 'Personal data protection principle' },
    { id: 'party', title: 'Third Party Access' },
    { id: 'responsibility', title: 'user’s responsibilities' },
    { id: 'disclosure', title: 'disclosure of your information' },
    {
      id: 'store',
      title: 'where we store/transfer your data',
    },
    { id: 'security', title: 'Data security' },
    {
      id: 'links',
      title: 'Links to third party sites',
    },
    { id: 'rights', title: 'your rights' },
    { id: 'access2', title: 'Access' },
    { id: 'privacy', title: 'violation of privacy policy' },
    { id: 'retention', title: 'Data Retention' },
    { id: 'changes', title: 'Changes To Privacy Policy' },
  ];

  ngOnInit(): void {
    this.selectedIndex = this.data[0]?.title;
  }
}

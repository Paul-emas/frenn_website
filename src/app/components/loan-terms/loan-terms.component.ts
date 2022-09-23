import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-terms',
  templateUrl: './loan-terms.component.html',
  styleUrls: ['./loan-terms.component.scss'],
})
export class LoanTermsComponent implements OnInit {
  public selectedIndex = 0;
  public openMenu = false;
  public data: any = [
    { id: 'intro', title: 'Frenn credit line / loan terms' },
    { id: 'credit', title: 'Credit Line Access' },
    { id: 'evaluation', title: 'Credit Line Evaluation' },
    { id: 'utilisation', title: 'Credit Line Utilisation' },
    { id: 'servicing', title: 'Loan servicing' },
    { id: 'bureaus', title: 'Credit Reference Bureaus' },
    { id: 'bank', title: 'Bank Statements' },
    { id: 'rights', title: 'Rights and obligation as a borrower' },
    { id: 'fees', title: 'Interest and fees' },
    { id: 'loan', title: 'Default on loan' },
  ];

  ngOnInit(): void {
    this.selectedIndex = this.data[0]?.title;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repayment-schedule',
  templateUrl: './repayment-schedule.component.html',
  styleUrls: ['./repayment-schedule.component.scss'],
})
export class RepaymentScheduleComponent implements OnInit {
  constructor() {}
  openModal: boolean = false;

  closeModal(value: boolean): void {}

  ngOnInit(): void {}
}

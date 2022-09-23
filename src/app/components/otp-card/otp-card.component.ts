import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-card',
  templateUrl: './otp-card.component.html',
  styleUrls: ['./otp-card.component.scss'],
})
export class OtpCardComponent {
  constructor(private router: Router) {}

  close: boolean = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.newItemEvent.emit(value);
  }

  onCodeChanged(code: string) {}

  onCodeCompleted(code: string) {
    this.router.navigate(['repayment/schedule']);
  }
}

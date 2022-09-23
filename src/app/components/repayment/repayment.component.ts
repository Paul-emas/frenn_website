import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.scss'],
})
export class RepaymentComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Input() openModal: Boolean = false;
  checkoutForm = this.formBuilder.group({
    phone: '',
  });

  closeModal(value: boolean) {
    this.openModal = value;
  }

  onSubmit(): void {
    this.openModal = true;
    // console.log(this.checkoutForm.value);
  }
}

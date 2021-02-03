import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  displayMessage: string;
  expiryDate: FormGroup;
  constructor() {
    this.paymentFormInit();
  }
  paymentFormInit() {
    this.paymentForm = new FormGroup({
      "name": new FormControl("", [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      "cardNumber": new FormControl(),
      "date": this.expiryDate = new FormGroup({
        "month": new FormControl(),
        "year": new FormControl(),
      }),
      "cvv": new FormControl(),
    })
  }

message=''
  onSbumit() {
    this.message="Payment Successfull";
  }

  ngOnInit(): void {
  }
  public alphbate = /^[a-zA-Z ]/;
  keyPress(event: any) {
		if (event != undefined) {
			let inputChar = String.fromCharCode(event.charCode);
			if (!this.alphbate.test(inputChar) && inputChar != "'") {
				event.preventDefault();
			}
		}
  }
  public numeric = /^[0-9.]/;
  numbervalidation(event: any) {
		if (event != undefined) {
			let inputChar = String.fromCharCode(event.charCode);
			if (!this.numeric.test(inputChar)) {
				event.preventDefault();
			}
		}
	}
}

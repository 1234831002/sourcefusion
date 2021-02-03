import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cipher',
  templateUrl: './cipher.component.html',
  styleUrls: ['./cipher.component.css']
})
export class CipherComponent implements OnInit {

  constructor() {
    this.textFormInit();
  }
  textForm: FormGroup;
  ngOnInit(): void {
  }
  textFormInit() {
    this.textForm = new FormGroup({
      "shift": new FormControl(0),
      "plainText": new FormControl(''),
      "encryptedText": new FormControl(''),
    })
  }
  onChange() {
    // console.log(this.textForm.controls['plainText'].value);
    const x = this.textForm.controls['plainText'].value;
    let arr = x.split("");
    let shift = +this.textForm.controls['shift'].value
    let result = [];
    arr.forEach(x => {
      if (x.charCodeAt() + shift >= 65 && x.charCodeAt() + shift <= 90) {
        result.push(String.fromCharCode(x.charCodeAt() + shift))
      }
      else if (x.charCodeAt() + shift > 90 && x.charCodeAt() + shift < 97) {
        result.push(String.fromCharCode((x.charCodeAt() - 26) + shift))
      }
      else if (x.charCodeAt() + shift >= 97 && x.charCodeAt() + shift <= 122) {
        result.push(String.fromCharCode(x.charCodeAt() + shift))
      }
      else if (x.charCodeAt() + shift >= 123) {
        result.push(String.fromCharCode((x.charCodeAt() - 26) + shift))
      }
    })
    this.textForm.controls['encryptedText'].setValue(result.join(""));
    //return result.join("");


  }
}

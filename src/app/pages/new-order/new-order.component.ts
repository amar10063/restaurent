import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  newOrderForm: FormGroup;
  constructor() { }
  public show: boolean = true;
  public hide: boolean = false;
  newForm() {
    this.show = false;
    this.hide = true;
  }
  backForm() {
    this.show = true;
    this.hide = false;
  }
  ngOnInit() {
    this.newOrderForm = new FormGroup({
      'CustomerName': new FormControl(null, [Validators.required, Validators.email]),
      'CustomerMobile': new FormControl(null, Validators.required),
      'addItem': new FormArray([
        new FormControl(null, Validators.required),
        new FormControl(null, Validators.required)
      ]),
    });
  }
  addItem() {
    (<FormArray>this.newOrderForm.get('addItem')).push(new FormControl(null, Validators.required));
  }
}

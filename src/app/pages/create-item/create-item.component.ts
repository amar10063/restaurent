import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createItemForm: FormGroup;
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
    this.createItemForm = new FormGroup({
      'itemName': new FormControl(null, Validators.required),
      'itemCode': new FormControl(null, Validators.required),
      'itemPrice': new FormControl(null, Validators.required),
      'ItemDescription': new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.createItemForm.value);
  }
}

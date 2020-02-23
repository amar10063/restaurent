import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PagesDataService } from 'src/app/pages-data.service';
import { Items } from './items';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  createItemForm: FormGroup;
  massage: string;
  item: Items;
  aa: any;
  constructor(private pagesDataService: PagesDataService) { }
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
      'Price': new FormControl(null, Validators.required),
      'Description': new FormControl(null, Validators.required),
      'Flag': new FormControl('5'),
    });
  }
  onSubmit() {
    const item = this.createItemForm.value;
    console.log(this.createItemForm.value);
    this.createItem(item);
  }
  createItem(item: any) {
    this.pagesDataService.createItem(item).subscribe(
      (data) => {
        this.massage = 'Item Created';
        alert(this.massage);
        this.item = data;
        console.log(this.item);
        alert(this.item.Status);
        this.aa = this.item.dataList;
        console.log(this.aa);
        this.createItemForm.reset();
      }
    )
  }
}

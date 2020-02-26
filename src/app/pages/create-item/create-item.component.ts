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
  aa: [];
  //updateFlag: number;
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
      'itemId': new FormControl(),
      'itemName': new FormControl(null, Validators.required),
      'itemCode': new FormControl(null, Validators.required),
      'Price': new FormControl(null, Validators.required),
      'Description': new FormControl(null, Validators.required),
      // 'Flag': new FormControl('5'),
    });
    this.allItem();
  }
  onSubmit() {
    const item = this.createItemForm.value;
    console.log(this.createItemForm.value);
    alert(item.itemCode);
    if (item.itemId == null) {
      item.Flag = '5';
      this.createItem(item);
    } else {
      item.Flag = '2';
      this.updateItem(item);
    }
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
        this.backForm();
      }
    )
  }
  allItem() {
    this.pagesDataService.getAllItem().subscribe((data) => {
      this.item = data;
      this.aa = this.item.dataList;
      console.log(this.aa);
    });
  }
  bindItem(item: any) {
    console.log(item);
    item.itemId = 1;
    //  item.Flag = '2';
    this.createItemForm.controls.itemName.setValue(item.ItemName);
    this.createItemForm.controls.itemCode.setValue(item.ItemCode);
    this.createItemForm.controls.Price.setValue(item.Price);
    this.createItemForm.controls.Description.setValue(item.Description);
    this.createItemForm.controls.itemId.setValue(item.itemId);
    //this.updateFlag = 1;
    this.newForm();
    console.log(item);
  }
  updateItem(item: any) {
    this.pagesDataService.updateItem(item).subscribe(
      (data) => {
        this.massage = 'Item updated succesfully';
        alert(this.massage);
        this.item = data;
        console.log(this.item);
        alert(this.item.Status);
        this.aa = this.item.dataList;
        console.log(this.aa);
        this.createItemForm.reset();
        this.backForm();
      }
    )
  }
  deleteItem(item: any) {
    item.Flag = '3';
    this.pagesDataService.deleteItem(item).subscribe(() => {
      this.massage = 'Record deleted succesfully';
      alert(this.massage);
      this.allItem();
    });
  }
}

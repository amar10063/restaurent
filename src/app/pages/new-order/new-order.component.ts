import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NewOrderService } from 'src/app/new-order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  newOrderForm: FormGroup;
  massage: string;
  newOrder: any;
  aa: any;
  Order: any;
  allItemss: any;
  Items: any;
  itemPrice: import("e:/angular projects/restaurent-master/restaurent/src/app/pages/new-order/new-order").NewOrder;

  constructor(private newOrderService: NewOrderService) { }
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
      'CustomerName': new FormControl(null, Validators.required),
      'Mobile': new FormControl(null, Validators.required),
      'Finaltotal': new FormControl(1200),
      'Flag': new FormControl('7'),
      'dataList': new FormArray([this.createItem()]),
    });
    this.allOrder();
    this.allItems();
  }
  createItem(): FormGroup {
    return new FormGroup({
      // 'itemName': new FormControl(null, Validators.required),
      // 'quantity': new FormControl(null, Validators.required),
      'ItemId': new FormControl(),
      'Qty': new FormControl(),
      'Peritemtotal': new FormControl(200),
    })
  }

  addItem(): void {
    (<FormArray>this.newOrderForm.get('dataList')).push(new FormGroup({
      // 'itemName': new FormControl(null, Validators.required),
      // 'quantity': new FormControl(null, Validators.required),

      'ItemId': new FormControl(),
      'Qty': new FormControl(),
      'Peritemtotal': new FormControl(200),

    }));
  }
  removeItem(i: number) {
    console.log("row No =" + i);
    (<FormArray>this.newOrderForm.get('dataList')).removeAt(i);
  }
  onSubmit() {
    const newOrder = this.newOrderForm.value;
    console.log(this.newOrderForm.value);
    //newOrder.Flag = '7';
    this.createOrder(newOrder);
  }
  createOrder(newOrder: any) {
    this.newOrderService.createNewOrder(newOrder).subscribe(
      (data) => {
        this.massage = 'Order Created';
        alert(this.massage);
        this.newOrder = data;
        console.log(this.newOrder);
        // alert(this.item.Status);
        //this.aa = this.newOrder.dataList;
        console.log(this.aa);
        this.newOrderForm.reset();
        this.allOrder();
        this.backForm();
      }
    )
  }
  allOrder() {
    this.newOrderService.getAllOrder().subscribe((data) => {
      this.Order = data;
      this.aa = this.Order.dataList;
      console.log(this.aa);
    });
  }
  allItems() {
    this.newOrderService.getAllItems().subscribe((data) => {
      this.allItemss = data;
      this.Items = this.allItemss.AllItem;
      console.log(this.Items);
    });
  }
  onChange(ItemId) {
    alert(ItemId);
    this.getItemPrice(ItemId);
  }

  getItemPrice(Itemid: any) {
    //Itemid.Flag = '12';
    console.log(Itemid);
    this.newOrderService.getItemPrice(Itemid).subscribe((data) => {
      this.itemPrice = data;
      console.log(this.itemPrice);
      this.massage = 'price geted succesfully';
      alert(this.massage);

    });
  }
  deleteOrder(order: any) {
    order.Flag = '9';
    console.log(order);
    this.newOrderService.deleteOrder(order).subscribe(() => {
      this.massage = 'Order deleted succesfully';
      alert(this.massage);
      this.allOrder();
    });
  }
}

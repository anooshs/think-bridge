import { Component, OnInit, TemplateRef } from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // TemplateRef<any>;

    options = {checkboxes:true}
    data = [];
    columns: any = [];
  constructor() { }
  products: Product[] = [];
  ngOnInit() {
    this.products = [...PRODUCTS].map((product, index) => {
      product.id = index + 1;
      return product;
    });
    this.columns = [
      { prop: 'id', name: 'ID', sorting: true },
      { prop: 'name', name: 'Name'},
      { prop: 'description', name: 'Description'},
      { prop: 'color', name: 'Color'},
      { prop: 'price', name: 'Price'},
    ];
  }
  onCheckboxClick(selectCheckBoxArr: any) { 
    alert(JSON.stringify(selectCheckBoxArr));
  }
  onCheckboxChangeFn(event: any){
    alert(event);
  }
}

export const PRODUCTS: Product[] = [
  {
    "name": "Cap",
    "price": 5,
    "description": "Rounded Bean Cap For Men",
    "color": "Black"
  },
  {
    "name": "HandBag",
    "price": 30,
    "description": "Stylished handbag For Women",
    "color": "Pink"
  },
  {
    "name": "Shirt",
    "price": 35,
    "description": "Checked shirt for Men",
    "color": "Red and Black"
  },
  {
    "name": "Shoe",
    "price": 50,
    "description": "Formal Shoes for Men",
    "color": "Black"
  },
  {
    "name": "Jeans",
    "price": 35,
    "description": "Stylished Skinny Jeans for Men",
    "color": "Blue"
  },
  {
    "name": "Slipper",
    "price": 25,
    "description": "Comfortable Slippers for Women",
    "color": "white and Rose Colors"
  }
];

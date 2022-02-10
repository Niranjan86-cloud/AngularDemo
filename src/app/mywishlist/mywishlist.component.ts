import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.component.html',
  styleUrls: ['./mywishlist.component.css']
})
export class MywishlistComponent {

  dataList: Array<any> = [];

  constructor() {

    this.dataList = [
      { code: 1, name: "Low to High" },
      { code: 2, name: "High to Low" },
    ]

   }



}

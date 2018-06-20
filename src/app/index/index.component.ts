import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/service/api.service';
import { ShoppingItem } from 'app/model/shoppingItem';
import * as _  from 'lodash';

@Component({
 
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private shoppingItemArr: ShoppingItem[];

  constructor(private appService:AppService) { }

  ngOnInit() {
    this.shoppingItemArr = [];
  	this.getShoppingItems();

  }

  getShoppingItems(){
    
  	this.appService.getShoppingList().subscribe(data => {
					  let tempArr = [];
            _.mapValues(data.shoppingitem, function(o) {

              let temp = new ShoppingItem(o.id,o.itemname,o.imageUrl,o.description,o.price,o.created_at);
              console.log(o);
              console.log(temp);
              tempArr.push(temp);
              
            });
            this.shoppingItemArr = tempArr; 
				},
				err =>{

				});
  }

}

import { Injectable } from '@angular/core';


@Injectable()
export class ShoppingItem {
	private _itemId :Number;
	private _itemName:String;
	private _imageurl:String;
	private _description:String;
	private _price:Number;
	private _created_at:String;
	
	constructor(private itemId:Number, private itemName:String, private imageurl: String, private description:String,
	 			private price:Number, create_at:String) { }

	get itemId(): Number{
	 	return this._itemId;
	}
	set itemId(thatItemId : Number){
		this._itemId = thatItemId;
	}

	get imageurl(): String{
	 	return this._imageurl;
	}
	set imageurl(thatImageurl : String) {
		this._imageurl = thatImageurl;
	}
	get itemName(): String{
	 	return this._itemName;
	}
	set itemName(thatName : String) {
		this._itemName = thatName;
	}

	get description(): String{
	 	return this._description;
	}
	set description(thatDescription : String) {
		this._description = thatDescription;
	}

	get price(): Number{
	 	return this._price;
	}
	set price(thatPrice : Number) {
		this._price = thatPrice;
	}

	get created_at(): String{
	 	return this._created_at;
	}
	set created_at(thatCreated_at : String) {
		
		._created_at = thatCreated_at;
	}
}
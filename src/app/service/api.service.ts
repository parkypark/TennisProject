import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
	
	 
     // private instance variable to hold base url
    private getShippingListUrl = 'http://localhost:3000/api/comments';
    private commentsUrl = 'http://localhost:3000/api/comments'; 
    private  baseURL = "http://127.0.0.1:8000/api/version1";
	// Resolve HTTP using the constructor
    constructor (private http: HttpClient) {}


	getShoppingList():Observable<any> {
		return this.http.get(`${this.baseURL}/get-shopping-items`);
	}
}
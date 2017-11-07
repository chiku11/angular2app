import { Injectable } from "@angular/core";
import { IProduct } from "../products/products";
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService {

    productsUrl: string = '';

    constructor(private _http: HttpClient) {
        this.productsUrl = './api/products/products.json'
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productsUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse): Observable<IProduct[]>{
    return Observable.throw(err.message);
    }
}
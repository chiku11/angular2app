import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from '../shared/proudct.service';

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html'
})
export class ProductsComponent implements OnInit {
    pageTitle: String = 'Product List';
    width: Number = 50
    margin: Number = 2
    showImage: boolean = false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [];

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    onRatingClicked(msg:string):void {
        this.pageTitle = 'Product List: ' + msg;
    }
    constructor(private _productService:ProductService) {
       
    }

    ngOnInit() {
        this.products = this._productService.getProducts();
        console.log(this.products);
        this.filteredProducts = this.products;
        this.listFilter = 'cart'
    }

}

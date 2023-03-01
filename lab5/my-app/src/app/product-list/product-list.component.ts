// import { Component } from '@angular/core';
// import { categories } from '../categories';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';


import { Product, products } from '../products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie, categories } from '../categories';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  // products = products;
  products = [...products];
  categories = categories;
  product: Product | undefined;
  categorie: Categorie | undefined;
  constructor(
    private route: ActivatedRoute,
    // private cartService: CartService
    ) { }
  categorieId: number = 0;
  share() {
    // window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(){
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categorieIdFromRoute = Number(routeParams.get('categorieId'));

    // Find the product that correspond with the id provided in route.
    // this.categorie = categories.find(categorie => categorie.id === categorieIdFromRoute);
    this.categorieId = categorieIdFromRoute;
  }

  deleteItem(product: Product){
    product.show = false;
  }
  
  // ngOnInit(){
  //   // First get the product id from the current route.
  //   const routeParams = this.route.snapshot.paramMap;
  //   const catIdFromRoute = Number(routeParams.get('productcatId'));

  //   // Find the product that correspond with the id provided in route.
  //   this.product = products.find(product => product.catId === catIdFromRoute);
  // }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

import { NgImageSliderModule } from 'ng-image-slider';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})


export class ProductDetailsComponent {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { } 

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  // imgCollection: Array<object> = [    
  //     {
  //       image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
  //       thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
  //     }, 
  //     {
  //       image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h7e/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg',
  //       thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h7e/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg',
  //     }, 
  //     {
  //       image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg',
  //       thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg',
  //     }
  // ];

  // imgCollection: Array<object> = [    
  //   {
  //     image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
  //     thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
  //   }, 
  //   {
  //     image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h7e/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg',
  //     thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h27/h7e/46392662720542/apple-iphone-13-128gb-cernyj-102298404-2-Container.jpg',
  //   }, 
  //   {
  //     image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg',
  //     thumbImage: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6f/h37/46392664031262/apple-iphone-13-128gb-cernyj-102298404-4-Container.jpg',
  //   }
  // ];

  // imgCollection: Array<object> = [    
  //   {
  //     image: 'product.pic2',
  //     thumbImage: 'product.pic2',
  //     title: 'Hummingbirds are amazing creatures'
  //   }, 
  //   {
  //     image: 'product.pic3',
  //     thumbImage: 'product.pic3',
  //     title: 'Hummingbirds are amazing creatures'
  //   }, 
  //   {
  //     image: 'product.pic4',
  //     thumbImage: 'product.pic4',
  //     title: 'Hummingbirds are amazing creatures'
  //   }
  // ];

}



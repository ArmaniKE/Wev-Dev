// import { Component } from '@angular/core';
// import { categories } from '../categories';
// import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { Component, OnInit } from '@angular/core';
import { Categorie, categories } from '../categories';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  products = products;
  categories = categories;
  product: Product | undefined;
  categorie: Categorie | undefined;
}

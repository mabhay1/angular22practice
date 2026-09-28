import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() product: ProductCardModel = {
    name: '',
    price: 0,
    category: ''
  };

}

export interface ProductCardModel{
  name: string,
  price: number,
  category: string,
}

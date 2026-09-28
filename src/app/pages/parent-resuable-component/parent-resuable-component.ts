import { Component } from '@angular/core';
import { UserCard } from '../../shared/reusableComponent/user-card/user-card';
import { BadgeCustom } from '../../shared/reusableComponent/badge-custom/badge-custom';
import { ProductCard, ProductCardModel } from '../../shared/reusableComponent/product-card/product-card';
import { Rating } from '../../shared/reusableComponent/rating/rating';
import { CustomTable } from '../../shared/reusableComponent/custom-table/custom-table';

@Component({
  imports: [UserCard, BadgeCustom, ProductCard, Rating, CustomTable],
  selector: 'app-parent-resuable-component',
  styleUrl: './parent-resuable-component.css',
  templateUrl: './parent-resuable-component.html',
})
export class ParentResuableComponent {
  product: ProductCardModel = {
    name: 'Samsung',
    price: 1200,
    category: 'Mobile'
  }
}

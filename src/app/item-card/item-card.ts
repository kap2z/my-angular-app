import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() recipe!: Recipe;
}

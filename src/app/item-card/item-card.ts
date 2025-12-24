import { Component, Input } from '@angular/core';
import { NgForOf, NgIf, NgClass } from '@angular/common';
import { Recipe } from '../shared/models/recipe.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './item-card.html',
  styleUrl: './item-card.css',
})
export class ItemCard {
  @Input() recipe!: Recipe;

  get isQuick(): boolean {
    return this.recipe.cookingTimeMinutes <= 30;
  }
}

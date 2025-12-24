import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
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

  @Output() selected = new EventEmitter<Recipe>();

  get isQuick(): boolean {
    return this.recipe.cookingTimeMinutes <= 30;
  }

  onDetailsClick(): void {
    this.selected.emit(this.recipe);
  }
}

import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../shared/models/recipe.model';
import { ItemCard } from '../item-card/item-card';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [NgForOf, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList {
  searchText = '';

  recipes: Recipe[] = [
    {
      id: 1,
      title: 'Паста карбонара',
      description: 'Класична італійська паста з беконом та сиром.',
      ingredients: ['спагеті', 'бекон', 'яйця', 'сир пармезан', 'сіль', 'перець'],
      cookingTimeMinutes: 25,
      difficulty: 'medium',
      imageUrl: 'images/recipes/carbonara.jpg',
    },
    {
      id: 2,
      title: 'Олівʼє',
      description: 'Традиційний салат до святкового столу.',
      ingredients: ['картопля', 'морква', 'яйця', 'ковбаса', 'горошок', 'майонез'],
      cookingTimeMinutes: 40,
      difficulty: 'easy',
      imageUrl: 'images/recipes/olivier.jpg',
    },
  ];

  get filteredRecipes(): Recipe[] {
    const q = this.searchText.trim().toLowerCase();
    if (!q) return this.recipes;

    return this.recipes.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q)
    );
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('Обрано рецепт:', recipe);
  }
}

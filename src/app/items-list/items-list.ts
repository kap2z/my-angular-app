import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../shared/models/recipe.model';
import { ItemCard } from '../item-card/item-card';
import { DataService } from '../shared/services/data';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [NgForOf, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit {
  searchText = '';
  recipes: Recipe[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.recipes = this.dataService.getItems();
  }

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

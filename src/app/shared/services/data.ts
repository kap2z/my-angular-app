import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly items: Recipe[] = [
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

  getItems() {
    return this.items;
  }
}

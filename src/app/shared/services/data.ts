import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';


export type Item = Recipe;

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly items: Item[] = [
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


  private readonly itemsSubject = new BehaviorSubject<Item[]>(this.items);
  readonly items$ = this.itemsSubject.asObservable();


  getItems(): Observable<Item[]> {
    return of(this.items);
  }


  filterItems(query: string): void {
    const q = query.trim().toLowerCase();

    const filtered = !q
      ? this.items
      : this.items.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q)
      );

    this.itemsSubject.next(filtered);
  }
}

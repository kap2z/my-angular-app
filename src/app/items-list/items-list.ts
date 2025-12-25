import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { ItemCard } from '../item-card/item-card';
import { DataService, Item } from '../shared/services/data'; // шлях як у тебе

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [NgForOf, FormsModule, ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.css',
})
export class ItemsList implements OnInit, OnDestroy {
  searchText = '';
  recipes: Item[] = [];

  private readonly destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {

    this.dataService.items$
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => (this.recipes = items));


    this.dataService.getItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe(items => {

        this.dataService.filterItems(this.searchText);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  onSearchChange(value: string): void {
    this.dataService.filterItems(value);
  }

  onRecipeSelected(recipe: Item) {
    console.log('Обрано рецепт:', recipe);
  }
}

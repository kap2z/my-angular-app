import { Component } from '@angular/core';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ItemsList],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  appTitle = 'Мій вебдодаток';
}

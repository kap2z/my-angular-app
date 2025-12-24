import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { ItemsList } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header, Footer, ItemsList],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  appTitle = 'Мій вебдодаток';
}

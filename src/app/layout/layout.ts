import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  appTitle = 'Мій вебдодаток';
}

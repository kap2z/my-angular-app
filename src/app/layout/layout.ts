import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,          // если этой строки нет — добавь
  imports: [],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  appTitle = 'Мій вебдодаток';  // тут напиши название своего вебдодатку
}

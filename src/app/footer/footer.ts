import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  @Input() author = 'Лисаченко Павло';
  @Input() year = new Date().getFullYear();
}

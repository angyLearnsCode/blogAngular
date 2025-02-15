import { Component, Input } from '@angular/core';
import { IBooks } from '../../interfaces/ibooks.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() booklist: IBooks[] = [];
}

import { Component, Input } from '@angular/core';
import { IBooks } from '../../interfaces/ibooks.interface';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() booklist: IBooks[] = [];
  text: string = '';

  ngOnInit() {
    this.booklist.forEach((book) => {
      this.text += `<p> El título del libro es ${book.title}`; // En el template literal meteríamos el HTML para crear cada uno de los divs con su libro maquetado.
    });
  }
}

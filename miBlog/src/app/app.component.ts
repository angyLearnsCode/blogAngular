import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { IBooks } from './interfaces/ibooks.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, PostsComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  arrBooks: IBooks[] = [
    {
      title: 'Moby Dick',
      date: '2025-02-15',
      urlPhoto: 'https://m.media-amazon.com/images/I/91xNmlf86yL._SL1500_.jpg',
      text: 'La obra explora temas como la obsesión, la naturaleza humana, la fatalidad y la lucha contra lo incontrolable. Con sus ricos símbolos y profundos reflexiones filosóficas, Moby Dick es una de las más grandes novelas de la literatura americana.',
    },
    {
      title: 'Cien años de soledad',
      date: '2024-10-01',
      urlPhoto: 'https://www.campus.es/imagenes/9788466/978846637971.JPG',
      text: 'Una obra literaria fundamental que mezcla lo real y lo fantástico en un relato único. A través de la saga de la familia Buendía en el aislado pueblo de Macondo, la novela explora temas como el amor, el poder, el destino y la soledad. Con un estilo narrativo cautivador y lleno de simbolismo, García Márquez crea un mundo donde el tiempo es cíclico y los personajes se ven atrapados por sus propias historias. Es una obra que invita a la reflexión sobre la historia, la memoria y la humanidad.',
    },
  ];

  getDataForm(event: IBooks) {
    this.arrBooks.unshift(event);

    this.arrBooks.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
}

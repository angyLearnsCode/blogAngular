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
      date: '15-02-2025',
      urlPhoto: 'https://m.media-amazon.com/images/I/91xNmlf86yL._SL1500_.jpg',
      text: 'La obra explora temas como la obsesión, la naturaleza humana, la fatalidad y la lucha contra lo incontrolable. Con sus ricos símbolos y profundos reflexiones filosóficas, Moby Dick es una de las más grandes novelas de la literatura americana.',
    },
    {
      title: 'Ensayo sobre la ceguera',
      date: '01-10-2024',
      urlPhoto: 'https://m.media-amazon.com/images/I/717ZqBXBF9L._SL1500_.jpg',
      text: 'La historia sigue a un grupo de personas que luchan por sobrevivir en medio de la anarquía, mientras exploran la fragilidad de la sociedad y la naturaleza humana. Con un estilo narrativo único y profundo, Saramago aborda temas de solidaridad, poder y deshumanización en una sociedad colapsada.',
    },
  ];
}

// COMIENDO FUNCIONALIDAD

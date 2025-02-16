import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBooks } from '../../interfaces/ibooks.interface';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  maxLength: number = 500;
  caracteresRestantes: number = this.maxLength;
  model = { resena: '' };

  newBook: IBooks = {
    title: '',
    date: '',
    urlPhoto: '',
    text: '',
  };
  onInput() {
    this.newBook.text = this.model.resena;
    this.caracteresRestantes = this.maxLength - this.model.resena.length;
  }

  getBook() {
    console.log(this.newBook);
  }
}

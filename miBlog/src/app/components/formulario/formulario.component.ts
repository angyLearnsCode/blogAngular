import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() sendBook: EventEmitter<IBooks> = new EventEmitter();

  onInput() {
    this.newBook.text = this.model.resena;
    this.caracteresRestantes = this.maxLength - this.model.resena.length;
  }

  getBook() {
    this.sendBook.emit(this.newBook);
    this.newBook = {
      title: '',
      date: '',
      urlPhoto: '',
      text: '',
    };
  }
}

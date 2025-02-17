import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBooks } from '../../interfaces/ibooks.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  maxLength: number = 500;
  minLength: number = 150;
  caracteresRestantes: number = this.maxLength;
  model = { resena: '' };
  urlInvalid: boolean = false;
  resenaInvalid: boolean = false;

  newBook: IBooks = {
    title: '',
    date: '',
    urlPhoto: '',
    text: '',
  };

  maxDate: string = new Date().toISOString().split('T')[0];

  @Output() sendBook: EventEmitter<IBooks> = new EventEmitter();

  onInput() {
    this.newBook.text = this.model.resena;
    this.caracteresRestantes = this.maxLength - this.model.resena.length;
    this.resenaInvalid = this.model.resena.length < this.minLength;
  }

  getBook() {
    this.sendBook.emit(this.newBook);

    this.newBook = {
      title: '',
      date: '',
      urlPhoto: '',
      text: '',
    };
    this.model.resena = '';
    this.caracteresRestantes = this.maxLength;
  }

  isFormValid() {
    return (
      this.newBook.title &&
      this.newBook.date &&
      this.newBook.urlPhoto &&
      this.model.resena
    );
  }

  isUrlValid(url: string): boolean {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
  }

  onUrlBlur() {
    this.urlInvalid = !this.isUrlValid(this.newBook.urlPhoto);
  }

  onResenaBlur() {
    this.resenaInvalid = this.model.resena.length < this.minLength;
  }

  onResenaFocus() {
    this.resenaInvalid = false;
  }
}

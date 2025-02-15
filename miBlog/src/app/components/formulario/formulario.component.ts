import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  resena: string = '';
  maxLength: number = 500;
  caracteresRestantes: number = this.maxLength;

  onInput() {
    this.caracteresRestantes = this.maxLength - this.resena.length;
  }
}

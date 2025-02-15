import { Component } from '@angular/core';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormularioComponent, PostsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

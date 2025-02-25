import { Component } from '@angular/core';
import { Libro } from 'src/interfaces/libro';
import { BibliotecaService } from 'src/services/biblioteca.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private bibliotecaService: BibliotecaService
  ) {}

  public libroSeleccionado!: Libro;

  ngOnInit() {
    this.libroSeleccionado = this.bibliotecaService.libros[Math.floor(Math.random() * 4)];
  }

  public mostrarLibro() {
    this.libroSeleccionado = this.bibliotecaService.libros[Math.floor(Math.random() * 4)];
  }

}

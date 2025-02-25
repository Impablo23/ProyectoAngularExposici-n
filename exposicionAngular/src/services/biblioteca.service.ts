import { Injectable } from '@angular/core';
import { Libro } from 'src/interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  public libros: Libro[] = [
    {
      titulo: 'quijote',
      num_paginas: 200,
      anno_publicacion: 2000
    },
    {
      titulo: 'dartakan',
      num_paginas: 156,
      anno_publicacion: 2003
    },
    {
      titulo: 'geronimo stilton',
      num_paginas: 540,
      anno_publicacion: 1990
    },
    {
      titulo: 'diario de grefg',
      num_paginas: 345,
      anno_publicacion: 2012
    },
  ];

  constructor() { }
}

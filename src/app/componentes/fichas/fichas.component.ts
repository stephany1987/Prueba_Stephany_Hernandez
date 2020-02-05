import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/** Array de personas */
  personas=[{nombre:'Stephany', apellido:'Hernández', edad: 32, telefono: 9451785, Correo:'stephany@gmail.com'},
  {nombre:'Carolina', apellido:'Fuenmayor', edad: 40, telefono: 12345678, Correo:'Carolina@gmail.com'},
  {nombre:'Alvaro', apellido:'Hernández', edad: 60, telefono: 12345678, Correo:'Alvaro@gmail.com'},
  {nombre:'Eugenia', apellido:'Hernández', edad: 30, telefono: 12345678, Correo:'Eugenia@gmail.com'}];
/**End Array de personas */


  persona={
   nombre: null,
   apellido: null,
   edad: null,
   telefono: null,
   Correo: null
  };
  

  }


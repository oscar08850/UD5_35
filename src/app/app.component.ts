import { Component } from '@angular/core';
import { Cliente } from './models/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'UD5_35';
  nombre: string = "";
  cif: string = "";
  direccion: string = "";
  grupo: string = "";
  listaClientes: Cliente[] = [];

  constructor(){}


  guardarCliente(): void {
    const cliente: Cliente = {
      nombre: this.nombre,
      cif: this.cif,
      direccion: this.direccion,
      grupo : this.grupo
    }
    this.listaClientes.push(cliente);
    this.nombre = "";
    this.cif = "";
    this.direccion = "";
    this.grupo = "";
  }


}

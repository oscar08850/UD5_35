import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  @Input() listClientes: any;

  constructor(){}
  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from "@angular/material/button";
import { Cliente } from '../cadastro/cliente';
import { ClienteService } from '../cliente.service';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule,
    MatToolbarModule,
    MatButton,
    CommonModule,
    MatTableModule
],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent implements OnInit {

  listaClientes: Cliente[] = [];

  colunasTable: string[] = ["id","nome","cpf","dataNascimento","email"]


  constructor(private service: ClienteService) { 

  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }
}

import { Component, OnInit, inject } from '@angular/core';
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
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


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

snack: MatSnackBar = inject(MatSnackBar)

  nomeBusca: string = ''; 

  listaClientes: Cliente[] = [];

  colunasTable: string[] = ["id","nome","cpf","dataNascimento","email", "acoes"]


  constructor(
    private service: ClienteService,
    private router: Router) { 

  }

  ngOnInit() {
    this.listaClientes = this.service.pesquisarClientes('');
  }

  pesquisar (){
    this.listaClientes = this.service.pesquisarClientes(this.nomeBusca)
  }

  preparaEditar(id: string) {
    console.log("ID recebido: ", id);

    this.router.navigate(['/cadastro'], { queryParams: { "id": id } })
  }

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true;
  }

  deletar(cliente:Cliente){
    this.service.deletar(cliente);
    this.listaClientes = this.service.pesquisarClientes('');
     this.mostrarMensagem('Deletado com sucesso!')
  }

  mostrarMensagem(mensagem: string){
    this.snack.open(mensagem, "Ok")
  }

}

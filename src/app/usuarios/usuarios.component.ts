import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { IUsuario } from '../interfaces/usuario.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  listaUsuarios: IUsuario[] = []

  
  constructor( 
    private router: Router,
    private usuarioService: UsuarioService
  ) { }


  ngOnInit(): void {
    this.listar();
  }

  public listar():void {

    this.usuarioService.listar()
    .subscribe(res => {
      this.listaUsuarios = res
    })

  }

}

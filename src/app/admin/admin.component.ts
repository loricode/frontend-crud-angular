import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import Sweet from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  
  displayedColumns: string[] = ['telefono', 'nombre', 'correo', 'eliminar'];
  dataSource:any[] = [];
  
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
      this.dataSource = res
    })

  }

  public irManteniemiento(){

    this.router.navigate(["gestion"])

  } 

  public eliminar(element:any){

    this.usuarioService.eliminar({ id:element.id })
     .subscribe(res => {
     
      Sweet.fire({
        title:'Mensaje',
        text:'Usuario Eliminado',
        timer:2000
      })

      this.listar();

     })

  }

  public actualizar(element:any){

    this.router.navigate(
      ["gestion"], 
    { queryParams: { id: element.id } }
    )

  }

  public irHome(){
    this.router.navigate([""])
  }

}

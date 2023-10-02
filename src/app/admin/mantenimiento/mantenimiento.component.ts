import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import Sweet from 'sweetalert2';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent implements OnInit {

 parametro = "00000";

  usuarioForm: FormGroup = this.fb.group({
    nombre:['', Validators.required], 
    identificacion:['', Validators.required],
    telefono:['', Validators.required],
    email: ['', [Validators.required]],
  })
  
  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtener();
  }

  public obtener():void {

    this.route.queryParams
      .subscribe((params:any) => {
        this.parametro = params.id
        if(params.id !== "00000"){
          this.usuarioService.obtener({id: params.id})
          .subscribe(res => { 
             
              const obj = {
                 identificacion:res.identificacion,
                 telefono:res.telefono,
                 nombre:res.nombre,
                 email:res.correo,  }
              this.usuarioForm.setValue(obj)
          })
        }

      }
    );

  }

  public regresar():void {
    this.router.navigate(["admin"])
  }

  public usuarioSubmit():void{

    if(this.parametro !== "00000"){
     
      this.usuarioService.actualizar({ id:this.parametro, ...this.usuarioForm.value} )
      .subscribe(res => {
         
       if(res){
         Sweet.fire({
           title:'Mensaje',
           text:'Usuario Actualizado',
           timer:2000
         })
 
         this.router.navigate(["admin"])
 
        }
 
      })


    }else{

      this.usuarioService.guardar(this.usuarioForm.value)
      .subscribe(res => {
         
       if(res){
         Sweet.fire({
           title:'Mensaje',
           text:'Usuario Registrado',
           timer:2000
         })
 
         this.router.navigate(["admin"])
 
        }
 
      })
    }
  
  }


  public irHome(){
    this.router.navigate([""])
  }

}

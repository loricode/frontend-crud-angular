import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import Sweet from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    passwordHash: [''],
  })

  constructor( 
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) { }

  public loginSubmit() : void{
    
    this.usuarioService.login(this.loginForm.value).subscribe(
      res => {

        if(res.autenticado){
          
          this.router.navigate(["/admin"])

        }else{
          Sweet.fire({
            title:'Mensaje',
            text:'Email o Password incorrecto',
            icon: 'error',
          })
        }
        
      }
    )
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MantenimientoComponent } from './admin/mantenimiento/mantenimiento.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'auth',
    component:LoginComponent
  },
  {
    path:'usuarios',
    component: UsuariosComponent
  },
  {
    pathMatch:'full',
    path:'admin',
    component:AdminComponent,
  },
  {
    path:'gestion',
    component:MantenimientoComponent,
  },
  {
    path:'*', redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

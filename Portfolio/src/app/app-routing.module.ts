import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import  {RegisterComponent} from './component/register/register.component';
import { GuardGuard } from './service/guard.guard';

const routes: Routes = [
  {path: 'portfolio',component: PortfolioComponent,canActivate:[GuardGuard]},
  {path: 'iniciar-sesion',component:IniciarSesionComponent},
   {path: '', redirectTo: 'iniciar-sesion',pathMatch:'full'},
  {path: 'registrar', component:RegisterComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

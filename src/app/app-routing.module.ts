import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth.guard';
import { HomeComponent } from './shared/home/home.component';
import { ClienteResolverService } from './shared/services/cliente-resolver.service';
import { LoginComponent } from './user/pages/login.component';
import { RegisterComponent } from './user/pages/register.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'home', component: HomeComponent, canActivate:[AuthGuardService]},
  {path:'cliente',
      loadChildren: () => import('./cliente/cliente.module').then(m => m.ClientesModule),
      canLoad:[AuthGuardService],
      resolve: {cliente: ClienteResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

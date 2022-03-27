import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentPrincipalComponent } from './components/content/content-principal/content-principal.component';
import { ContentCatalogoComponent } from './components/content/content-catalogo/content-catalogo.component';
import { ContentPedidosComponent } from './components/content/content-pedidos/content-pedidos.component';
import { LoginComponent } from './components/content/login/login.component';
import { ContentAdministradorComponent } from './components/content/content-administrador/content-administrador.component';


const routes: Routes = [
  {path: '', component: ContentPrincipalComponent},
  {path: 'catalogo', component: ContentCatalogoComponent},
  {path: 'pedidos', component: ContentPedidosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: ContentAdministradorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

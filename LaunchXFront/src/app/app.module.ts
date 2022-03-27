import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPublicComponent } from './components/headers/header-public/header-public.component';
import { HeaderPrivateComponent } from './components/headers/header-private/header-private.component';
import { FooterPublicComponent } from './components/footers/footer-public/footer-public.component';
import { FooterPrivateComponent } from './components/footers/footer-private/footer-private.component';
import { ContentPrincipalComponent } from './components/content/content-principal/content-principal.component';
import { ContentCatalogoComponent } from './components/content/content-catalogo/content-catalogo.component';
import { ContentPedidosComponent } from './components/content/content-pedidos/content-pedidos.component';
import { LoginComponent } from './components/content/login/login.component';
import { ContentAdministradorComponent } from './components/content/content-administrador/content-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    FooterPublicComponent,
    FooterPrivateComponent,
    ContentPrincipalComponent,
    ContentCatalogoComponent,
    ContentPedidosComponent,
    LoginComponent,
    ContentAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

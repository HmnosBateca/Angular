import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/cliente.service';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes:Routes =[
  //{path:'', redirecto: '/clientes', pathMatch:'full'},//home
    {path: '',redirectTo: '/clientes', pathMatch: 'full'},
    {path: 'clientes', component:ClientesComponent},
    {path: 'clientes/form', component:FormComponent},
    {path: 'clientes/form/:id', component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

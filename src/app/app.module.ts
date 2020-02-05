import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LibretaComponent } from './componentes/libreta/libreta.component';
import { FichasComponent } from './componentes/fichas/fichas.component';

@NgModule({
  declarations: [
    AppComponent,
    LibretaComponent,
    FichasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

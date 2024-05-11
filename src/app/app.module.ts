import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { IngresoComponent } from './ingreso/ingreso.component';
import { EgresosComponent } from './egreso/egreso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresosComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IngresoService, EgresoService],
  bootstrap: [AppComponent],
})
export class AppModule {}

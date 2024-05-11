import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent
{
  movimiento: string = "ingreso";
  descripcion: string;
  valor: number;

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService) { }

  tipoMovimiento(elemHtml: Event)
  {
    this.movimiento = (elemHtml.target as HTMLInputElement).value;
  }

  agregarRegistro()
  {
    if(this.movimiento === 'ingreso')
      this.ingresoServicio.agregar(new Ingreso(this.descripcion, this.valor));
    else if(this.movimiento === 'egreso')
      this.egresoServicio.agregar(new Egreso(this.descripcion, this.valor));
  }
}

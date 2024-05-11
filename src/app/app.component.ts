import { Component, OnInit } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  titulo = 'Aplicacion Presupuesto';
  ingresos: Ingreso[];
  egresos: Egreso[];

  constructor(private ingresoServicio: IngresoService, private egresoServicio: EgresoService){}

  ngOnInit(): void
  {
    this.ingresos = this.ingresoServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;
  }

  calcularIngresoTotal()
  {
    let totalIngresos: number = 0;

    this.ingresos.forEach(ingreso => totalIngresos += ingreso.valor);

    return totalIngresos;
  }

  calcularEgresoTotal()
  {
    let totalEgresos: number = 0;

    this.egresos.forEach(egreso => totalEgresos += egreso.valor)

      return totalEgresos;
  }

  calcularPresupuestoTotal()
  {
    return this.calcularIngresoTotal() - this.calcularEgresoTotal();
  }

  calcularPorcentajeTotal()
  {
    if(this.calcularIngresoTotal() == 0)
      return 0  ;

    return this.calcularEgresoTotal() / this.calcularIngresoTotal();
  }
}
import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresosComponent implements OnInit
{
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresoServicio: EgresoService){ }

  ngOnInit(): void
  {
    this.egresos = this.egresoServicio.egresos;
  }

  eliminarEgreso(egreso: Egreso)
  {
    this.egresoServicio.eliminar(egreso);
  }

  porcentajeEgreso(egreso: Egreso)
  {
    if(this.ingresoTotal == 0)
      return 0;

    return egreso.valor / this.ingresoTotal;
  }
}

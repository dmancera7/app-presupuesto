import { Egreso } from "./egreso.model";

export class EgresoService
{
  egresos: Egreso[] = [
    new Egreso('Renta', 1000),
    new Egreso('Ropa', 500)
  ];

  agregar(egreso: Egreso)
  {
    this.egresos.push(egreso);
  }

  eliminar(egreso: Egreso)
  {
    const indice = this.egresos.indexOf(egreso);
    this.egresos.splice(indice, 1);
  }
}
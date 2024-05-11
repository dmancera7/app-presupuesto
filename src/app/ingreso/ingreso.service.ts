import { Ingreso } from "./ingreso.model";

export class IngresoService
{
  ingresos: Ingreso[] = [
    new Ingreso("Salario", 9000),
    new Ingreso("Venta PC", 2000)
  ];

  agregar(ingreso: Ingreso)
  {
    this.ingresos.push(ingreso);
  }

  eliminar(ingreso: Ingreso)
  {
    const indice = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice, 1);
  }
}
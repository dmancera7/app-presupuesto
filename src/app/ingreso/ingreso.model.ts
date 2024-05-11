import { Movimiento } from "../movimiento";

export class Ingreso implements Movimiento
{
  constructor(public descripcion: string, public valor: number){}
}
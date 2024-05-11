import { Movimiento } from "../movimiento";

export class Egreso implements Movimiento
{
  constructor(public descripcion: string, public valor: number){}
}
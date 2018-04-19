import { Item } from '../item/item.model';

export interface Build {
  codigo: number;
  nome: string;
  tpStatus: string;
  itens: Item[];
}

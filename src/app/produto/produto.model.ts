import { Build } from './../build/build';

export class Produto {
  codigo: number;
  nome: string;
  snAtivo: string;
  builds: Build[];
}

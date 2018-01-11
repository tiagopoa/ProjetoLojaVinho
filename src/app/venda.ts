import { Produto } from "./produto";

export class Venda {
    id: number;
    codigo: string;
    data: string;
    cliente: string;
    itens: [Produto];
}

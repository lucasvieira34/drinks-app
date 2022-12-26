export interface Drink {
  id: string;
  name: string;
  descricao: string;
  image: any;
  receita: Receita[];
  taca: string;
}

export interface Receita {
  id: number;
  name: string;
  icon: any;
}

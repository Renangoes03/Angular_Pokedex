export interface Pokemon {
   types: {
    type: {
      name: string   // Pegando Tipos
    };
  }[];

  stats: {
    base_stat: number;
    stat: {
        name: string
    }
}[];

  name: string;
  height: number;
  weight: number;
  id: number;
}
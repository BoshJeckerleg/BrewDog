export interface ProductIngredientAmount {
  value: number;
  unit: string;
}

export interface ProductIngredient {
  add: string;
  amount: ProductIngredientAmount;
  attribute: string;
  name: string;
}

export interface ProductIngredients {
  hops: ProductIngredient[];
  malt: ProductIngredient[];
  yeast: string;
}

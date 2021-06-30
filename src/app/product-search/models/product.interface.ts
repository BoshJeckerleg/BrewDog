import { ProductIngredients } from './product-ingredients.interface';
import { ProductMethod } from './product-method.interface';
import { ProductVolume } from './product-volume.interface';

export interface Product {
  abv: number;
  attenuation_level: number;
  boil_volume: ProductVolume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number;
  first_brewed: string;
  food_pairing: string[];
  ibu: number;
  id: number;
  image_url: string;
  ingredients: ProductIngredients;
  method: ProductMethod;
  name: string;
  ph: number;
  srm: number;
  beerName: string;
  target_fg: number;
  target_og: number;
  volume: ProductVolume;
}

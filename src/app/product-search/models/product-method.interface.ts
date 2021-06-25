export interface ProductMethodTemperature {
  value: number;
  unit: string;
}

export interface ProductMethodStep {
  temp: ProductMethodTemperature;
  duration?: number;
}

export interface ProductMethod {
  fermentation: ProductMethodStep;
  mash_temp: ProductMethodStep[];
  twist: string;
}

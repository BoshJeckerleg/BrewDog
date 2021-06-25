import { SelectOption } from '@brewdog/shared/forms/models/select-option.interface';
import { ProductSearchSort } from '../models/product-search-sort.enum';

export const productSearchSortSelectOptions: SelectOption<ProductSearchSort>[] = [
  { value: ProductSearchSort.Default, label: 'Default' },
  { value: ProductSearchSort.AbvAscending, label: 'ABV Ascending' },
  { value: ProductSearchSort.AbvDescending, label: 'ABV Descending' }
];

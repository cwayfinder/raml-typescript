import {FilterType} from './FilterType';
import {FilterFieldType} from './FilterFieldType';

export interface FilterDto {
  type: FilterType;
  value: string;
  field: string;
  filterType: FilterFieldType;
}

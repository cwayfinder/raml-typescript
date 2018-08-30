import {SortDirection} from './SortDirection';

export interface SortDto {
  direction: SortDirection = 'ASC';
  field: string = 'id';
}

import {SortDto} from './SortDto';
import {FilterDto} from './FilterDto';

export interface DataRequestDto {
  sort?: SortDto;
  pageSize?: number = '20';
  pageNumber?: number;
  filter?: FilterDto[];
}

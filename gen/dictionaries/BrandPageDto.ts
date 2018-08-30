import {BrandDto} from './BrandDto';
import {PageDto} from 'PageDto';

export interface BrandPageDto extends PageDto {
  items: BrandDto[];
}

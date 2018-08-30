import {DictionaryDto} from './DictionaryDto';

export interface BrandDto extends DictionaryDto {
  bookingCategory?: DictionaryDto;
}

import {DictionaryDto} from './DictionaryDto';
import {PageDto} from 'PageDto';

export interface DictionaryPageDto extends PageDto {
  items: DictionaryDto[];
}

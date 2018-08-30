import {IncludedLuggageDto} from './IncludedLuggageDto';
import {PageDto} from 'PageDto';

export interface IncludedLuggagePageDto extends PageDto {
  items: IncludedLuggageDto[];
}

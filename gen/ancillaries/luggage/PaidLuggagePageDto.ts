import {PaidLuggageDto} from './PaidLuggageDto';
import {PageDto} from 'PageDto';

export interface PaidLuggagePageDto extends PageDto {
  items: PaidLuggageDto[];
}

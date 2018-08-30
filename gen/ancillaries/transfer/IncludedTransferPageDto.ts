import {IncludedTransferDto} from './IncludedTransferDto';
import {PageDto} from 'PageDto';

export interface IncludedTransferPageDto extends PageDto {
  items: IncludedTransferDto[];
}

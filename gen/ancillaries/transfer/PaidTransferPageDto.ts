import {PaidTransferDto} from './PaidTransferDto';
import {PageDto} from 'PageDto';

export interface PaidTransferPageDto extends PageDto {
  items: PaidTransferDto[];
}

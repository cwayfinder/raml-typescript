import {Direction} from 'Direction';
import {DictionaryDto} from 'dictionaries/DictionaryDto';
import {TransferType} from './TransferType';
import {BaseConfigurationDto} from 'ancillaries/BaseConfigurationDto';

export interface PaidTransferDto extends BaseConfigurationDto {
  direction: Direction;
  arrivalAirport: DictionaryDto;
  ortsCode: string;
  transfer: TransferType;
  code: string;
  active: boolean;
}

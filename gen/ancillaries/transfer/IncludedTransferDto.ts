import {TransferType} from './TransferType';
import {BaseIncludedConfigurationDto} from 'ancillaries/BaseIncludedConfigurationDto';

export interface IncludedTransferDto extends BaseIncludedConfigurationDto {
  inclusion: TransferType;
}

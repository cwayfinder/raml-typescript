import {DictionaryDto} from 'dictionaries/DictionaryDto';
import {Direction} from 'Direction';
import {BaseConfigurationDto} from 'ancillaries/BaseConfigurationDto';

export interface PaidLuggageDto extends BaseConfigurationDto {
  departureAirport: DictionaryDto;
  arrivalAirport: DictionaryDto;
  carrier: DictionaryDto;
  direction: Direction;
  code: string;
  bookingCategory: DictionaryDto;
  includedAmount: number;
  price: number;
  active: boolean;
}

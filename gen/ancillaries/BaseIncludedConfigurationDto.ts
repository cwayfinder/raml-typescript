import {BrandDto} from '../dictionaries/BrandDto';
import {DictionaryDto} from '../dictionaries/DictionaryDto';
import {BaseConfigurationDto} from './BaseConfigurationDto';

export interface BaseIncludedConfigurationDto extends BaseConfigurationDto {
  brand: BrandDto;
  catalogue: DictionaryDto;
  arrivalAirport: DictionaryDto;
}

import {DictionaryDto} from 'dictionaries/DictionaryDto';
import {InclusionType} from 'ancillaries/InclusionType';
import {BaseIncludedConfigurationDto} from 'ancillaries/BaseIncludedConfigurationDto';

export interface IncludedLuggageDto extends BaseIncludedConfigurationDto {
  carrier1: DictionaryDto;
  carrier2: DictionaryDto;
  transportClass: string;
  departureAirport: DictionaryDto;
  luggageIncluded: InclusionType;
  maxKgHoldLuggage: number;
  maxKgHoldLuggageInfant: number;
  maxKgHandLuggage?: number;
  maxPcsHandLuggage?: number;
  maxSizesHandLuggage?: string;
}

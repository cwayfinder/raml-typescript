import {ExtraDetailsDto} from './ExtraDetailsDto';

export interface TripExtraDto {
  id: string;
  name?: string;
  wholeTrip: ExtraDetailsDto[];
}

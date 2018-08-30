import {ExtraDetailsDto} from './ExtraDetailsDto';

export interface FlightExtraDto {
  id: string;
  inbound: ExtraDetailsDto[];
  outbound: ExtraDetailsDto[];
}

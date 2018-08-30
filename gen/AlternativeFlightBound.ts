import {CabinClass} from './CabinClass';
import {Direction} from './Direction';

export interface AlternativeFlightBound {
  arrivalAirportCode: string;
  arrivalAirportDisplayText?: string;
  arrivalAirportKey?: string;
  arrivalAirportTerminal?: string;
  arrivalDateTime?: string;
  arrivalTimeAvailable?: boolean;
  brochureCode?: string;
  cabinClass: CabinClass;
  chain?: string;
  checkInDate?: string;
  code?: string;
  departureAirportCode: string;
  departureAirportDisplayText?: string;
  departureAirportKey?: string;
  departureAirportTerminal?: string;
  departureDateTime?: string;
  departureTimeAvailable?: boolean;
  directionInd: Direction;
  duration?: string;
  flightCode?: string;
  flightNumber?: string;
  flightSlot?: string;
  flightKey: string;
  packageFlightKey: string;
  infoSource?: string;
  operatingAirlineCode?: string;
  operatingAirlineDisplayText?: string;
  operatingAirlineKey?: string;
  order?: number = '1';
  originalTransportClass?: string;
  provider?: string;
  transportClass?: string;
  travelCode?: string;
  yieldLateSup?: string;
}

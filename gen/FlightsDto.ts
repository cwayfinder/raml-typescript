import {FlightBoundDto} from './FlightBoundDto';

export interface FlightsDto {
  departureAirportCode: string;
  arrivalAirportCode: string;
  outbound: FlightBoundDto;
  inbound: FlightBoundDto;
}

import {FlightPassengerDto} from './FlightPassengerDto';

export interface FlightBoundDto {
  departureDate: string;
  carrierCodes?: string[];
  carriers: string[];
  stops?: string[];
  stopCodes?: string[];
  departureTime?: string;
  departureAirport: string;
  departureAirportCode?: string;
  arrivalTime?: string;
  arrivalAirportCode?: string;
  arrivalAirport: string;
  transportClass: string;
  passengers?: FlightPassengerDto[];
}

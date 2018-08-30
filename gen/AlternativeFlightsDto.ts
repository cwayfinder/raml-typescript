import {AlternativeFlightPackage} from './AlternativeFlightPackage';

export interface AlternativeFlightsDto {
  alternativeFlights: AlternativeFlightPackage[];
  searchResultid: string;
}

import {AlternativeFlightBound} from './AlternativeFlightBound';

export interface AlternativeFlightPackage {
  id: string;
  flightList: AlternativeFlightBound[];
  packagePrice?: number;
  currency?: string;
}

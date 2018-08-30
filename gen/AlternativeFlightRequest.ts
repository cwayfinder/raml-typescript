import {SiteCode} from './SiteCode';
import {Language} from './Language';
import {AgeCode} from './AgeCode';

export interface AlternativeFlightRequest {
  siteCode: SiteCode;
  language: Language;
  passengerAgeCodes: AgeCode[];
  inTransportClass: string;
  outTransportClass: string;
  brandCode: string;
  catalog: string;
  departureDateTime: string;
  duration: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  providerPlayerhub?: boolean;
  accommodationCode?: string;
  roomCode?: string;
  mealPlanCode?: string;
  occupancy?: string;
}

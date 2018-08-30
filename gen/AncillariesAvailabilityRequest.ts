import {SiteCode} from './SiteCode';
import {Language} from './Language';
import {SimplePassengerDto} from './SimplePassengerDto';

export interface AncillariesAvailabilityRequest {
  siteCode: SiteCode;
  language: Language;
  brand: string;
  season: string;
  catalog: string;
  productId: string;
  departureAirportCode: string;
  arrivalAirportCode: string;
  locationCode: string;
  outboundStartDate: date-only;
  inboundStartDate: date-only;
  inboundTransportClass: string;
  outboundTransportClass: string;
  outboundCarrierCode: string;
  inboundCarrierCode: string;
  passengers: SimplePassengerDto[];
}

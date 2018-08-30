import {FlightExtraDto} from './FlightExtraDto';
import {TripExtraDto} from './TripExtraDto';
import {OtherExtraDto} from './OtherExtraDto';
import {PriceLineDto} from './PriceLineDto';

export interface CostSummaryDto {
  flightExtras?: FlightExtraDto[];
  tripExtras?: TripExtraDto[];
  otherExtras?: OtherExtraDto[];
  priceLines: PriceLineDto[];
  totalAmount: number;
  paidAmount: number;
  restDownPaymentAmount?: number;
  restDownPaymentDate?: string;
  restPaymentAmount?: number;
  restPaymentDate?: string;
  currency: string;
}

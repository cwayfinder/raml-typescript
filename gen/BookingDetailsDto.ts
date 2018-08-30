import {Status} from './Status';
import {PackageDetailsDto} from './PackageDetailsDto';
import {AccommodationDto} from './AccommodationDto';
import {FlightsDto} from './FlightsDto';
import {PassengerDto} from './PassengerDto';
import {CostSummaryDto} from './CostSummaryDto';
import {AvailableExtraDto} from './AvailableExtraDto';
import {ContactDetailsDto} from './ContactDetailsDto';
import {AccountPaymentInfoDto} from './AccountPaymentInfoDto';

export interface BookingDetailsDto {
  bookingRef: string;
  brand: string;
  status: Status;
  packageDetails: PackageDetailsDto;
  accommodation: AccommodationDto;
  flights: FlightsDto;
  passengers: PassengerDto[];
  costSummary: CostSummaryDto;
  availableExtras?: AvailableExtraDto[];
  contactInfo?: ContactDetailsDto;
  paymentInfo?: AccountPaymentInfoDto;
}

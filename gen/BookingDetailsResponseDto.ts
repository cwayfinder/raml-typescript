import {BookingDetailsDto} from './BookingDetailsDto';
import {ErrorDto} from './ErrorDto';

export interface BookingDetailsResponseDto {
  season: string;
  catalog: string;
  productId: string;
  details: BookingDetailsDto;
  leadPaxSurname: string;
  leadPaxEmail: string;
  error?: ErrorDto;
}

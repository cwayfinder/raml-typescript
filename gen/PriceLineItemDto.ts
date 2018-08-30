import {PassengerPriceLineItemDto} from './PassengerPriceLineItemDto';

export interface PriceLineItemDto {
  title: string;
  price?: number;
  items?: PassengerPriceLineItemDto[];
}

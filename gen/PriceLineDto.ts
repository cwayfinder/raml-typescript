import {PriceLineItemDto} from './PriceLineItemDto';

export interface PriceLineDto {
  title: string;
  price: number;
  items?: PriceLineItemDto[];
}

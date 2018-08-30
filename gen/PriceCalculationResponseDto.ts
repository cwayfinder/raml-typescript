import {CalculatedExtraDto} from './CalculatedExtraDto';

export interface PriceCalculationResponseDto {
  extras: CalculatedExtraDto[];
  totalExtraAmount: number;
  totalAmount: number;
  currency: string;
  insuranceFee?: number;
  totalExtraAmountWithFee?: number;
}

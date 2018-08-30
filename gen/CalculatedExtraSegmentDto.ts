import {SegmentType} from './SegmentType';

export interface CalculatedExtraSegmentDto {
  type: SegmentType;
  calculatedOption: string;
  price: number;
}

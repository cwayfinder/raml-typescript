import {SegmentType} from './SegmentType';
import {ExtraOptionDto} from './ExtraOptionDto';

export interface ExtraSegmentDto {
  type: SegmentType;
  description: string;
  defaultOption?: string;
  purchasedOption?: string;
  options: ExtraOptionDto[];
}

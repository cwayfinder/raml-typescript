import {ExtraRecipientType} from './ExtraRecipientType';
import {SegmentOptionDto} from './SegmentOptionDto';

export interface PriceExtraRecipientDto {
  type: ExtraRecipientType;
  id?: string;
  segments: SegmentOptionDto[];
}

import {ExtraRecipientType} from './ExtraRecipientType';
import {ExtraSegmentDto} from './ExtraSegmentDto';

export interface ExtraRecipientDto {
  type: ExtraRecipientType;
  id?: string;
  segments: ExtraSegmentDto[];
}

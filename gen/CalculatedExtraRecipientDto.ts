import {ExtraRecipientType} from './ExtraRecipientType';
import {CalculatedExtraSegmentDto} from './CalculatedExtraSegmentDto';

export interface CalculatedExtraRecipientDto {
  type: ExtraRecipientType;
  id?: string;
  segments: CalculatedExtraSegmentDto[];
}

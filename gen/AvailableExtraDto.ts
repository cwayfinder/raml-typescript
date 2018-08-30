import {ExtraRecipientDto} from './ExtraRecipientDto';

export interface AvailableExtraDto {
  id: string;
  disabled: boolean;
  purchased: boolean;
  minPrice?: number;
  recipients?: ExtraRecipientDto[];
  displayOrder?: number;
}

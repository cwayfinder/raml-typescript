import {SelectedExtraId} from './SelectedExtraId';
import {PriceExtraRecipientDto} from './PriceExtraRecipientDto';

export interface PriceCalculationRequestDto {
  id: SelectedExtraId;
  recipients: PriceExtraRecipientDto[];
}

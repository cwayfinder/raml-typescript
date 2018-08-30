import {SelectedExtraId} from './SelectedExtraId';
import {CalculatedExtraRecipientDto} from './CalculatedExtraRecipientDto';

export interface CalculatedExtraDto {
  id: SelectedExtraId;
  recipients: CalculatedExtraRecipientDto[];
}

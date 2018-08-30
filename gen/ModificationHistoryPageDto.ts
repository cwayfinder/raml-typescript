import {ModificationHistoryDto} from './ModificationHistoryDto';
import {PageDto} from './PageDto';

export interface ModificationHistoryPageDto extends PageDto {
  items: ModificationHistoryDto[];
}

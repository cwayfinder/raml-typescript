import {ModificationHistoryAction} from './ModificationHistoryAction';
import {ModificationHistoryTable} from './ModificationHistoryTable';

export interface ModificationHistoryDto {
  author: string;
  date: number;
  action: ModificationHistoryAction;
  table: ModificationHistoryTable;
}

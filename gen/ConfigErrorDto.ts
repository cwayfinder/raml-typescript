import {BaseConfigErrorDto} from './BaseConfigErrorDto';

export interface ConfigErrorDto extends BaseConfigErrorDto {
  column: string;
}

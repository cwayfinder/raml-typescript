import {AgeCode} from './AgeCode';

export interface PassengerDto {
  id: string;
  title: string;
  firstName: string;
  lastName?: string;
  gender: string;
  ageCode?: AgeCode;
}

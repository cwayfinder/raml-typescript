export interface RoomProfileDto {
  code: string;
  adults: number;
  children: number;
  infants: number;
  description: string;
  guestList: string[];
  mealPlan: string;
  preference?: string;
}

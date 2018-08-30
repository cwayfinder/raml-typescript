export interface ErrorDto {
  status: number;
  messages: string[];
  code: number;
  header?: string;
}

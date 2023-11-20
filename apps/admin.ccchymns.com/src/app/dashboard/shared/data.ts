import { SortOrder } from './types';

export class Order {
  static readonly ASC: SortOrder = 'asc';
  static readonly DESC: SortOrder = 'desc';
}
// Number of items per table page
export const TABLE_PAGE_SIZE = 50;

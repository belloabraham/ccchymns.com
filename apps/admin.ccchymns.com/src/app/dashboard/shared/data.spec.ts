import { Order, TABLE_PAGE_SIZE } from './data';

describe('Data', () => {
  describe('Order', () => {
    it('should have a static property ASC with the value "asc"', () => {
      expect(Order.ASC).toBe('asc');
    });

    it('should have a static property DESC with the value "desc"', () => {
      expect(Order.DESC).toBe('desc');
    });
  });

  describe('TABLE_PAGE_SIZE', () => {
    it('should have the value 50', () => {
      expect(TABLE_PAGE_SIZE).toBe(50);
    });
  });
});

import { Position } from './position';

describe('Position', () => {
  it('should have a static property RIGHT_TOP with the correct value', () => {
    expect(Position.RIGHT_TOP).toBe('right-top');
  });

  it('should have a static property RIGHT_BOTTOM with the correct value', () => {
    expect(Position.RIGHT_BOTTOM).toBe('right-bottom');
  });

  it('should have a static property LEFT_TOP with the correct value', () => {
    expect(Position.LEFT_TOP).toBe('left-top');
  });

  it('should have a static property LEFT_BOTTOM with the correct value', () => {
    expect(Position.LEFT_BOTTOM).toBe('left-bottom');
  });

  it('should have a static property CENTER_TOP with the correct value', () => {
    expect(Position.CENTER_TOP).toBe('center-top');
  });

  it('should have a static property CENTER_BOTTOM with the correct value', () => {
    expect(Position.CENTER_BOTTOM).toBe('center-bottom');
  });

  it('should have a static property CENTER_CENTER with the correct value', () => {
    expect(Position.CENTER_CENTER).toBe('center-center');
  });
});

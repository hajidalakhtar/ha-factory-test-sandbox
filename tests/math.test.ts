import { describe, expect, it } from 'bun:test';
import { calculateFactorial } from '../src/math';

describe('calculateFactorial', () => {
  it('should return 1 for 0 and 1 (base cases)', () => {
    expect(calculateFactorial(0)).toBe(1);
    expect(calculateFactorial(1)).toBe(1);
  });

  it('should return correct factorial for positive integers', () => {
    expect(calculateFactorial(2)).toBe(2);
    expect(calculateFactorial(3)).toBe(6);
    expect(calculateFactorial(4)).toBe(24);
    expect(calculateFactorial(5)).toBe(120);
    expect(calculateFactorial(6)).toBe(720);
    expect(calculateFactorial(10)).toBe(3628800);
  });

  it('should throw RangeError for negative numbers', () => {
    expect(() => calculateFactorial(-1)).toThrow(RangeError);
    expect(() => calculateFactorial(-5)).toThrow(RangeError);
    expect(() => calculateFactorial(-0)).not.toThrow();
    expect(calculateFactorial(-0)).toBe(1);
    expect(() => calculateFactorial(-1)).toThrow('Input must be a non-negative integer');
  });

  it('should throw TypeError for decimal / non-integer numbers', () => {
    expect(() => calculateFactorial(3.14)).toThrow(TypeError);
    expect(() => calculateFactorial(0.5)).toThrow(TypeError);
    expect(() => calculateFactorial(3.14)).toThrow('Input must be an integer');
  });

  it('should throw TypeError for NaN and Infinity', () => {
    expect(() => calculateFactorial(NaN)).toThrow(TypeError);
    expect(() => calculateFactorial(Infinity)).toThrow(TypeError);
    expect(() => calculateFactorial(-Infinity)).toThrow(TypeError);
    expect(() => calculateFactorial(NaN)).toThrow('Input must be a finite number');
    expect(() => calculateFactorial(Infinity)).toThrow('Input must be a finite number');
  });

  it('should throw TypeError for non-number inputs if passed via ts-ignore or any', () => {
    // @ts-expect-error testing non-number
    expect(() => calculateFactorial('5')).toThrow(TypeError);
    // @ts-expect-error testing non-number
    expect(() => calculateFactorial(null)).toThrow(TypeError);
    // @ts-expect-error testing non-number
    expect(() => calculateFactorial(undefined)).toThrow(TypeError);
  });
});

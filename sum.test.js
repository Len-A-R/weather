import { sum } from './sum';

describe('sum', () => {
    it('returns the sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
    });
})
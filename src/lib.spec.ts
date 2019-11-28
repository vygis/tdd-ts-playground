import { expect } from 'chai';
import { getSum } from './lib';

describe('getSum', () => {

  it('should add two numbers', () => {
    expect(getSum(2, 3)).to.equal(5);
  });
});

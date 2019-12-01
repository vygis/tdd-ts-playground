import { expect } from 'chai';
import { getShortestPath } from './lib';

describe('shortestPath', () => {
  const network = {
    'Min'     : ['William', 'Jayden', 'Omar'],
    'William' : ['Min', 'Noam'],
    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren'     : ['Jayden', 'Omar'],
    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam'    : ['Nathan', 'Jayden', 'William'],
    'Omar'    : ['Ren', 'Min', 'Scott']
  };

  it('should find the shortest path', () => {
    expect(getShortestPath('Jayden', 'Adam', network)).to.deep.equal([ 'Jayden', 'Amelia', 'Adam' ]);
  });

});

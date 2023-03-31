import calculate from '../logic/calculate';

describe('calculate', () => {
  it('should return an object with total, next, and operation set to null when buttonName is AC', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update next when buttonName is a number', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '7')).toEqual({
      total: '10',
      next: '57',
      operation: '+',
    });
  });

  it('should return decimal button . is pressed', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({
      total: '10',
      next: '5.',
      operation: '+',
    });
  });

  it('should toggle the sign of next or total when buttonName is +/-', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '+/-')).toEqual({
      total: '10',
      next: '-5',
      operation: '+',
    });
    expect(calculate({ total: '10', next: null, operation: null }, '+/-')).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });

  it('should update operation when buttonName is an operation and there is an existing operation', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });

  it('should save operation and shift next to total when buttonName is an operation and there is a next value', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '-')).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });

  it('should save the operation when buttonName is an operation and there is no next value', () => {
    expect(calculate({ total: '10', next: null, operation: null }, '-')).toEqual({
      total: '10',
      next: null,
      operation: '-',
    });
  });
});

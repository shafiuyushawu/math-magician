import operate from '../logic/operate';

describe('operate', () => {
  it('add two numbers', () => {
    expect(operate(2, 8, '+')).toBe('10');
  });

  it('subtract two numbers', () => {
    expect(operate(4, 3, '-')).toBe('1');
  });

  it('divides two integers', () => {
    expect(operate(6, 2, '÷')).toBe('3');
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('Multiply two integers', () => {
    expect(operate('2', '4', 'x')).toBe('8');
  });

  it('calculate the modulo of two integers', () => {
    expect(operate(3, 2, '%')).toBe('1');
    expect(operate(6, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for an unknown operation', () => {
    expect(() => operate(2, 3, '&')).toThrow("Unknown operation '&'");
  });
});

import { render } from '@testing-library/react';
import CalculatorScreen from '../components/CalculatorScreen';

describe('CalculatorScreen', () => {
  it('renders correctly', () => {
    const objState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const { container } = render(<CalculatorScreen objState={objState} />);
    expect(container).toMatchSnapshot();
  });
  it('test buttons', () => {

  });
});

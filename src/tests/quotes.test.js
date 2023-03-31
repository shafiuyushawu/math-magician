import { render, screen } from '@testing-library/react';
import Quotes from '../components/Quotes';
import '@testing-library/jest-dom/extend-expect';

describe('Quotes component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          quote: 'Test quote',
          author: 'Test author',
        },
      ]),
    }));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('displays the quote and author', async () => {
    render(<Quotes />);

    const quote = await screen.findByText(/Test quote/);
    const author = await screen.findByText(/Test author/);

    expect(quote).toBeInTheDocument();
    expect(author).toBeInTheDocument();
  });
});

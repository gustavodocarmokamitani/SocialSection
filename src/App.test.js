import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Social', () => {
  render(<App />);
  const el = screen.getByText(/Social/i);
  expect(el).toBeInTheDocument();
});

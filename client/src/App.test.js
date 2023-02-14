import { render, screen } from '@testing-library/react';
import { App } from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders witihout crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>);
});

test('matches snapshot', () => {
  const { asFragment } =
  render(
      <MemoryRouter>
          <App />
      </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

jest.mock('axios');
test('displays landing page', async() => {
  render(
      <MemoryRouter>
          <App />
      </MemoryRouter>
  );
  const h1 = screen.getByText('Welcome to Yodlr!');
  expect(h1).toBeInTheDocument();
});

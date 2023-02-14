import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from './Navbar';
import userEvent from "@testing-library/user-event";
import { App } from './App';

test('renders Home without crashing', () => {
    render(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>);
});

test('matches snapshot', () => {
    const { asFragment } =
    render(
        <MemoryRouter>
            <Navbar/>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('signup link works', async() => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    const headingBefore = screen.queryByText('Yodlr Registration Portal');
    expect(headingBefore).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link', { name: 'Signup' }));
    
    await waitFor(() => {
        const headingAfter = screen.getByText('Yodlr Registration Portal');
        expect(headingAfter).toBeInTheDocument();
    });
});

test('admin link works', async() => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );

    const headingBefore = screen.queryByText('Admin Portal');
    expect(headingBefore).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('adminLink'));
    
    await waitFor(() => {
        const headingAfter = screen.getByText('Admin Portal');
        expect(headingAfter).toBeInTheDocument();
    });
});

test('home link works', async() => {
    render(
        <MemoryRouter>
                <App />
        </MemoryRouter>
    );

    userEvent.click(screen.getByRole('link', {name: 'Home'}));
    
    await waitFor(() => {
        const headingAfter = screen.getByText('Welcome to Yodlr!');
        expect(headingAfter).toBeInTheDocument();
    });
});
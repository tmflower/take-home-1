import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Signup } from './Signup';
import { Admin } from './Admin';
import userEvent from "@testing-library/user-event";

const users = [
    { "id": 1, "email": "kyle@getyodlr.com", "firstName": "Kyle", "lastName": "White", "state": "active"},
    { "id": 2, "email": "jane@getyodlr.com", "firstName": "Jane", "lastName": "Stone", "state": "active"},
    { "id": 3, "email": "lilly@getyodlr.com", "firstName": "Lilly", "lastName": "Smith", "state": "pending"},
    { "id": 4, "email": "fred@getyodlr.com", "firstName": "Fred", "lastName": "Miles", "state": "pending"},
    { "id": 5, "email": "alex@getyodlr.com", "firstName": "Alexandra", "lastName": "Betts", "state": "pending"}
    ]

test('renders Home without crashing', () => {
    render(
    <MemoryRouter>
        <Home />
    </MemoryRouter>);
});

test('matches snapshot', () => {
    const { asFragment } =
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('renders Home correctly', () => {
    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );
    const h1 = screen.getByText('Welcome to Yodlr!');
    expect(h1).toBeInTheDocument();
});

test('handles button click for user', async () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </MemoryRouter>
    );

    const headingBefore = screen.queryByText('Yodlr Registration Portal');
    expect(headingBefore).not.toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'User' }));
    
    await waitFor(() => {
        const headingAfter = screen.queryByText('Yodlr Registration Portal');
        expect(headingAfter).toBeInTheDocument();
    });
});

test('handles button click for admin', async () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/admin" element={<Admin users={users} />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </MemoryRouter>
    );

    const headingBefore = screen.queryByText('Admin Portal');
    expect(headingBefore).not.toBeInTheDocument();

    userEvent.click(screen.queryByRole('link', { name: 'Admin' }))
    
    await waitFor(() => {
        const headingAfter = screen.queryByText('Admin Portal');
        expect(headingAfter).toBeInTheDocument();
    });
});

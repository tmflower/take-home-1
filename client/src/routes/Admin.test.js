import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Admin } from './Admin';

const users = [
    { "id": 1, "email": "kyle@getyodlr.com", "firstName": "Kyle", "lastName": "White", "state": "active"},
    { "id": 2, "email": "jane@getyodlr.com", "firstName": "Jane", "lastName": "Stone", "state": "active"},
    { "id": 3, "email": "lilly@getyodlr.com", "firstName": "Lilly", "lastName": "Smith", "state": "pending"},
    { "id": 4, "email": "fred@getyodlr.com", "firstName": "Fred", "lastName": "Miles", "state": "pending"},
    { "id": 5, "email": "alex@getyodlr.com", "firstName": "Alexandra", "lastName": "Betts", "state": "pending"}
    ]

test('renders Home without crashing', () => {
    render(<MemoryRouter>
            <Admin users={users}/>
        </MemoryRouter>);
});

test('matches snapshot', () => {
    const { asFragment } =
    render(
        <MemoryRouter>
            <Admin users={users}/>
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('renders Admin correctly', () => {
    render(
        <MemoryRouter>
            <Admin users={users}/>
        </MemoryRouter>
    );
    const h1 = screen.getByText('Admin Portal');
    expect(h1).toBeInTheDocument();
});
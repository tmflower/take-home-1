import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Signup } from './Signup';
import userEvent from "@testing-library/user-event";
import axios from 'axios';

jest.mock('axios');

test('renders Home without crashing', () => {
    render(
        <MemoryRouter>
            <Signup/>
        </MemoryRouter>);
});

test('matches snapshot', () => {
    const { asFragment } =
    render(
        <MemoryRouter>
            <Signup />
        </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

test('renders Signup correctly', () => {
    render(
        <MemoryRouter>
            <Signup />
        </MemoryRouter>
    );
    const h1 = screen.getByText('Yodlr Registration Portal');
    expect(h1).toBeInTheDocument();
});

test('handles submit button click', async () => {
    render(
        <MemoryRouter>
            <Signup setUserAdded={() => console.log("user added")}/>
        </MemoryRouter>
    );

    const messageBefore = screen.queryByText(`Welcome to Yodlr, !`);
    expect(messageBefore).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
        const messageAfter = screen.queryByText(`Welcome to Yodlr, !`);
        expect(messageAfter).toBeInTheDocument();
    });
});
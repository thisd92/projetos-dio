import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node'

const response = { speaker: 'Speaker', quote: 'test quote' };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a quote and a button', () => {
    render(<App />);

    const textEl = screen.getByText(/loading speaker/i);
    const imageEl = screen.getByRole('img');
    const buttonEl = screen.getByRole('button');

    expect(textEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

 test('calls api on button click and update its text', async () => {
     render(<App />);

     const buttonEl = screen.getByRole('button');
     fireEvent.click(buttonEl);

     const quoteEl = await screen.findByText(response.quote);

     expect(quoteEl).toBeInTheDocument();
})

test('calls api on startup and renders it response', async () => {
    render(<App />);
    
    const quoteEl = await screen.findByText(response.quote);

    expect(quoteEl).toBeInTheDocument();
})
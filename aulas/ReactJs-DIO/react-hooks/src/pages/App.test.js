import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './App';

test('renders the app with a quote and a button', () => {
    render(<App />);

    const textEl = screen.getByText(/Speaker/);
    const imageEl = screen.getByRole('img');
    const buttonEl = screen.getByRole('button');

    expect(textEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});
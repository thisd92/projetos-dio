import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

test('render button with text', () => {
    render(<Button>teste</Button>);
    
    const buttonEl = screen.getByText('teste');

    expect(buttonEl).toBeInTheDocument();
});
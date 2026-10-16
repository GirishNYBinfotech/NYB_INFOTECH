import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component', () => {
  it('renders the counter heading', () => {
    render(<Counter />);

    expect(
      screen.getByRole('heading', { name: 'Counter App' })
    ).toBeInTheDocument();
  });

  it('displays the initial count as zero', () => {
    render(<Counter />);

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments the count when clicked', () => {
    render(<Counter />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Increment' })
    );

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements the count when clicked', () => {
    render(<Counter />);

    fireEvent.click(
      screen.getByRole('button', { name: 'Decrement' })
    );

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });
});

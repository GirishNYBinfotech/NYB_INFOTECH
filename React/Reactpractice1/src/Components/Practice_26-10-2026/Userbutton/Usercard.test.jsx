import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserCard from './Usercard';

describe('UserCard component', () => {
  const user = {
    name: 'Rahul',
    email: 'rahul@example.com',
    role: 'Developer',
  };

  it('renders the user information', () => {
    render(<UserCard {...user} />);

    expect(
      screen.getByRole('heading', { name: 'Rahul' })
    ).toBeInTheDocument();

    expect(
      screen.getByText('rahul@example.com')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Developer')
    ).toBeInTheDocument();
  });

  it('renders different data when props change', () => {
    render(
      <UserCard
        name="Priya"
        email="priya@example.com"
        role="Designer"
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Priya' })
    ).toBeInTheDocument();

    expect(
      screen.getByText('Designer')
    ).toBeInTheDocument();
  });
});

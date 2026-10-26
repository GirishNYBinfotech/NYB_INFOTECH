import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders the button label', () => {
    render(<Button>Save</Button>);

    expect(
      screen.getByRole('button', { name: 'Save' })
    ).toBeInTheDocument();
  });

  it('calls the click handler when clicked', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick}>
        Submit
      </Button>
    );

    await user.click(
      screen.getByRole('button', { name: 'Submit' })
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call the handler when disabled', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        Delete
      </Button>
    );

    const button = screen.getByRole('button', {
      name: 'Delete',
    });

    expect(button).toBeDisabled();

    await user.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });
});

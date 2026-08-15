import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './Button';

describe('Button', () => {
    it('renders its children', () => {
        render(<Button>Continue</Button>);

        expect(
            screen.getByRole('button', { name: 'Continue' }),
        ).toBeInTheDocument();
    });

    it('calls onClick when clicked', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Button onClick={handleClick}>
                Continue
            </Button>,
        );

        await user.click(
            screen.getByRole('button', { name: 'Continue' }),
        );

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();

        render(
            <Button disabled onClick={handleClick}>
                Continue
            </Button>,
        );

        const button = screen.getByRole('button', {
            name: 'Continue',
        });

        expect(button).toBeDisabled();

        await user.click(button);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('disables itself while loading', () => {
        render(
            <Button loading>
                Saving
            </Button>,
        );

        const button = screen.getByRole('button', {
            name: 'Saving',
        });

        expect(button).toBeDisabled();
        expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('renders the start icon', () => {
        render(
            <Button
                startIcon={
                    <svg data-testid="start-icon" />
                }
            >
                Add
            </Button>,
        );

        expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('renders the end icon', () => {
        render(
            <Button
                endIcon={
                    <svg data-testid="end-icon" />
                }
            >
                Continue
            </Button>,
        );

        expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('supports icon-only buttons', () => {
        render(
            <Button
                iconOnly
                aria-label="Close"
            >
                <svg />
            </Button>,
        );

        expect(
            screen.getByRole('button', {
                name: 'Close',
            }),
        ).toBeInTheDocument();
    });
});
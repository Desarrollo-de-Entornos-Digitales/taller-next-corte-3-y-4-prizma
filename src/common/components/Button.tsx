'use client';

import type { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    className = '',
}: ButtonProps) {
    const variantClass = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger: 'btn-error',
        ghost: 'btn-ghost',
    }[variant];

    const sizeClass = {
        sm: 'btn-sm',
        md: '',
        lg: 'btn-lg',
    }[size];

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`btn ${variantClass} ${sizeClass} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
        >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : children}
        </button>
    );
}

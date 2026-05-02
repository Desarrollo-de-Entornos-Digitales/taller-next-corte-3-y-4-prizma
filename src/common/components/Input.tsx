'use client';

import type { ChangeEvent } from 'react';

type InputProps = {
    label?: string;
    type?: string;
    name?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    className?: string;
};

export default function Input({
    label,
    type = 'text',
    name,
    placeholder,
    value,
    onChange,
    error,
    required = false,
    disabled = false,
    className = '',
}: InputProps) {
    return (
        <div className="form-control w-full">
            {label && (
                <label className="label">
                    <span className="label-text font-medium">
                        {label}
                        {required && <span className="text-error ml-1">*</span>}
                    </span>
                </label>
            )}

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={`input input-bordered w-full ${error ? 'input-error' : ''} ${className}`.trim()}
            />

            {error && (
                <label className="label">
                    <span className="label-text-alt text-error">{error}</span>
                </label>
            )}
        </div>
    );
}

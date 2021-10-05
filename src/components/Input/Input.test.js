import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import Input from './index'

describe('Tests for Input component', () => {
    it('should render the component input', () => {
        const placeholder = "placeholder"
        render(<Input type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        expect(input).toBeInTheDocument()
    });

    it('should call the onChange function when value is changed', () => {
        const placeholder = "placeholder"
        const onChange = jest.fn()
        render(<Input onChange={onChange} type='text' placeholder={placeholder} />);
        const input = screen.getByPlaceholderText(placeholder)
        fireEvent.change(input, {
            target: {
                value: '123'
            }
        })
        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('should have the provided placeholder', () => {
        const placeholder = "Email"
        render(<Input placeholder={placeholder} />)
        expect(screen.getAllByPlaceholderText("Email")).toBeTruthy()
    })
})

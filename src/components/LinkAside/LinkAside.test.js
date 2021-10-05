import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LinkAside from './index';

describe('Tests for LinkAside component', () => {
	it('should call a function when clicked', () => {
		const onClick = jest.fn();
		render(<LinkAside onClick={onClick}></LinkAside>);
		const li = screen.getByTestId('list-item')
		expect(li).toBeInTheDocument()

		fireEvent.click(li)
		expect(onClick).toHaveBeenCalledTimes(1)
	});

	it('should render the text provided', () => {
		const onClick = jest.fn();
		render(<LinkAside onClick={onClick}>Texto</LinkAside>);
		const texto = screen.getByText("Texto")
		expect(texto).toBeInTheDocument()
	});


});

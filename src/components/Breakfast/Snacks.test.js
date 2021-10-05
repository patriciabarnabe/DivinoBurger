import React from 'react';
import { render, screen } from '@testing-library/react';
import Snack from './Snack';

describe('Tests for Snack component', () => {
	it('should render products information', () => {
		render(<Snack/>);
    const sandwich = screen.getByText("Misto quente")
    const price = screen.getByText("R$ 10,00")
    expect(sandwich).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    
    		
	});

  it('should render a image', () => {
    render(<Snack/>);
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1)
  })

});
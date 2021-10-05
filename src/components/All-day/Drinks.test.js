import React from 'react';
import { render, screen } from '@testing-library/react';
import Drinks from './Drinks';

describe('Tests for Drinks component', () => {
	it('should render products information', () => {
		render(<Drinks/>);
    const water = screen.getByText('Água')
    const soda = screen.getByText('Refrigerante')
    const small = screen.getByText('500mL')
    const big= screen.getByText('750mL')
    const smallPrice = screen.getByText('R$ 5,00')
    const bigPrice = screen.getByText('R$ 7,00')
   

    expect(water).toBeInTheDocument()
    expect(soda).toBeInTheDocument()
    expect(small).toBeInTheDocument()
    expect(big).toBeInTheDocument()
    expect(smallPrice).toBeInTheDocument()
    expect(bigPrice).toBeInTheDocument()
    		
	});

  it('should render two images', () => {
    render(<Drinks/>);
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

});
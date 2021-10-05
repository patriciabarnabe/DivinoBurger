import React from 'react';
import { render, screen } from '@testing-library/react';
import Sides from './Sides';

describe('Tests for Sides component', () => {
	it('should render products information', () => {
		render(<Sides/>);
    const fries = screen.getByText('Batata Frita')
    const onionRings= screen.getByText('Anéis de cebola')
    const price = screen.getAllByText('R$ 5,00')
    expect(fries).toBeInTheDocument()
    expect(onionRings).toBeInTheDocument()
    expect(price).toHaveLength(2)
    		
	});

  it('should render two images', () => {
    render(<Sides/>);
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

});
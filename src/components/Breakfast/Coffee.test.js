import React from 'react';
import { render, screen } from '@testing-library/react';
import Coffee from './Coffee';

describe('Tests for Coffee component', () => {
	it('should render products information', () => {
		render(<Coffee/>);
    const american = screen.getByText('Café Americano')
    const milk= screen.getByText('Café com Leite')
    const americanPrice = screen.getByText('R$ 5,00')
    const milkPrice = screen.getByText('R$ 7,00')
    expect(american).toBeInTheDocument()
    expect(milk).toBeInTheDocument()
    expect(americanPrice).toBeInTheDocument()
    expect(milkPrice).toBeInTheDocument()
    		
	});

  it('should render two images', () => {
    render(<Coffee/>);
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Juice from './Juice';

describe('Tests for Juice component', () => {
	it('should render products information', () => {
		render(<Juice/>);
    const juice = screen.getByText('Suco de fruta natural')
    const price = screen.getByText('R$ 7,00')
    expect(juice).toBeInTheDocument()
    expect(price).toBeInTheDocument()
    
    		
	});

  it('should render a image', () => {
    render(<Juice/>);
    const image = screen.getAllByRole('img')
    expect(image).toHaveLength(1)
  })

});
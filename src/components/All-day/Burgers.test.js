import React from 'react';
import { render, screen } from '@testing-library/react';
import Burgers from './Burgers';

describe('Tests for Burgers component', () => {
	it('should render products information', () => {
		render(<Burgers/>);
    const simple = screen.getByText('Simples')
    const simplePrice = screen.getByText('R$ 10,00')
    const double = screen.getByText('Duplo')
    const doublePrice = screen.getByText('R$ 15,00')
    const meat = screen.getByText('Carne')
    const chicken = screen.getByText('Frango')
    const veggie = screen.getByText('Vegetariano')
    const cheese = screen.getByText('Queijo')
    const egg = screen.getByText('Ovo')
    const noExtra= screen.getByText('Sem extra')

    expect(simple).toBeInTheDocument()
    expect(double).toBeInTheDocument()
    expect(simplePrice).toBeInTheDocument()
    expect(doublePrice).toBeInTheDocument()
    expect(chicken).toBeInTheDocument()
    expect(meat).toBeInTheDocument()
    expect(veggie).toBeInTheDocument()
    expect(cheese).toBeInTheDocument()
    expect(egg).toBeInTheDocument()
    expect(noExtra).toBeInTheDocument()		
	});

  it('should render five images', () => {
    render(<Burgers/>);
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(5)
  })

});
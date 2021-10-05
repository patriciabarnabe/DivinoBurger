import React from 'react';
import { render, screen } from '@testing-library/react';
import Hall from './index';

describe('Tests for Register page', () => {
  
  it('should render texts', () => {
    render(<Hall/>);

    expect(screen.getByText('Breakfast')).toBeInTheDocument();
    expect(screen.getByText('All Day')).toBeInTheDocument();
    expect(screen.getByText('🔔 Pedidos')).toBeInTheDocument();
    expect(screen.getByText('Mesa')).toBeInTheDocument();
    expect(screen.getByText('Adicionar item')).toBeInTheDocument();
  

  });


  it('should render  a inputs with placeholder', () => {
    render(<Hall/>);
    const input = screen.getByPlaceholderText('Insira o nome do cliente')
    expect(input).toBeInTheDocument()
  });

});



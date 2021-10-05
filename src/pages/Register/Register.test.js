import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './index';

describe('Tests for Register page', () => {
  it('should render two buttons', () => {
    render(<Register />);

    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(2);
  });

  it('should render texts', () => {
    render(<Register />);

    expect(screen.getByText('Cadastro')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar')).toBeInTheDocument();

  });

  it('should render two inputs radio', () => {
    render(<Register />);
    const inputs = screen.getAllByRole('radio')
    expect(inputs).toHaveLength(2)

  });

  it('should render  inputs with placeholders', () => {
    render(<Register />);
    const input1 = screen.getByPlaceholderText('Email')
    expect(input1).toBeInTheDocument()
    const input2 = screen.getByPlaceholderText('Senha')
    expect(input2).toBeInTheDocument()
    const input3 = screen.getByPlaceholderText('Nome completo')
    expect(input3).toBeInTheDocument()
  });

});



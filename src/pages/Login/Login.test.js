import React from 'react';
import { render, screen} from '@testing-library/react';
import Login from './index';


describe('Tests for Login page', () => {
  it('should render one button and one image', () => {
    render(<Login />);

    const button = screen.getByRole('button');
    const img = screen.getByRole('img');

    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it('should render texts', () => {
    render(<Login />);

    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Primeiro acesso?')).toBeInTheDocument();
    expect(screen.getByText('Cadastre-se')).toBeInTheDocument();

  });

  it('should render two inputs', () => {
    render(<Login />);
    const input1=screen.getByPlaceholderText('Email')
    expect(input1).toBeInTheDocument()
    const input2=screen.getByPlaceholderText('Senha')
    expect(input2).toBeInTheDocument()

  });
});
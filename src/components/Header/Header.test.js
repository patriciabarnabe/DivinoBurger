import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';


describe('Tests for Header component', () => {
  it('should render the text provided', () => {
    const text = 'Divino Burger';
    render(<Header>{text}</Header>);
    const texto = screen.getByText(text);
    expect(texto).toBeInTheDocument();
  });


  it('should call a ButtonImg component', () => {
    render(<Header></Header>);
    const btn = screen.getAllByRole('button')
    expect(btn).toHaveLength(2)
  });

});

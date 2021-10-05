import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Popup from './index'
import ButtonDefault from "../ButtonDefault/index"


describe('Tests for Popup component', () => {
  it('should render a popup with the text and functions', () => {
    const popUpText = "Texto do popup";
    const onClose = jest.fn
    render(<Popup popupText={popUpText} onClose={onClose}></Popup>);
    const texto = screen.getByText(popUpText)
    expect(texto).toBeInTheDocument();
  });

  it('should render a button with the text provided', () => {
    const texto = "Texto do botão";
    render(<ButtonDefault>{texto}</ButtonDefault>);
    const btn = screen.getByText(texto)
    expect(btn).toBeInTheDocument();
  });

  it('should call a function when clicked', () => {
    const onClick = jest.fn()
    render(<ButtonDefault onClick={onClick}/>)
    const btn = screen.getByRole('button')
    expect(onClick).toHaveBeenCalledTimes(0)
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })
});
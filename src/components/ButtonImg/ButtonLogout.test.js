import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import ButtonImg from './index'


describe('Tests for ButtonImg component', () => {
  it('should render a button', () => {

    render(<ButtonImg></ButtonImg>);
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument();
  });


  it('should handle navigation', () => {
    
    const onClick = jest.fn();
    render(
        <ButtonImg onClick={onClick}/>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })


});
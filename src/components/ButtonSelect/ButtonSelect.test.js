import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonSelect from './index'



describe('Tests for ButtonRadio component', () => {

  
  it('should render three radio buttons with the informations provided', () => {
    

    render(<ButtonSelect  />);

    const input1 = screen.getByLabelText("Salão")
    const input2 = screen.getByLabelText("Cozinha")
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();


  });

  

  it('should change the checked input and call a function when any button is clicked', () => {
    const onChange = jest.fn()
    render(<ButtonSelect onChange={onChange} />);
    const input1 = screen.getByLabelText("Salão")
    const input2 = screen.getByLabelText("Cozinha")
    
   
    fireEvent.click(input1)

    expect(input1.checked).toEqual(true)
    expect(input2.checked).toEqual(false)
  

    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(input2)

    expect(input1.checked).toEqual(false)
    expect(input2.checked).toEqual(true)
   

    expect(onChange).toHaveBeenCalledTimes(2)
    
  })
})
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonRadio from './index'


const name = "radio"
const firstInputValue = "value-1"
const firstInputId = "value-1"
const firstLabel = "Valor 1"
const secondInputValue = "value-2"
const secondInputId = "value-2"
const secondLabel = "Valor 2"
const thirdInputValue = "value-3"
const thirdInputId = "value-3"
const thirdLabel = "Valor 3"

describe('Tests for ButtonRadio component', () => {

  
  it('should render three radio buttons with the informations provided', () => {
    

    render(<ButtonRadio name={name} firstInputValue={firstInputValue} firstInputId={firstInputId} firstLabel={firstLabel} secondInputValue={secondInputValue} secondInputId={secondInputId} secondLabel={secondLabel} thirdInputValue={thirdInputValue} thirdInputId={thirdInputId} thirdLabel={thirdLabel} />);

    const input1 = screen.getByLabelText(firstLabel)
    const input2 = screen.getByLabelText(secondLabel)
    const input3 = screen.getByLabelText(thirdLabel)
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();

  });

  it('should change the value when a input is selected', () => {
    render(<ButtonRadio name={name} firstInputValue={firstInputValue} firstInputId={firstInputId} firstLabel={firstLabel} secondInputValue={secondInputValue} secondInputId={secondInputId} secondLabel={secondLabel} thirdInputValue={thirdInputValue} thirdInputId={thirdInputId} thirdLabel={thirdLabel} />);
    const input1 = screen.getByLabelText(firstLabel)
    const input2 = screen.getByLabelText(secondLabel)
     
    fireEvent.change(input1, {
      target: {
        value: secondInputValue
      }
    });
    expect(input1.value).toBe(secondInputValue)

    fireEvent.change(input2, {
      target: {
        value: thirdInputValue
      }
    });

    expect(input2.value).toBe(thirdInputValue)

  })

  it('should change the checked input and call a function when any button is clicked', () => {
    const onChange = jest.fn()
    render(<ButtonRadio onChange={onChange} name={name} firstInputValue={firstInputValue} firstInputId={firstInputId} firstLabel={firstLabel} secondInputValue={secondInputValue} secondInputId={secondInputId} secondLabel={secondLabel} thirdInputValue={thirdInputValue} thirdInputId={thirdInputId} thirdLabel={thirdLabel} />);
    const input1 = screen.getByLabelText(firstLabel)
    const input2 = screen.getByLabelText(secondLabel)
    const input3 = screen.getByLabelText(thirdLabel)
   
    fireEvent.click(input1)

    expect(input1.checked).toEqual(true)
    expect(input2.checked).toEqual(false)
    expect(input3.checked).toEqual(false)

    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(input3)

    expect(input1.checked).toEqual(false)
    expect(input2.checked).toEqual(false)
    expect(input3.checked).toEqual(true)

    expect(onChange).toHaveBeenCalledTimes(2)
    
  })
})
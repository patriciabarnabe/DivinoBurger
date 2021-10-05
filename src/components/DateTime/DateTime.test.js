import React from 'react'
import { render } from '@testing-library/react'
import DateTime from './index'


describe('Tests for DateTime component', () => {
  it('should render the local date and time', () => {
    const texto = "27 set. 2021, Segunda-feira - 🕐16:46h"
    render(<DateTime>{texto}</DateTime>)
  });
});

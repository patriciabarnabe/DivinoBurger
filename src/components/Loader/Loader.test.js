import React from 'react';
import { render} from '@testing-library/react';

import Loader from './index'

describe('Tests for Loader component', () => {
	it('should render classes "loader-container" and "lds-roller"', () => {
		render(<Loader/>);
    const { container } = render(<Loader/>)
    expect(container.getElementsByClassName('loader-container')).toHaveLength(1)
    expect(container.getElementsByClassName('lds-roller')).toHaveLength(1)
    
	});


});
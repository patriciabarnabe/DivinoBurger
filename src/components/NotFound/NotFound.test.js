import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

describe('Tests for NotFound component', () => {
	it('should render the text provided', () => {
		const texto = 'Página não encontrada';
		render(<NotFound>{texto}</NotFound>);

		const textoP = screen.getByText('404');
		expect(textoP).toBeInTheDocument();
	});
});

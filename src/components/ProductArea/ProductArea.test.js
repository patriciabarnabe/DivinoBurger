import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductArea from './index';

const productImg = "imagemSrc"
const productImgAlt = "produto"
const productName = "Nome do produto"
const productPrice = "R$ 20,00"
const inputId = "input"
const inputName = "input-name"
const inputValue = "input-value"


describe('Tests for ProductArea page', () => {
	it('should render a radio button', () => {
		render(<ProductArea productImg={productImg} productImgAlt={productImgAlt} productName={productName} productPrice={productPrice} inputId={inputId} inputName={inputName} inputValue={inputValue} />);
		const input = screen.getByRole('radio')
		expect(input).toBeInTheDocument()

	});

	it('should render a image', () => {
		render(<ProductArea />);

		const img = screen.getByRole('img');
		expect(img).toBeInTheDocument();
	});

	it('should render the product information provided', () => {
		render(<ProductArea productImg={productImg} productImgAlt={productImgAlt} productName={productName} productPrice={productPrice} inputId={inputId} inputName={inputName} inputValue={inputValue} />);
		const name = screen.getByText(productName)
		const price = screen.getByText(productName)


		expect(name).toBeInTheDocument()
		expect(price).toBeInTheDocument()

	});

	it('should call a function when clicked', () => {
		const onClick = jest.fn()
		render(<ProductArea onClick={onClick} productImg={productImg} productImgAlt={productImgAlt} productName={productName} productPrice={productPrice} inputId={inputId} inputName={inputName} inputValue={inputValue} />);
		const product = screen.getByTestId("product-item")
		expect(product).toBeInTheDocument()
		fireEvent.click(product)
		expect(onClick).toHaveBeenCalledTimes(1)
	});
});

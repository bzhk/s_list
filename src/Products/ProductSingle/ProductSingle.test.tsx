import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductSingle from './ProductSingle';

const product = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
};
test('render brand', () => {
    render(<ProductSingle product={product} />);
    const element = screen.getByText("Apple");
    expect(element).toBeInTheDocument();
});

test('render category', () => {
    render(<ProductSingle product={product} />);
    const element = screen.getByText("smartphones");
    expect(element).toBeInTheDocument();
});

test('render name', () => {
    render(<ProductSingle product={product} />);
    const element = screen.getByText("iPhone 9");
    expect(element).toBeInTheDocument();
});

test('render price', () => {
    render(<ProductSingle product={product} />);
    const element = screen.getByText("549 PLN");
    expect(element).toBeInTheDocument();
});

test('render description', () => {
    render(<ProductSingle product={product} />);
    const element = screen.getByText("An apple mobile which is nothing like apple");
    expect(element).toBeInTheDocument();
});

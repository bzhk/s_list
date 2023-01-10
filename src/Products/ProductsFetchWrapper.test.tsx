import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductsFetchWrapper from './ProductsFetchWrapper';


test('Compontent loading', () => {
    render(<ProductsFetchWrapper loaded={false} error={""} products={[]} />);
    const element = screen.getByText(/Loading.../i);
    expect(element).toBeInTheDocument();
});

test('Compontent show error', () => {
    render(<ProductsFetchWrapper loaded={false} error={"Fetch fail"} products={[]} />);
    const element = screen.getByText(/Fetch fail/i);
    expect(element).toBeInTheDocument();
});

test('Compontent show products', () => {
    render(<ProductsFetchWrapper loaded={true} error={""} products={[]} />);
    const element = screen.getByTestId("Products_main_container");
    expect(element).toBeInTheDocument();
});
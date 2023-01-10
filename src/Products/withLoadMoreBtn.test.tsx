
import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import products from "../data.json";
import withLoadMoreBtn from './withLoadMoreBtn';

describe('withFilters.test', () => {
    let ProductsWithLoadMoreBtn: any;
    beforeAll(() => ProductsWithLoadMoreBtn = withLoadMoreBtn(() => <div></div>));
    it('init view', () => {
        render(<ProductsWithLoadMoreBtn products={products} />);
        const element = screen.getByText(`Products 5/${products.length}`);
        expect(element).toBeInTheDocument();
        const btn = screen.getByTestId(`loadMore_btn`);
        expect(btn).toBeInTheDocument();
    });
    it('view after load more', () => {
        const slicesProducts = products.slice(0, 9);
        render(<ProductsWithLoadMoreBtn products={slicesProducts} />);
        const btn = screen.getByTestId(`loadMore_btn`);
        fireEvent.click(btn);
        const element = screen.getByText(`Products ${slicesProducts.length}/${slicesProducts.length}`);
        expect(element).toBeInTheDocument();

    });
    it('view after load max', () => {
        const slicesProducts = products.slice(0, 9);
        render(<ProductsWithLoadMoreBtn products={slicesProducts} />);
        const btn = screen.getByTestId(`loadMore_btn`);
        fireEvent.click(btn);
        expect(btn).not.toBeInTheDocument();
    });
})



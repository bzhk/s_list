
import React from 'react';
import { } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import withFilteres from './withFilters';
import products from "../data.json";

describe('withFilters.test', () => {
    let ProductsWithFilteres: any;
    beforeAll(() => ProductsWithFilteres = withFilteres(() => <div></div>));
    it('filters count', () => {
        render(<ProductsWithFilteres products={products} filtersKeys={['title']} />);
        const elements = screen.getAllByTestId("FilterSingle_container");
        expect(elements.length).toBe(1);
    });
})



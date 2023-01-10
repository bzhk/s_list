import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductsList from './ProductsList';

test('render container', () => {
    render(<ProductsList products={[]} filtersKeys={[]} />);
    const container = screen.getByTestId('ProductsList_main_container');
    expect(container).toBeInTheDocument();
});

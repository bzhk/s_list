import React from 'react';
import { render, screen } from '@testing-library/react';
import FiltersList from './FiltersList';

test('render container', () => {
    render(<FiltersList filters={[]} setProductsFilters={() => { }} />);
    const container = screen.getByTestId('FiltersList_main_container');
    expect(container).toBeInTheDocument();
});

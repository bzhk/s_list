import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterSingle from './FilterSingle';


const testFilter = {
    label: "TestFilter",
    values: [
        "1", "2", "3", "4"
    ]
};
test('Compontent label', () => {
    render(<FilterSingle filter={testFilter} onChange={() => { }} />);
    const label = screen.getByText("TestFilter");
    expect(label).toBeInTheDocument();
});

test('Compontent default option', () => {
    render(<FilterSingle filter={testFilter} onChange={() => { }} />);
    const defaultOption = screen.getByText("Select option");
    expect(defaultOption).toBeInTheDocument();
});

test('Compontent option', () => {
    render(<FilterSingle filter={testFilter} onChange={() => { }} />);
    const option = screen.getByText("1");
    expect(option).toBeInTheDocument();
});
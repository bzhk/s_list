
import { } from '@testing-library/react';
import IFilterField from '../../Interfaces/IFilterField';
import CreateFiltersFromDataHook from './CreateFiltersFromDataHook';

const products = [
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
    },
];
const keys = ['title'];
describe('CreateFiltersFromDataHook', () => {
    let productsFilters: IFilterField[];
    beforeAll(() => {
        productsFilters = CreateFiltersFromDataHook(products, keys);
    })
    it('test filters count', () => {
        expect(productsFilters.length).toBe(1)
    })
    it('test filter title options', () => {
        expect(productsFilters[0].values).toEqual(['iPhone 9', 'iPhone X'])
    })
})
import React, { FC, useReducer } from "react";
import IProduct from "../Interfaces/IProduct";
import CreateFiltersFromDataHook from "./Filters/CreateFiltersFromDataHook";
import FiltersList from "./Filters/FiltersList/FiltersList";
import ProductsListStateReducer from "./ProductsListStateReducer/ProductsListStateReducer";
import TProductFilters from "./ProductsListStateReducer/TProductFilters";

const filterProducts = (products: IProduct[], filters: TProductFilters): IProduct[] => {
    if (!filters) return [];
    const filtersKeys = Object.keys(filters);
    return products.filter(p => {
        return filtersKeys.every(key => {
            const keyTyped = key as keyof typeof p;
            return filters[key] !== "" ? p[keyTyped].toString() === filters[key] : true;
        })
    });
}

interface IWithFilteres {
    products: IProduct[];
    filtersKeys: string[];
}
const withFilters = <P extends IWithFilteres>(OriginalComponent: FC<{ products: IProduct[] }>) => {
    return (props: P) => {
        const { products, filtersKeys, ...rest } = props;

        const filtersToRender = CreateFiltersFromDataHook(products, filtersKeys);
        const [productsListState, setProductsListState] = useReducer(ProductsListStateReducer, { filters: {}, version: "1" });

        return <>
            <FiltersList filters={filtersToRender} setProductsFilters={setProductsListState} />
            <OriginalComponent  {...rest} key={productsListState.version} products={filterProducts(products, productsListState.filters)} />
        </>
    }
}
export default withFilters;
import TProductFilters from "../ProductsListStateReducer/TProductFilters";

interface IProductsListState {
    filters: TProductFilters;
    version: string;
}

export default IProductsListState;
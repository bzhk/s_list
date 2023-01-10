

import IProductsListState from "./IProductsListState";
import EProductsReducerActions from "./EProductsReducerActions";

const ProductsListStateReducer = (state: IProductsListState, action: { type: EProductsReducerActions, payload: { key: string, value: string } | null }) => {

    const setFilterValue = (state: IProductsListState, payload: { key: string, value: string }) => {
        const newFilters = { ...state.filters };
        newFilters[payload.key] = payload.value;
        return { ...state, filters: newFilters, version: Date.now().toString() }
    }


    switch (action.type) {
        case (EProductsReducerActions.SET_FILTER):
            return setFilterValue(state, action.payload as { key: string, value: string });
        default:
            return state;
    }

}

export default ProductsListStateReducer;
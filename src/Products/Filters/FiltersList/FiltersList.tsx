import TFilterField from "../../../Interfaces/IFilterField";
import EProductsReducerActions from "../../ProductsListStateReducer/EProductsReducerActions";
import FilterSingle from "../FilterSingle/FilterSingle";


const FiltersList = ({ filters, setProductsFilters }: { filters: TFilterField[], setProductsFilters: Function }) => {
    return <div data-testid="FiltersList_main_container">
        {filters.map(f => <FilterSingle key={f.label} filter={f} onChange={(value: string) => {
            setProductsFilters({
                type: EProductsReducerActions.SET_FILTER,
                payload: {
                    key: f.label,
                    value: value
                }
            })
        }} />)}
    </div>
}

export default FiltersList;
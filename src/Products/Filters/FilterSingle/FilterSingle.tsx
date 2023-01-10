
import TFilterField from "../../../Interfaces/IFilterField";


const FilterSingle = ({ filter, onChange }: { filter: TFilterField, onChange: (value: string) => void }) => {
    return <div data-testid="FilterSingle_container">
        <label htmlFor={filter.label}>{filter.label}</label>
        <select name={filter.label} onChange={(ev) => onChange(ev.target.value)}>
            <option value="">Select option</option>
            {filter.values.map(v => <option key={v} value={v}>{v}</option>)}
        </select>
    </div>
}

export default FilterSingle;
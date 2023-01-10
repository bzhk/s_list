
import IFilterField from "../../Interfaces/IFilterField";


const CreateFiltersFromDataHook = (data: object[], keys: string[]): IFilterField[] => {

    const sortValuesByKey = (data: object[]) => {
        const allSortedValuesByKey: Record<string, string[]> = {};
        data.forEach((elem) => {
            Object.keys(elem).forEach((elemKey) => {
                const elemKeyTyped = elemKey as keyof typeof elem;
                if (allSortedValuesByKey[elemKey]) {
                    if (!allSortedValuesByKey[elemKey].includes(elem[elemKeyTyped])) {
                        allSortedValuesByKey[elemKey] = [...allSortedValuesByKey[elemKey], elem[elemKeyTyped]];
                    }
                } else {
                    allSortedValuesByKey[elemKey] = [elem[elemKeyTyped]];
                }
            })
        });
        return allSortedValuesByKey;
    }

    const filterKeys = (filters: Record<string, string[]>, keys: string[]): IFilterField[] => {
        return Object.keys(filters)
            .filter(key => keys.includes(key))
            .map(key => {
                return {
                    values: filters[key],
                    label: key,
                }
            });
    }

    return filterKeys(sortValuesByKey(data), keys);
}

export default CreateFiltersFromDataHook;
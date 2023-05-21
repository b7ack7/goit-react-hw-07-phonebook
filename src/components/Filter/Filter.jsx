import { useDispatch, useSelector } from 'react-redux';
import { getFilterValue } from 'store/filterSlice';
import { selectFilter } from 'store/selectors';
import { FilterWrapper, Label, Input } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    return (
        <FilterWrapper>
             <Label htmlFor="filter">Find contacts by name</Label>
          <Input
          id="filter"
          type="text"
          name="filter"
          value={filter}
          onInput={(event) => dispatch(getFilterValue(event.target.value))}
        />
        </FilterWrapper>
    )
}


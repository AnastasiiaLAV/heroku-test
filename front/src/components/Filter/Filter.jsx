import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter} from 'redux/selectors';
import { filterContacts } from 'redux/filter/filter-action';

const Filter = () => {
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const onFilterContacts = ({target}) =>{
        dispatch(filterContacts(target.value))
    }
    
    return (
        <Label htmlFor="filter">
            Find contacts by name 
            <Input type="text" name="filter" onChange={onFilterContacts} value={filter} />
        </Label>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Filter;
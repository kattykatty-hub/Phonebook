import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search contacts"
      value={filterValue}
      onChange={handleChange}
    />
  );
};

export default SearchBox;

import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../../store/reducers/filter';
import css from './filter.module.css'


const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts by name"
      className={css.input}
    />
  );
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterChange: (event) => dispatch(setFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
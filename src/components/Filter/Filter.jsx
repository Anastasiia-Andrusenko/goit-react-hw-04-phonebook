
// import { Component } from "react";
import css from "../Filter/Filter.module.css";
import PropTypes from 'prop-types';


const Filter = ({onFilterInput, filter}) => {
  
const onInput = (evt) => {
    const filterValue = evt.currentTarget.value.trim();
    // console.log(filterValue);
    onFilterInput(filterValue);
  };
  
  return <div className={css.box}>
      <form name="search" className={css.form}>
        <label className={css.label}>
          Find contacts by name
          <input type="search"
            className={css.input}
            name="txt"
            onChange={onInput}
            value={filter}
          >
          </input>
        </label>
      </form>
    </div>
}

export default Filter;

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}
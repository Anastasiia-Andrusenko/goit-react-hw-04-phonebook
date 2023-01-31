
import { Component } from "react";
import css from "../Filter/Filter.module.css";
import PropTypes from 'prop-types';

export class Filter extends Component {  

  onInput = (evt) => {
    const filterValue = evt.currentTarget.value.trim();
    // console.log(filterValue);
    this.props.onFilterInput(filterValue);
  };


  render() {
    return <div className={css.box}>
      <form name="search" className={css.form}>
        <label className={css.label}>
          Find contacts by name
          <input type="search"
            className={css.input}
            name="txt"
            onChange={this.onInput}
            value={this.props.filter}
          >
          </input>
        </label>
      </form>
    </div>
  }
}

Filter.propTypes = {
  onFilterInput: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
}
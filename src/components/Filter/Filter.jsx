import PropTypes from 'prop-types';
import css from './Filter.module.css';
import React, { Component } from 'react';

 export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div className={css.filter}>
        <label>
          Filter:
          <input
            className={css.filterInput}
            type="name"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


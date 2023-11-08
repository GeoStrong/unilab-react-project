import { Fragment } from 'react';
import './Filter.scss';

const Filter = ({ searchChangeHandler, popupClickHandler }) => {
  return (
    <Fragment>
      <button
        onClick={popupClickHandler}
        tabIndex={4}
        className="filter-button"
      >
        filter
      </button>
      <input
        type="text"
        tabIndex={5}
        className="filter-input"
        placeholder="search by name"
        onChange={searchChangeHandler}
      />
    </Fragment>
  );
};
export default Filter;

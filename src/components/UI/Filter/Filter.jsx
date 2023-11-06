import { Fragment } from 'react';
import './Filter.scss';

const Filter = ({ searchChangeHandler, popupClickHandler }) => {
  return (
    <Fragment>
      <button onClick={popupClickHandler} className="filter-button">
        filter
      </button>
      <input
        type="text"
        className="filter-input"
        placeholder="search by name"
        onChange={searchChangeHandler}
      />
    </Fragment>
  );
};
export default Filter;

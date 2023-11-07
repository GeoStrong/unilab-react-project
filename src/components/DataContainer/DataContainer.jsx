import { useDispatch, useSelector } from 'react-redux';
import Filter from '../UI/Filter/Filter';
import './DataContainer.scss';
import DataValue from './DataValue';
import { useEffect, useState } from 'react';
import { dataFilterActions } from '../../store/dataFilter';
import { popupActions } from '../../store/popup';
import FilterPopup from '../Popup/FilterPopup/FilterPopup';
import { useLocation } from 'react-router-dom';

const DataContainer = ({ dataPerPage, rowValues }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { filterPopup } = useSelector((state) => state.popup);
  const [searchValue, setSearchValue] = useState('');
  const locationCheck = location.pathname === '/api';

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
    dispatch(dataFilterActions.activePageHandler(1));
  };

  const onPopupClick = () => {
    dispatch(popupActions.filterPopupHandler(!filterPopup));
  };

  useEffect(() => {
    dispatch(dataFilterActions.filterByNameHandler(searchValue));
  }, [dispatch, searchValue]);

  return (
    <main className="main-data">
      {!locationCheck && (
        <div className="data-filter">
          <Filter
            searchChangeHandler={onSearchChange}
            popupClickHandler={onPopupClick}
          />
          {filterPopup && <FilterPopup />}
        </div>
      )}
      <div className={`data-container  ${locationCheck && 'no-scroll'}`}>
        <ul className="data-container__row">
          {rowValues.map((value, index) => (
            <li key={index} className="data-container__value">
              {value}
            </li>
          ))}
        </ul>
        {dataPerPage.map((item) => (
          <DataValue
            key={item.personId ? item.personId : item.id}
            item={item}
          />
        ))}
      </div>
    </main>
  );
};

export default DataContainer;

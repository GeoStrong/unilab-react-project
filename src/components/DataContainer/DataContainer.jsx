import { useDispatch, useSelector } from 'react-redux';
import Filter from '../UI/Filter/Filter';
import './DataContainer.scss';
import DataValue from './DataValue';
import FilterPopup from '../FilterPopup/FilterPopup';
import { useEffect, useState } from 'react';
import { dataFilterActions } from '../../store/dataFilter';
import { popupActions } from '../../store/popup';

const DataContainer = ({ data }) => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((state) => state.dataFilter);
  const { filterPopup } = useSelector((state) => state.popup);
  const [searchValue, setSearchValue] = useState('');

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

  const dataPerPage = data.filter((item) => item.page === activePage);

  return (
    <main className="main-data">
      <div className="data-filter">
        <Filter
          searchChangeHandler={onSearchChange}
          popupClickHandler={onPopupClick}
        />
        {filterPopup && <FilterPopup />}
      </div>
      <div className="data-container">
        <ul className="data-container__row">
          <li className="data-container__value">სტუდენტის სახელი და გვარი</li>
          <li className="data-container__value">სტატუსი</li>
          <li className="data-container__value">სქესი</li>
          <li className="data-container__value">ქულები</li>
          <li className="data-container__value">პირადი ნომერი</li>
          <li className="data-container__value">მაილი</li>
          <li className="data-container__value">მობილურის ნომერი</li>
          <li className="data-container__value">მისამართი</li>
          <li className="data-container__value">დაბადების თარიღი</li>
        </ul>
        {dataPerPage.map((item) => (
          <DataValue key={item.personId} item={item} />
        ))}
      </div>
    </main>
  );
};

export default DataContainer;

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import expandArrow from '../../../assets/img/expand-arrow.svg';
import './FilterPopup.scss';
import { dataFilterActions } from '../../../store/dataFilter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useReducer } from 'react';

const initialFilter = {
  status: ['active', 'inactive'],
  gender: ['male', 'female'],
};

const filterReducer = (state, action) => {
  if (action.type === 'status') {
    return {
      status: [...state.status, action.status],
      gender: state.gender,
    };
  }
  if (action.type === 'deleteStatus') {
    return {
      status: [...state.status.filter((item) => item !== action.status)],
      gender: state.gender,
    };
  }
  if (action.type === 'gender') {
    return {
      status: state.status,
      gender: [...state.gender, action.gender],
    };
  }
  if (action.type === 'deleteGender') {
    return {
      status: state.status,
      gender: [...state.gender.filter((item) => item !== action.gender)],
    };
  }
  if (action.type === 'reset') {
    return { status: ['active', 'inactive'], gender: ['male', 'female'] };
  }
  return initialFilter;
};

const FilterPopup = () => {
  const dispatch = useDispatch();
  const { localData } = useSelector((state) => state.dataFilter);
  const [filterContainerState, dispatchFilter] = useReducer(
    filterReducer,
    initialFilter
  );

  const inputFilterHandler = (event) => {
    if (event.target.checked) {
      (event.target.id === 'active' || event.target.id === 'inactive') &&
        dispatchFilter({
          type: 'status',
          status: event.target.id,
        });
      (event.target.id === 'male' || event.target.id === 'female') &&
        dispatchFilter({
          type: 'gender',
          gender: event.target.id,
        });
    } else {
      (event.target.id === 'active' || event.target.id === 'inactive') &&
        dispatchFilter({
          type: 'deleteStatus',
          status: event.target.id,
        });
      (event.target.id === 'male' || event.target.id === 'female') &&
        dispatchFilter({
          type: 'deleteGender',
          gender: event.target.id,
        });
    }
    dispatch(dataFilterActions.activePageHandler(1));
  };

  useEffect(() => {
    const filterArray = Object.entries(filterContainerState).flat();

    const filteredData = localData.filter((item) => {
      const keyValues = filterArray.reduce((result, filterItem, index) => {
        if (index % 2 === 0) {
          result.push({ key: filterItem, values: filterArray[index + 1] });
        }
        return result;
      }, []);

      if (keyValues[0].values.length === 0 && keyValues[1].values.length === 0)
        return false;

      return keyValues.every(({ key, values }) => {
        if (values.length === 0 || values.includes(item[key].toLowerCase())) {
          return true;
        }
        return false;
      });
    });
    dispatch(dataFilterActions.filterDataHandler(filteredData));
  }, [dispatch, filterContainerState, localData]);

  return (
    <div className="filter-popup">
      <Accordion allowMultipleExpanded preExpanded={['expandedItem']}>
        <AccordionItem uuid="expandedItem"></AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="filter-popup__button">
              <img src={expandArrow} alt="expand" /> სტუდენტის სტატუსი
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="filter-popup__panel">
              <label htmlFor="active" className="filter-popup__checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  // checked={inputValue === '' ? true : false}
                  id="active"
                  onChange={inputFilterHandler}
                />
                <div></div>
                <h3>Active</h3>
              </label>
              <label htmlFor="inactive" className="filter-popup__checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  // checked={inputValue === '' ? true : false}
                  id="inactive"
                  onChange={inputFilterHandler}
                />
                <div></div>
                <h3 htmlFor="inactive">Inactive</h3>
              </label>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton className="filter-popup__button">
              <img src={expandArrow} alt="expand" />
              სქესი
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="filter-popup__panel">
              <label htmlFor="male" className="filter-popup__checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  // checked={inputValue === '' ? true : false}
                  id="male"
                  onChange={inputFilterHandler}
                />
                <div></div>
                <h3>Male</h3>
              </label>
              <label htmlFor="female" className="filter-popup__checkbox">
                <input
                  type="checkbox"
                  defaultChecked={true}
                  // checked={inputValue === '' ? true : false}
                  id="female"
                  onChange={inputFilterHandler}
                />
                <div></div>
                <h3 htmlFor="female">Female</h3>
              </label>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterPopup;

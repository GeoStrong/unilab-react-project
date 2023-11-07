import './Pagination.scss';
import fullLeftArrow from '../../assets/img/f-left.svg';
import leftArrow from '../../assets/img/left.svg';
import fullRightArrow from '../../assets/img/f-right.svg';
import rightArrow from '../../assets/img/right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { dataFilterActions } from '../../store/dataFilter';

const Pagination = ({ data }) => {
  const dispatch = useDispatch();
  const { activePage } = useSelector((state) => state.dataFilter);
  const pageAmount = Array.from(new Set(data.map((item) => item.page)));

  const pageCheck = (pageIndex) => activePage === pageAmount.at(pageIndex);

  const onPageNumberClick = (event) => {
    dispatch(dataFilterActions.activePageHandler(+event.target.dataset.id));
  };

  const onArrowClick = (event) => {
    dispatch(
      dataFilterActions.activePageHandler(
        activePage + +event.target.parentElement.dataset.action
      )
    );
  };

  return (
    <div className={`pagination ${data.length === 0 ? 'hidden' : null}`}>
      <div className={`pagination__arrow ${pageCheck(0) ? 'hidden' : ''}  `}>
        <button
          className="pagination__button"
          data-action={-activePage + 1}
          onClick={onArrowClick}
        >
          <img src={fullLeftArrow} alt="arrow" />
        </button>
        <button
          className="pagination__button"
          data-action={-1}
          onClick={onArrowClick}
        >
          <img src={leftArrow} alt="arrow" />
        </button>
      </div>
      <div className="pagination__pages">
        {pageAmount.map((page) => {
          return (
            <button
              className={`pagination__button ${
                activePage === page ? 'active' : ''
              }`}
              data-id={page}
              key={page}
              onClick={onPageNumberClick}
            >
              {page}
            </button>
          );
        })}
      </div>
      <div className={`pagination__arrow ${pageCheck(-1) ? 'hidden' : ''}  `}>
        <button
          className="pagination__button"
          data-action={1}
          onClick={onArrowClick}
        >
          <img src={rightArrow} alt="arrow" />
        </button>
        <button
          className="pagination__button"
          data-action={pageAmount.length - activePage}
          onClick={onArrowClick}
        >
          <img src={fullRightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;

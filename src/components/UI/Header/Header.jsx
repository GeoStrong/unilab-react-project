import { Link } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../../../store/popup';
import { dataFilterActions } from '../../../store/dataFilter';

const Header = () => {
  const dispatch = useDispatch();
  const { profilePopup } = useSelector((state) => state.popup);
  const account = JSON.parse(window.localStorage.getItem('account'));

  const profileChangeHandler = () =>
    dispatch(popupActions.profilePopupHandler(!profilePopup));

  const paginationResetHandler = () =>
    dispatch(dataFilterActions.activePageHandler(1));

  return (
    <header className="header">
      <div className="header-left">
        <Link
          onClick={paginationResetHandler}
          to="/form"
          tabIndex={1}
          className="header-left__heading"
        >
          Form
        </Link>
        <Link
          onClick={paginationResetHandler}
          to="/api"
          tabIndex={2}
          className="header-left__link"
        >
          API
        </Link>
      </div>
      <div className="header-right">
        <h3 className="header-right__name">{account.name}</h3>
        <button
          onClick={profileChangeHandler}
          tabIndex={3}
          className="header-right__profile"
        >
          <img src={account.profile} alt="profile" />
        </button>
      </div>
    </header>
  );
};
export default Header;

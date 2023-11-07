import { Link } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../../../store/popup';
import usePathname from '../../hooks/usePathname';

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = usePathname();
  const { profilePopup } = useSelector((state) => state.popup);
  const account = JSON.parse(window.localStorage.getItem('account'));

  const profileChangeHandler = () =>
    dispatch(popupActions.profilePopupHandler(!profilePopup));

  return (
    <header className="header">
      <div className="header-left">
        <Link to={`${pathname}form`} className="header-left__heading">
          Form
        </Link>
        <Link to={`${pathname}api`} className="header-left__link">
          API
        </Link>
      </div>
      <div className="header-right">
        <h3 className="header-right__name">{account.name}</h3>
        <div onClick={profileChangeHandler} className="header-right__profile">
          <img src={account.profile} alt="profile" />
        </div>
      </div>
    </header>
  );
};
export default Header;

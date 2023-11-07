import { Link } from 'react-router-dom';
import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../../../store/popup';

const Header = () => {
  const dispatch = useDispatch();
  const { profilePopup } = useSelector((state) => state.popup);
  const account = JSON.parse(window.localStorage.getItem('account'));

  // useEffect(() => {
  //   if (account === null)
  //     return json({ message: 'Account not found' }, { status: 404 });
  // }, [account]);

  const profileChangeHandler = () =>
    dispatch(popupActions.profilePopupHandler(!profilePopup));

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/form" className="header-left__heading">
          Form
        </Link>
        <Link to="/api" className="header-left__link">
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
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import './ProfilePopup.scss';
import { popupActions } from '../../../store/popup';
import closeImg from '../../../assets/img/close.svg';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import usePathname from '../../hooks/usePathname';

const Overlay = ({ overlayClickHandler }) => {
  return <div className="overlay-backdrop" onClick={overlayClickHandler}></div>;
};

const Modal = ({ overlayClickHandler }) => {
  const { pathname } = usePathname();

  const account = JSON.parse(window.localStorage.getItem('account'));

  const removeAccount = () => window.localStorage.removeItem('account');

  return (
    <div className="modal">
      <div className="modal-header">
        <button onClick={overlayClickHandler} className="modal-header__button">
          <img src={closeImg} alt="close" />
        </button>
      </div>
      <main className="modal-main">
        <h3 className="modal-main__name">{account?.name}</h3>
        <div className="modal-main__profile">
          <img src={account?.profile} alt="profile" />
        </div>
        <Link
          to="/"
          // to={pathname}
          onClick={removeAccount}
          className="modal-main__button"
        >
          Sign Out
        </Link>
      </main>
    </div>
  );
};

const ProfilePopup = () => {
  const dispatch = useDispatch();
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.profile-popup');

  const onOverlayClick = () => {
    dispatch(popupActions.profilePopupHandler(false));
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay overlayClickHandler={onOverlayClick} />,
        overlay
      )}
      {ReactDOM.createPortal(
        <Modal overlayClickHandler={onOverlayClick} />,
        modal
      )}
    </Fragment>
  );
};

export default ProfilePopup;

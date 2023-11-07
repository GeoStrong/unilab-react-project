import './Landing.scss';
import logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { popupActions } from '../../../store/popup';

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(popupActions.profilePopupHandler(false));
  }, [dispatch]);

  return (
    <main className="landing">
      <div className="landing__logo">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="landing__heading">Get Started Today</h1>
      <Link to="/auth" className="landing__button">
        Get Started
      </Link>
    </main>
  );
};
export default Landing;

import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const account = JSON.parse(window.localStorage.getItem('account'));

  return (
    <header className="header">
      <div className="header-left">
        <h2 className="header-left__heading header__style">Form</h2>
      </div>
      <div className="header-right">
        <Link className="header-right__link header__style">API</Link>
        <div className="header-right__account">
          <h3 className="header-right__name">{account.name}</h3>
          <div className="header-right__profile">
            <img src={account.profile} alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

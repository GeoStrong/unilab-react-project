import './Landing.scss';
import logo from '../../../assets/img/logo.svg';

const Landing = () => {
  return (
    <main className="landing">
      <div className="landing__logo">
        <img src={logo} alt="logo" />
      </div>
      <h1 className="landing__heading">Get Started Today</h1>
      <button className="landing__button">Get Started</button>
    </main>
  );
};
export default Landing;

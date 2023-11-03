import './AuthorizationForm.scss';

const AuthorizationForm = ({
  profileImg,
  nameRef,
  imgCheck,
  error,
  profileChangeHandler,
  submitHandler,
}) => {
  return (
    <main className="authorization">
      <form onSubmit={submitHandler} className="authorization-card">
        <h2 className="authorization-card__heading">Get Started</h2>
        <p className="authorization-card__description">add a photo</p>
        <label
          htmlFor="profile"
          className={`authorization-card__label ${
            error && 'authorization__error'
          }`}
        >
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .svg, .gif"
            id="profile"
            onChange={profileChangeHandler}
          />
          <img
            src={profileImg}
            className={!imgCheck ? 'authorization-card__profile' : null}
            alt="profile"
          />
        </label>
        <p className="authorization-card__description">fill in you name</p>
        <input
          ref={nameRef}
          type="text"
          placeholder="your name"
          className={`authorization-card__input ${
            error && 'authorization__error'
          }`}
        />
        <button type="submit" className="authorization-card__button">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default AuthorizationForm;

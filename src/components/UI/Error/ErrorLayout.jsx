import './ErrorLayout.scss';

const ErrorLayout = ({ error }) => {
  return (
    <>
      <div className="error-layout">
        <h2 className="error-layout__text">{error.statusText}</h2>
        <p className="error-layout__description">{error.error.message}</p>
      </div>
    </>
  );
};
export default ErrorLayout;

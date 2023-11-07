import { useNavigate } from 'react-router-dom';
import AuthorizationForm from '../components/UI/Authorization/AuthorizationForm';
import { useRef, useState } from 'react';
import defaultProfile from '../assets/img/default-profile.svg';

const AuthorizationPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(defaultProfile);
  const [authError, setAuthError] = useState(false);
  const nameInput = useRef();

  const imgCheck = profile === defaultProfile;

  const onProfileChange = (event) => {
    setProfile(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      imgCheck ||
      nameInput.current.value === '' ||
      nameInput.current.value.length > 10
    ) {
      setAuthError(true);
      return;
    }
    const data = {
      profile,
      name: nameInput.current.value,
    };

    window.localStorage.setItem('account', JSON.stringify(data));
    navigate('/form');
  };

  return (
    <AuthorizationForm
      profileImg={profile}
      nameRef={nameInput}
      imgCheck={imgCheck}
      error={authError}
      profileChangeHandler={onProfileChange}
      submitHandler={onSubmit}
    />
  );
};
export default AuthorizationPage;

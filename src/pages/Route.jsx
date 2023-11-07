import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ProfilePopup from '../components/Popup/ProfilePopup/ProfilePopup';

const RouteLayout = () => {
  const { profilePopup } = useSelector((state) => state.popup);

  return (
    <>
      <Outlet />
      {profilePopup && <ProfilePopup />}
    </>
  );
};
export default RouteLayout;

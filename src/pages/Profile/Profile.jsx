import LateralDrawer from "components/LateralDrawer/LateralDrawer";
import UserContext from "context/UserContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <section className="profile__container">
      <LateralDrawer />
      <Outlet context={user} />
    </section>
  );
};

export default Profile;

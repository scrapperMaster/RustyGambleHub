import Header from "./../base/Header";
import { useLocation, Outlet } from "react-router-dom";
import Chat from "./../base/Chat";
import UserInfo from "./userInfo/UserInfo";
import { useState } from "react";
const Layout = () => {
  const location = useLocation();
  const [profile, setProfile] = useState(false);
  return (
    <>
      <main>
        <div className="container">
          <Header
            path={location.pathname}
            setProfile={setProfile}
            profile={profile}
          />
          <div className="content">
            <Chat />
            <Outlet />
          </div>
          {profile ? (
            <UserInfo setProfile={setProfile} profile={profile} />
          ) : null}
        </div>
      </main>
    </>
  );
};

export default Layout;

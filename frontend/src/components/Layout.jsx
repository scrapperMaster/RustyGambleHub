import Header from "./../base/Header";
import { useLocation, Outlet } from "react-router-dom";
import Chat from "./../base/Chat";
const Layout = () => {
  const location = useLocation();
  return (
    <>
      <main>
        <div className="container">
          <Header path={location.pathname} />
          <Chat />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;

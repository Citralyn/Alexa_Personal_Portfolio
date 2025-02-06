import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Meow</h1>

      <Outlet />
    </>
  )
};

export default Layout;

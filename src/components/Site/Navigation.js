import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="">
      <ul className="flex justify-end pr-5 navigation">
        <Link to="/" className="cursor-default"><li className="nav--item">Home</li></Link>
        <Link to="/about" className="cursor-default"><li className="nav--item ml-5">About</li></Link>
        <Link to="/users" className="cursor-default"><li className="nav--item ml-5">Users</li></Link>
        <Link to="/contact" className="cursor-default"><li className="nav--item ml-5">Contact</li></Link>
      </ul>
      <Outlet />
    </div>
  );
}

export default Navigation;
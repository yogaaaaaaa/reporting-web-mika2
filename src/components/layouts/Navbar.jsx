import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import MikaLogo from './assets/mika-bw.png'

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
            <img src={MikaLogo} alt="Logo" style={{width:"35px"}} className="inline pr-2 text-3xl"/>
            <Link to='/' className="text-lg font-bold align-middle ">{title}</Link>
        </div>
        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end">
                <Link to='/' className="btn btn-sm btn-ghost btn-rounded">Home</Link>
                {/* <Link to='/login' className="btn btn-sm btn-ghost btn-rounded">Login</Link> */}
                <Link to='/daftarbaru' className="btn btn-sm btn-ghost btn-rounded">daftar user</Link>
                {/* <Link to='/daftarbaru' className="btn btn-sm btn-ghost btn-rounded">+Da</Link> */}
                <Link to='/about' className="btn btn-sm btn-ghost btn-rounded">About</Link>
            </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "ROLLOUT MONITORING WEB",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

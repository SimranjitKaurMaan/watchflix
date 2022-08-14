import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsFillPersonPlusFill } from "react-icons/bs";

export const HeaderNavBar = () => {
  return (
    <>
      <header>
        <div className="header-nav-container">
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src="https://res.cloudinary.com/duddwta8d/image/upload/v1650806306/just_logo_whau5y.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search-wrapper">
            <input
              type="text"
              name="search-bar"
              id="search-bar"
              placeholder="Search"
            />
          </div>
          <nav>
            <Link to="/signup">
              <div className="badge-container">
                <BsFillPersonPlusFill className="lg-icon" />
              </div>
            </Link>
            <div className="badge-container">
              <RiVideoAddLine className="lg-icon" />
            </div>
            <div className="badge-container">
              <FaRegBell className="lg-icon" />
            </div>
            <div>
              <Link to="/" className="user">
                <img
                  className="avatar avatar-md rounded"
                  src="https://res.cloudinary.com/duddwta8d/image/upload/v1648081722/avatar-1_q0h9ko.jpg"
                  alt="avatar"
                />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

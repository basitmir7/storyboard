import logo from "../assets/logo.png";
import { ImHome3 } from "react-icons/im";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
  const navLinks = [
    {
      link: <ImHome3 />,
      id: 1,
    },
    {
      link: <IoIosSettings />,
      id: 2,
    },
    {
      link: <IoIosNotifications />,
      id: 3,
    },
    {
      link: "",
      id: 4,
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="links">
          {navLinks.map((elem) => {
            return (
              <div className="link" key={elem.id}>
                {elem.link}
              </div>
            );
          })}
          <BsThreeDotsVertical />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

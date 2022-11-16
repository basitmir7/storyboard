import { FiMenu } from "react-icons/fi";
import { useState } from "react";
const Sidebar = ({ data }) => {
  const [isOpen, setisOpen] = useState(false);

  const OpenSidebar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-heading">
          <h5>journey board</h5>
          <FiMenu onClick={OpenSidebar} style={{ cursor: "pointer" }} />
        </div>
        <span style={{ display: `${isOpen ? "none" : "block"}` }}>
          {data.length}
        </span>
        <div className="sidebar-content">
          <p>1.demo task</p>
          <ul>
            {data.map((elem) => {
              return (
                <>
                  <li key={elem.asset_id}>{elem.asset_title}</li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();

  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const goToLogin = () => {
    if (authenticated) {
      setAuthenticated(false);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticated ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-87EDycs9a5OyvrbkMOhYe28Sxd3sLMecLA&s"
          alt="H&M"
        />
      </div>
      <div>
        <div className="menu-area">
          <ul className="menu-list">
            {menuList.map((menu) => (
              <li key={menu}>{menu}</li>
            ))}
          </ul>
          <div className="search">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" placeholder="검색" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

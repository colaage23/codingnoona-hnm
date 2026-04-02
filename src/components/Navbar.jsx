import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticated, setAuthenticated }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    setSidebarOpen(false);

    if (authenticated) {
      setAuthenticated(false);
    } else {
      navigate("/login");
    }
  };

  const goHome = () => {
    setSidebarOpen(false);
    navigate("/");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      const keyword = e.target.value.trim();
      navigate(`/?q=${encodeURIComponent(keyword)}`);
      setSidebarOpen(false);
    }
  };

  return (
    <div>
      <div className="nav-top">
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setSidebarOpen(true)}
          aria-label="메뉴 열기"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticated ? "로그아웃" : "로그인"}</div>
        </div>
      </div>

      <div className="nav-section" onClick={goHome}>
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-87EDycs9a5OyvrbkMOhYe28Sxd3sLMecLA&s"
          alt="H&M"
        />
      </div>

      <div
        className={`sidebar-overlay ${sidebarOpen ? "show" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      <div className={`menu-area ${sidebarOpen ? "open" : ""}`}>
        <div className="mobile-sidebar-header">
          <button
            type="button"
            className="mobile-close-button"
            onClick={() => setSidebarOpen(false)}
            aria-label="메뉴 닫기"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <ul className="menu-list">
          {menuList.map((menu) => (
            <li key={menu} onClick={() => setSidebarOpen(false)}>
              {menu}
            </li>
          ))}
        </ul>

        <div className="search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="검색" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

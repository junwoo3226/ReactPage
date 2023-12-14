import React, { useState, useEffect } from "react";
import logo from "../img/DD-logo.png";
import "../css/Header.css";
import throttle from "lodash/throttle"; // lodash 라이브러리에서 throttle 함수 임포트
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // 검색어 상태를 관리하기 위한 상태 변수와 설정 함수
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 검색 실행 함수
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 이벤트 방지
    navigate(`/Tool/SearchList?query=${encodeURIComponent(searchTerm)}`);

    // 검색 결과 페이지로 이동하며 검색어 상태를 쿼리 파라미터로 전달

    setSearchTerm(""); // 검색어 상태 초기화
    if (showDropdown) {
      toggleDropdown();
    }

    if (isHamburgerOpen) {
      toggleHamburgerMenu();
    }

    if (isMobileNavVisible) {
      toggleMobileNav();
    }
  };
  // 검색어가 변경될 때 호출될 함수
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 스크롤 위치를 추적하기 위한 상태
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY > 200);
  }, 100); // 100ms마다 한 번만 실행

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      //   handleScroll.cancel(); // 스로틀링된 함수의 대기 중인 실행 취소
    };
  }, [handleScroll]);

  // 미니 헤더 햄버거 함수
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // 새로운 상태 변수 추가

  // 햄버거 메뉴 토글 함수
  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  // isHamburgerOpen 상태가 변경될 때마다 실행
  useEffect(() => {
    const dropdown = document.querySelector(".mini-header__dropdown");
    if (isHamburgerOpen) {
      dropdown.classList.add("active");
    } else {
      dropdown.classList.remove("active");
    }
  }, [isHamburgerOpen]); // isHamburgerOpen 상태를 의존성 배열에 추가

  //모바일
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  // 모바일 네비게이션 메뉴를 토글하는 함수
  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };

  return (
    <div>
      <div className={`mini-header ${isScrolled ? "show" : ""}`}>
        <div className="mini-header__container">
          <div className="mini-header__branding">
            <Link className="mini-header__logo" to="/">
              <img
                className="logo--abbr"
                width="257"
                height="85"
                src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/logo-abbr.svg"
              />
            </Link>
          </div>

          <nav id="mini-menu" className="mini-header__navigation">
            <ul id="menu-primary-menu-kr" className="menu primary-menu">
              <li
                id="menu-item-2353"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2353"
              >
                <a href="/People/Story">People</a>
              </li>
              <li
                id="menu-item-2357"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2357"
              >
                <a href="/Work/All">Work</a>
              </li>
              <li
                id="menu-item-2341"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2341"
              >
                <a href="/etc/Labs">Labs</a>
              </li>
            </ul>
            <div className="mini-header__dropdown">
              <ul
                id="menu-secondary-menu-kr"
                className={`menu mini-secondary-menu ${
                  isHamburgerOpen ? "mini-show-menu" : "mini-off-menu"
                }`}
              >
                <li
                  id="menu-item-2344"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2344"
                >
                  <a href="/Tool/Facility">Facility Reservation</a>
                </li>
                <li
                  id="menu-item-2338"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2338"
                >
                  <a href="/Tool/Useful">Useful Forms</a>
                </li>
                <li
                  id="menu-item-2345"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2345"
                >
                  <a href="/Tool/Guideline">Visual Identity Guideline</a>
                </li>
                <li className="menu-item menu__search">
                  <form
                    className="search"
                    role="search"
                    method="get"
                    action="https://design.unist.ac.kr/ko/"
                    onSubmit={handleSearchSubmit}
                  >
                    <input
                      className="search__submit"
                      type="image"
                      alt="Search"
                      src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/search--white.svg"
                    />
                    <input
                      className="search__input"
                      type="text"
                      name="s"
                      placeholder="Search"
                      value={searchTerm} // 상태 변수를 value에 할당
                      onChange={handleSearchChange}
                    />
                  </form>
                </li>
              </ul>
            </div>
            <ul className="mini-header__functional-menu">
              <li className="mini-header__mini-toggle">
                <a
                  className="navigation__toggle toggle--mini-header"
                  onClick={toggleHamburgerMenu} // 햄버거 메뉴 클릭 이벤트 추가
                  aria-expanded={isHamburgerOpen} // 상태에 따른 aria-expanded 값 설정
                >
                  <span className="navigation__crumb navigation__crumb--top">
                    <span className="navigation__bar navigation__bar--top"></span>
                  </span>
                  <span className="navigation__crumb navigation__crumb--bottom">
                    <span className="navigation__bar navigation__bar--bottom"></span>
                  </span>
                  <span className="visually-hidden">Site Menu</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <header className="site__header header">
        <div className="header__container">
          <div className="header__branding">
            <Link className="header__logo" to="/">
              <img className="logo" src={logo} alt="Design Department Logo" />
            </Link>
          </div>
          <div className="header__mobile-wrap">
            <button
              className="navigation__toggle toggle--mobile"
              aria-controls="main-menu"
              aria-expanded={isMobileNavVisible}
              onClick={toggleMobileNav}
            >
              <span className="navigation__crumb navigation__crumb--top">
                <span className="navigation__bar navigation__bar--top"></span>
              </span>

              <span className="navigation__crumb navigation__crumb--bottom">
                <span className="navigation__bar navigation__bar--bottom"></span>
              </span>

              <span className="visually-hidden">Primary Menu</span>
            </button>
          </div>
          <nav
            id="main-menu"
            className={`header__navigation navigation  ${
              isMobileNavVisible ? "active" : ""
            }`}
          >
            <ul id="menu-primary-menu-kr" className="menu primary-menu">
              <li
                id="menu-item-2353"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2353"
              >
                <a href="/People/Story">People</a>
              </li>
              <li
                id="menu-item-2357"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-2357"
              >
                <a href="/Work/All">Work</a>
              </li>
              <li
                id="menu-item-2341"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2341"
              >
                <a href="/etc/Labs">Labs</a>
              </li>
            </ul>

            <ul id="menu-functional-menu" className="menu functional-menu">
              <li
                id="menu-item-2256"
                className="secondary-menu__toggle menu-item menu-item-type-custom menu-item-object-custom menu-item-2256"
                onClick={toggleDropdown}
              >
                <a href="#">Tools</a>
              </li>
            </ul>

            <ul
              id="menu-secondary-menu-kr"
              className={`menu secondary-menu ${
                showDropdown || isMobileNavVisible ? "show-menu" : "off-menu"
              }`}
            >
              <li
                id="menu-item-2344"
                className="secondary-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2344"
              >
                <a href="/Tool/Facility">Facility Reservation</a>
              </li>
              <li
                id="menu-item-2338"
                className="secondary-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2338"
              >
                <a href="/Tool/Useful">Useful Forms</a>
              </li>
              <li
                id="menu-item-2345"
                className="secondary-menu-item menu-item menu-item-type-post_type menu-item-object-page menu-item-2345"
              >
                <a href="/Tool/Guideline">Visual Identity Guideline</a>
              </li>
              <li className="secondary-menu-item menu-item menu__search">
                <form
                  className="search"
                  role="search"
                  method="get"
                  action="#"
                  onSubmit={handleSearchSubmit}
                >
                  <input
                    className="search__submit"
                    type="image"
                    alt="Search"
                    src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/search--white.svg"
                  />
                  <input
                    className="search__input"
                    type="text"
                    name="s"
                    placeholder="Search"
                    value={searchTerm} // 상태 변수를 value에 할당
                    onChange={handleSearchChange} // 입력 필드가 변경될 때마다 handleSearchChange 함수를 호출
                  />
                </form>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;

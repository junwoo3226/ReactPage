import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import StaffBox from "../component/People/StaffBox";

export default function Staff() {
  const [PeopleStaffBox, setStaff] = useState([]);

  useEffect(() => {
    fetch("/api/staff/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // 데이터 로그
        // setStaff(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setStaff(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);
  return (
    <div>
      <div className="tabs submenu">
        <div className="submenu__container">
          <ul className="sub-menu ">
            <li
              id="menu-item-2250"
              className="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-2250"
            >
              <Link to="/People/Story">Story</Link>
            </li>
            <li
              id="menu-item-2351"
              className="menu-item menu-item-type-post_type_archive menu-item-object-professors menu-item-2351"
            >
              <Link to="/People/Faculty">Faculty</Link>
            </li>
            <li
              id="menu-item-2352"
              className="menu-item menu-item-type-post_type_archive menu-item-object-staff current-menu-item menu-item-2352"
            >
              <Link className="selected" to="/People/Staff">
                Staff
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <main
        id="primary"
        className="site__main layout--loop layout--archive layout--staff top__gap"
      >
        <h1 className="visually-hidden">
          Archives: <span>Staff</span>
        </h1>
        <div className="archive__posts section">
          {PeopleStaffBox.map((item, index) => (
            <StaffBox
              key={index}
              id={item.id}
              name={item.name}
              email={item.email}
              job={item.job}
              phone={item.phone}
              location={item.location}
            />
          ))}
        </div>

        <aside className="closer__wrap">
          <img
            className="closer"
            width="30"
            height="15"
            src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg"
          />
        </aside>
      </main>
    </div>
  );
}

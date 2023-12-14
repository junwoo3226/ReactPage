import React, { useState, useEffect } from "react";
import FacilityBox from "../component/Tool/FacilityBox";

export default function Facility() {
  const [FacilityData, setFacilityData] = useState([]);

  useEffect(() => {
    fetch("/api/facility/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // setFacilityData(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setFacilityData(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  // 링크를 두 그룹으로 나누어 렌더링합니다.
  const leftColumnLinks = FacilityData.slice(
    0,
    Math.ceil(FacilityData.length / 2)
  );
  const rightColumnLinks = FacilityData.slice(
    Math.ceil(FacilityData.length / 2)
  );

  return (
    <main id="primary" className="site__main layout--single layout--page">
      <article
        id="post-245"
        className="post-245 page type-page status-publish hentry"
      >
        <h1 className="page__title">Facility Reservation</h1>

        <div className="page__content block-area">
          <div className="wp-block-columns has-black-color has-text-color is-layout-flex wp-container-core-columns-layout-1 wp-block-columns-is-layout-flex">
            {/* 왼쪽 열 */}
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              {leftColumnLinks.map((link) => (
                <FacilityBox title={link.title} url={link.url} />
              ))}
            </div>
            {/* 오른쪽 열 */}
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              {rightColumnLinks.map((link) => (
                <FacilityBox title={link.title} url={link.url} />
              ))}
            </div>
          </div>

          <p></p>
        </div>
      </article>

      <aside className="closer__wrap">
        <img
          className="closer"
          width="30"
          height="15"
          src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg"
        />
      </aside>
    </main>
  );
}

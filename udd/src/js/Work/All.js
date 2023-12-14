import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PublicationNormalBox from "../component/Work/PublicationNormalBox";
import PublicationCardBox from "../component/Work/PublicationCardBox";
import AwardNormalBox from "../component/Work/AwardNormalBox";
import AwardCardBox from "../component/Work/AwardCardBox";
import ExhibitionNormalBox from "../component/Work/ExhibitionNormalBox";
import ExhibitionCardBox from "../component/Work/ExhibitionCardBox";

export default function All() {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("/api/award/").then((res) => res.json()),
      fetch("/api/publication/").then((res) => res.json()),
      fetch("/api/exhibition/").then((res) => res.json()),
    ]).then(([awards, publications, exhibitions]) => {
      let combined = [];
      for (
        let i = 0;
        i < Math.max(awards.length, publications.length, exhibitions.length);
        i++
      ) {
        if (awards[i]) combined.push({ ...awards[i], type: "award", index: i });
        if (publications[i])
          combined.push({ ...publications[i], type: "publication", index: i });
        if (exhibitions[i])
          combined.push({ ...exhibitions[i], type: "exhibition", index: i });
      }
      // setCombinedData(combined);
      // console.log(combined);
      const sortedData = combined.sort((a, b) => b.id - a.id);

      setCombinedData(sortedData); // 정렬된 데이터로 상태 업데이트
      console.log(sortedData); // 데이터 로그
    });
  }, []);

  const [visibleCombinedDataCount, setVisibleCombinedDataCount] = useState(5); // 초기에 표시할 항목의 수
  const loadMoreCombinedData = () => {
    setVisibleCombinedDataCount((prevCount) => prevCount + 5); // 추가로 5개 항목을 로드
  };

  return (
    <div>
      <div className="tabs submenu">
        <div className="submenu__container">
          <ul className="sub-menu">
            <li
              id="menu-item-2255"
              className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-2255"
            >
              <Link className="selected" to="/Work/All">
                All
              </Link>
            </li>
            <li
              id="menu-item-2252"
              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2252"
            >
              <Link to="/Work/Award">Award</Link>
            </li>
            <li
              id="menu-item-2623"
              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2623"
            >
              <Link to="/Work/Publication">Publication</Link>
            </li>
            <li
              id="menu-item-2253"
              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2253"
            >
              <Link to="/Work/Exhibition">Exhibition</Link>
            </li>
          </ul>
        </div>
      </div>

      <main
        id="primary"
        className="site__main layout--loop layout--category top__gap"
      >
        <h1 className="visually-hidden">
          Category: <span>Work</span>
        </h1>
        <div className="section section--posts">
          {combinedData
            .slice(0, visibleCombinedDataCount)
            .map((item, index) => {
              if (index == 0) {
                return (
                  <article
                    id="post-7268"
                    className="post--big post-7268 post type-post status-publish format-standard has-post-thumbnail hentry category-award category-work"
                    data-tags="[]"
                  >
                    <a
                      href={`/Work/Award/${item.id}`}
                      rel="bookmark"
                      className="post__link"
                    >
                      <div className="post__thumbnail__wrap">
                        <img
                          width="800"
                          height="428"
                          src={item.image}
                          className="post__thumbnail wp-post-image"
                          alt=""
                          decoding="async"
                          fetchpriority="high"
                          srcSet={`${item.image} 800w, ${item.image} 768w, ${item.image} 729w, ${item.image} 480w" `}
                          sizes="(max-width: 800px) 100vw, 800px"
                        />
                      </div>

                      <div className="post__details">
                        <h2 className="post__title">{item.title}</h2>

                        <div className="post__info">
                          <time
                            className="post__date post__posted-on"
                            dateTime="2023-08-31T15:13:41+09:00"
                          >
                            <span className="visually-hidden">Posted on</span>
                            {item.date}
                          </time>
                        </div>
                      </div>
                    </a>
                  </article>
                );
              } else if (index >= 1 && index <= 12) {
                switch (item.type) {
                  case "award":
                    return (
                      <AwardNormalBox
                        key={index}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        brand={item.brand}
                        name={item.name}
                        date={item.date}
                      />
                    );
                  case "publication":
                    return (
                      <PublicationNormalBox
                        ket={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                      />
                    );
                  case "exhibition":
                    return (
                      <ExhibitionNormalBox
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        startdate={item.startdate}
                        startmonth={item.startmonth}
                        startday={item.startday}
                        nowdate={item.nowdate}
                        nowmonth={item.nowmonth}
                        nowday={item.nowday}
                        year={item.year}
                      />
                    );
                  default:
                    return null;
                }
              } else {
                switch (item.type) {
                  case "award":
                    return (
                      <AwardCardBox
                        key={index}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        brand={item.brand}
                        name={item.name}
                        date={item.date}
                      />
                    );
                  case "publication":
                    return (
                      <PublicationCardBox
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                      />
                    );
                  case "exhibition":
                    return (
                      <ExhibitionCardBox
                        key={index}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        startdate={item.startdate}
                        startmonth={item.startmonth}
                        startday={item.startday}
                        nowdate={item.nowdate}
                        nowmonth={item.nowmonth}
                        nowday={item.nowday}
                        year={item.year}
                      />
                    );
                  default:
                    return null;
                }
              }
            })}
        </div>
        {visibleCombinedDataCount >= combinedData.length ? (
          <button
            className="load-more button--secondary"
            type="button"
            disabled
          >
            All posts loaded
          </button>
        ) : (
          <button
            className="load-more button--secondary"
            type="button"
            onClick={loadMoreCombinedData}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

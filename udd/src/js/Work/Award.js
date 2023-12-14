import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AwardNormalBox from "../component/Work/AwardNormalBox";
import AwardCardBox from "../component/Work/AwardCardBox";

export default function Award() {
  const [AwardBoxs, setAward] = useState([]);

  useEffect(() => {
    fetch("/api/award/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // 데이터 로그
        // setAward(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setAward(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  const [visibleNewsCount, setVisibleNewsCount] = useState(5); // 초기에 표시할 뉴스 항목의 수
  const loadMoreAwardBoxs = () => {
    setVisibleNewsCount((prevCount) => prevCount + 5); // 추가로 5개 뉴스 항목을 로드
  };

  return (
    <div>
      <div className="tabs submenu">
        <div className="submenu__container">
          <ul className="sub-menu">
            <li
              id="menu-item-2255"
              className="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-2255"
            >
              <Link to="/Work/All">All</Link>
            </li>
            <li
              id="menu-item-2252"
              className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-2252"
            >
              <Link className="selected" to="/Work/Award">
                Award
              </Link>
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

      <main id="primary" className="site__main layout--loop top__gap">
        <h1 className="visually-hidden">
          Category: <span>Award</span>
        </h1>
        <div className="section section--posts">
          {AwardBoxs.slice(0, visibleNewsCount).map((item, index) => {
            if (index == 0) {
              return (
                <article
                  id="post-7268"
                  className="post--big post-7268 post type-post status-publish format-standard has-post-thumbnail hentry category-award category-work"
                  data-tags="[]"
                  key={index}
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
            } else if (index >= 1 && index <= 4) {
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
            } else {
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
            }
          })}
        </div>
        {visibleNewsCount >= AwardBoxs.length ? (
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
            onClick={loadMoreAwardBoxs}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

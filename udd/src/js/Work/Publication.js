import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PublicationNormalBox from "../component/Work/PublicationNormalBox";
import PublicationCardBox from "../component/Work/PublicationCardBox";

export default function Publication() {
  const [PublicationBoxs, setPublication] = useState([]);

  useEffect(() => {
    fetch("/api/publication/")
      .then((response) => response.json())
      .then((data) => {
        // setPublication(data);
        // console.log(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setPublication(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  const [visiblePublicationCount, setVisiblePublicationCount] = useState(5); // 초기에 표시할 항목의 수
  const loadMorePublicationBoxs = () => {
    setVisiblePublicationCount((prevCount) => prevCount + 5); // 추가로 5개 항목을 로드
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
              className="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-2252"
            >
              <Link to="/Work/Award">Award</Link>
            </li>
            <li
              id="menu-item-2623"
              className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-2623"
            >
              <Link className="selected" to="/Work/Publication">
                Publication
              </Link>
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
          Category: <span>Publication</span>
        </h1>
        <div className="section section--posts">
          {PublicationBoxs.slice(0, visiblePublicationCount).map(
            (item, index) => {
              if (index == 0) {
                return (
                  <article
                    id="post-7067"
                    className="post--big post-7067 post type-post status-publish format-standard has-post-thumbnail hentry category-publication category-work"
                    data-tags="[]"
                  >
                    <a
                      href={`/Work/Publication/${item.id}`}
                      rel="bookmark"
                      className="post__link"
                    >
                      <div className="post__thumbnail__wrap">
                        <img
                          width="1760"
                          height="1000"
                          src={item.image}
                          className="post__thumbnail wp-post-image"
                          alt=""
                          decoding="async"
                          fetchpriority="high"
                          srcSet={`${item.image} 1760w, ${item.image} 880w, ${item.image} 440w" `}
                          sizes="(max-width: 1760px) 100vw, 1760px"
                        />
                      </div>

                      <div className="post__details">
                        <h2 className="post__title">{item.title}</h2>

                        <div className="post__info">
                          <time
                            className="post__date post__posted-on"
                            dateTime="2023-05-18T19:17:00+09:00"
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
                  <PublicationNormalBox
                    ket={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    date={item.date}
                  />
                );
              } else {
                return (
                  <PublicationCardBox
                    key={index}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    date={item.date}
                  />
                );
              }
            }
          )}
        </div>

        {visiblePublicationCount >= PublicationBoxs.length ? (
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
            onClick={loadMorePublicationBoxs}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

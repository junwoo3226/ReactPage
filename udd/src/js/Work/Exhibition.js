import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ExhibitionNormalBox from "../component/Work/ExhibitionNormalBox";
import ExhibitionCardBox from "../component/Work/ExhibitionCardBox";

export default function Exhibition() {
  const [ExhibitionBoxs, setExhibition] = useState([]);

  useEffect(() => {
    fetch("/api/exhibition/")
      .then((response) => response.json())
      .then((data) => {
        // setExhibition(data);
        // console.log(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setExhibition(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  const [visibleExhibitionCount, setVisibleExhibitionCount] = useState(5); // 초기에 표시할 항목의 수
  const loadMoreExhibitionBoxs = () => {
    setVisibleExhibitionCount((prevCount) => prevCount + 5); // 추가로 5개 항목을 로드
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
              className="menu-item menu-item-type-taxonomy menu-item-object-category  menu-item-2623"
            >
              <Link to="/Work/Publication">Publication</Link>
            </li>
            <li
              id="menu-item-2253"
              className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-2253"
            >
              <Link className="selected" to="/Work/Exhibition">
                Exhibition
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <main id="primary" className="site__main layout--loop top__gap">
        <h1 className="visually-hidden">
          Category: <span>Exhibition</span>
        </h1>
        <div className="section section--posts">
          {ExhibitionBoxs.slice(0, visibleExhibitionCount).map(
            (item, index) => {
              if (index == 0) {
                return (
                  <article
                    id="post-6560"
                    className="post--big post-6560 post type-post status-publish format-standard has-post-thumbnail hentry category-exhibition"
                    data-tags="[]"
                    key={index}
                  >
                    <a
                      href={`/Work/Exhibition/${item.id}`}
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
                          {item.startdate && item.startdate.trim() !== "" ? (
                            <>
                              {item.startmonth &&
                                item.startmonth.trim() !== "" && (
                                  <time
                                    className="post__date post__date--starts"
                                    dateTime="2022-11-07KST12:00:00+09:00"
                                  >
                                    {`${item.startmonth} ${item.startday}`}
                                  </time>
                                )}
                              {item.startday &&
                                item.startday !== 0 &&
                                !item.startmonth && (
                                  <time
                                    className="post__date post__date--starts"
                                    dateTime="2022-11-07KST12:00:00+09:00"
                                  >
                                    {item.startday}
                                  </time>
                                )}
                              {item.nowmonth &&
                                item.nowmonth.trim() !== "" &&
                                (item.nowmonth !== item.startmonth ? (
                                  <time
                                    className="post__date post__date--ends"
                                    dateTime="2022-11-11KST15:00:00+09:00"
                                  >
                                    &nbsp;{`- ${item.nowmonth} ${item.nowday}`}{" "}
                                    &nbsp;
                                  </time>
                                ) : (
                                  item.nowday !== 0 && (
                                    <time
                                      className="post__date post__date--ends"
                                      dateTime="2022-11-11KST15:00:00+09:00"
                                    >
                                      &nbsp;{`- ${item.nowday}`} &nbsp;
                                    </time>
                                  )
                                ))}
                              <time
                                className="post__date post__date--starts"
                                dateTime="2022-11-07KST12:00:00+09:00"
                              >
                                {item.year}
                              </time>
                            </>
                          ) : (
                            <time
                              className="post__date post__date--day"
                              dateTime="2020-10-22KST00:00:00+09:00"
                            >
                              {item.nowdate}
                            </time>
                          )}
                        </div>
                      </div>
                    </a>
                  </article>
                );
              } else if (index >= 1 && index <= 4) {
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
              } else {
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
              }
            }
          )}
        </div>

        {visibleExhibitionCount >= ExhibitionBoxs.length ? (
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
            onClick={loadMoreExhibitionBoxs}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

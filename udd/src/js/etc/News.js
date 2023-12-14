import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewsNormalBox from "../component/News/NewsNormalBox";
import NewsCardBox from "../component/News/NewsCardBox";

export default function News() {
  // 뉴스들 이미지 및 제목,날짜
  const [NewsBox, setNewsBox] = useState([]);
  useEffect(() => {
    fetch("/api/mainnewsbox/")
      .then((response) => response.json())
      .then((data) => {
        // setNewsBox(data);

        // console.log(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setNewsBox(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  const [visibleNewsCount, setVisibleNewsCount] = useState(5); // 초기에 표시할 뉴스 항목의 수
  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 5); // 추가로 5개 뉴스 항목을 로드
  };
  return (
    <div>
      <main id="primary" className="site__main layout--loop">
        <h1 className="visually-hidden">
          Category: <span>News</span>
        </h1>
        <div className="section section--posts">
          {NewsBox.slice(0, visibleNewsCount).map((newsItem, index) => {
            if (index == 0) {
              // 첫번쨰 뉴스
              return (
                <article
                  key={index}
                  id="post-7207"
                  className="post--big post-7207 post type-post status-publish format-standard has-post-thumbnail hentry category-news"
                  data-tags="[]"
                >
                  <Link className="post__link" to={`/etc/News/${newsItem.id}`}>
                    <div className="post__thumbnail__wrap">
                      <img
                        width="1760"
                        height="1000"
                        src={newsItem.image}
                        className="post__thumbnail wp-post-image"
                        alt=""
                        decoding="async"
                        fetchpriority="high"
                        srcSet={`${newsItem.image} 1760w, ${newsItem.image} 880w, ${newsItem.image} 440w`}
                        sizes="(max-width: 1760px) 100vw, 1760px"
                      />{" "}
                    </div>

                    <div className="post__details">
                      <h2 className="post__title">{newsItem.title}</h2>

                      <div className="post__info">
                        <time
                          className="post__date post__posted-on"
                          dateTime="2023-10-12T10:57:34+09:00"
                        >
                          <span className="visually-hidden">Posted on</span>
                          {newsItem.date}
                        </time>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            } else if (index >= 1 && index <= 4) {
              return (
                <NewsNormalBox
                  key={index}
                  id={newsItem.id}
                  image={newsItem.image}
                  title={newsItem.title}
                  date={newsItem.date}
                />
              );
            } else {
              return (
                <NewsCardBox
                  key={index}
                  id={newsItem.id}
                  image={newsItem.image}
                  title={newsItem.title}
                  date={newsItem.date}
                />
              );
            }
          })}
        </div>
        {visibleNewsCount >= NewsBox.length ? (
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
            onClick={loadMoreNews}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

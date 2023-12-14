import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import PeopleNormalBox from "../component/People/PeopleNormalBox";
import PeopleCardBox from "../component/People/PeopleCardBox";

function Story() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("/api/people/")
      .then((response) => response.json())
      .then((data) => {
        // setPeople(data); // 받아온 데이터로 상태 업데이트
        // date 필드를 기준으로 내림차순 정렬
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPeople(sortedData); // 정렬된 데이터로 상태 업데이트
      });
  }, []);

  const [visibleNewsCount, setVisibleNewsCount] = useState(5); // 초기에 표시할 뉴스 항목의 수
  const loadMorePeople = () => {
    setVisibleNewsCount((prevCount) => prevCount + 5); // 추가로 5개 뉴스 항목을 로드
  };

  return (
    <div>
      <div className="tabs submenu">
        <div className="submenu__container">
          <ul className="sub-menu ">
            <li
              id="menu-item-2250"
              className="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-2250"
            >
              <Link className="selected" to="/People/Story">
                Story
              </Link>
            </li>
            <li
              id="menu-item-2351"
              className="menu-item menu-item-type-post_type_archive menu-item-object-professors menu-item-2351"
            >
              <Link to="/People/Faculty">Faculty</Link>
            </li>
            <li
              id="menu-item-2352"
              className="menu-item menu-item-type-post_type_archive menu-item-object-staff menu-item-2352"
            >
              <Link to="/People/Staff">Staff</Link>
            </li>
          </ul>
        </div>
      </div>

      <main id="primary" className="site__main layout--loop top__gap">
        <h1 className="visually-hidden">
          Category: <span>Stories</span>
        </h1>
        <div className="section section--posts">
          {people.slice(0, visibleNewsCount).map((person, index) => {
            if (index == 0) {
              return (
                <article
                  key={index}
                  id="post-6923"
                  className="post--big post-6923 post type-post status-publish format-standard has-post-thumbnail hentry category-stories"
                  data-tags="[]"
                >
                  <Link
                    className="post__link"
                    to={`/People/Story/${person.id}`}
                  >
                    <div className="post__thumbnail__wrap">
                      <img
                        // width="1760"
                        // height="1000"
                        src={person.image}
                        className="post__thumbnail wp-post-image"
                        alt=""
                        decoding="async"
                        fetchpriority="high"
                        // srcSet="https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/07/featured-image-marian-adusei-1760x1000.jpg 1760w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/07/featured-image-marian-adusei-880x500.jpg 880w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/07/featured-image-marian-adusei-440x250.jpg 440w"
                        sizes="(max-width: 1760px) 100vw, 1760px"
                      />
                    </div>

                    <div className="post__details">
                      <span className="post__interviewee">{person.name}</span>

                      <h2 className="post__title">{person.role}</h2>

                      <div className="post__info">
                        <time
                          className="post__date post__posted-on"
                          dateTime="2023-07-18T09:42:19+09:00"
                        >
                          <span className="visually-hidden">Posted on</span>
                          {person.date}
                        </time>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            } else if (index >= 1 && index <= 4) {
              return (
                <PeopleNormalBox
                  key={index}
                  id={person.id}
                  image={person.image}
                  name={person.name}
                  role={person.role}
                  date={person.date}
                />
              );
            } else {
              return (
                <PeopleCardBox
                  key={index}
                  id={person.id}
                  image={person.image}
                  name={person.name}
                  role={person.role}
                  date={person.date}
                />
              );
            }
          })}
        </div>

        {visibleNewsCount >= people.length ? (
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
            onClick={loadMorePeople}
          >
            <span className="load-more__spinner"></span>
            <span className="load-more__text">Explore More</span>
          </button>
        )}
      </main>
    </div>
  );
}

export default Story;

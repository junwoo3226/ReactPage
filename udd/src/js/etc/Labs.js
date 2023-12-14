import React from "react";
import { useState, useEffect } from "react";
import LabBox from "../component/etc/LabBox";

export default function Labs() {
  const [LabsBox, setLabs] = useState([]);

  useEffect(() => {
    fetch("/api/lab/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data); // 데이터 로그
        // setLabs(data);
        // date 필드를 기준으로 내림차순 정렬
        const sortedData = data.sort((a, b) => b.id - a.id);
        setLabs(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  return (
    <main id="primary" className="site__main layout--single layout--page">
      <article
        id="post-227"
        className="post-227 page type-page status-publish hentry"
      >
        <h1 className="page__title">Labs </h1>

        <div className="page__content block-area">
          <h2 className="wp-block-heading">
            Lab-Based Training, Real-Life Projects
          </h2>

          <p className="is-style-narrow-paragraph">
            Our design and research breakthroughs happen in our labs with a
            diverse focus of interests. In our labs, students and professors
            closely work together on industry projects, public-sector projects,
            and cutting-edge academic research.{" "}
          </p>

          <p className="is-style-narrow-paragraph">
            If you are interested in joining the lab, please send a PDF of your
            portfolio and CV to the professor you are interested in working
            with. Keep in mind that each lab might have specific requirements,
            so be sure to check the website of the lab for detailed information
            before sending the email.{" "}
          </p>
        </div>
      </article>

      <ul
        id="post-227"
        className="design-labs__list post-227 page type-page status-publish hentry"
      >
        {LabsBox.map((item, index) => (
          <LabBox
            key={index}
            id={item.id}
            title={item.title}
            image={item.image}
            keyword={item.keyword}
            name={item.name}
            lab={item.lab}
          />
        ))}
      </ul>

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

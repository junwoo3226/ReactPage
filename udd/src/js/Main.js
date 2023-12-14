import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NewsBox from "./component/Main/NewsCom"; // NewsCom.js를 불러옴

function Main() {
  // 메인 텍스트
  const [mainText, setMainText] = useState("");
  const [contentFirstText, setFirstText] = useState("");
  const [contentSeconedText, setSeconedText] = useState("");
  useEffect(() => {
    fetch("/api/maintext/")
      .then((response) => response.json())
      .then((data) => {
        setMainText(data[0].mainText); // 첫 번째 MainText 항목을 설정
        setFirstText(data[1].mainText); // 첫 번째 MainText 항목을 설정
        setSeconedText(data[2].mainText); // 첫 번째 MainText 항목을 설정
        // console.log(data);
      });
  }, []);
  // 메인 이미지
  const [mainImage, setMainImage] = useState("");
  useEffect(() => {
    fetch("/api/mainimage/")
      .then((response) => response.json())
      .then((data) => {
        setMainImage(data[0].image); // 첫 번째 MainImage 항목을 설정

        // console.log(data);
      });
  }, []); // []를 넣어주면 한 번만 실행됨 (마운트 될 때만 실행)

  // 뉴스들 이미지 및 제목,날짜
  const [MainNewsBox, setMainNewsBox] = useState([]);
  useEffect(() => {
    fetch("/api/mainnewsbox/")
      .then((response) => response.json())
      .then((data) => {
        // setMainNewsBox(data);
        // console.log(data);
        const sortedData = data.sort((a, b) => b.id - a.id);

        setMainNewsBox(sortedData); // 정렬된 데이터로 상태 업데이트
        console.log(sortedData); // 데이터 로그
      });
  }, []);

  return (
    <main className="site__main front">
      <header className="front__hero">
        <img
          width="2560"
          height="1600"
          src={`{% static ${mainImage} %}`}
          className="attachment-hero size-hero wp-post-image"
          alt=""
          decoding="async"
          fetchpriority="high"
          srcSet={`${mainImage} 2560w, ${mainImage} 1024w, ${mainImage} 1728w, ${mainImage} 768w, ${mainImage} 1536w, ${mainImage} 2048w, ${mainImage} 1440w, ${mainImage} 624w, ${mainImage} 480w`}
          sizes="(max-width: 2560px) 100vw, 2560px"
        />
      </header>

      <div className="front__intro section block-area">
        <h2 className="wp-block-heading">{mainText}</h2>

        <p className="front__intro-one__p">{contentFirstText}</p>

        <p className="front__intro-two__p">{contentSeconedText}</p>

        <div className="wp-block-buttons is-content-justification-left is-layout-flex wp-block-buttons-is-layout-flex">
          <div className="wp-block-button is-style-outline">
            <Link className="wp-block-button__link" to="/People/Story">
              유니스트 디자인의 사람들 만나기
            </Link>
          </div>
        </div>

        <p></p>
      </div>

      <section className="front__news news section section--dark">
        <h3 className="section__title">News</h3>

        <div className="news__carousel">
          <div className="news__cards">
            {MainNewsBox.map((newsItem, index) => {
              if (index <= 3) {
                return (
                  <NewsBox
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

          <div className="section__meta news__meta">
            <Link className="section__more link--more" to="/etc/News">
              More{" "}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

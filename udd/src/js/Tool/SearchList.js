import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BigBox from "../component/BigBox";
import PeopleCardBox from "../component/People/PeopleCardBox";
import PeopleNormalBox from "../component/People/PeopleNormalBox";
import AwardCardBox from "../component/Work/AwardCardBox";
import AwardNormalBox from "../component/Work/AwardNormalBox";
import ExhibitionCardBox from "../component/Work/ExhibitionCardBox";
import ExhibitionNormalBox from "../component/Work/ExhibitionNormalBox";
import PublicationCardBox from "../component/Work/PublicationCardBox";
import PublicationNormalBox from "../component/Work/PublicationNormalBox";

function SearchList() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    console.log("검색어 변경:", searchTerm);
    if (searchTerm) {
      fetch(`/api/search/?query=${encodeURIComponent(searchTerm)}`)
        .then((response) => response.json())
        .then((data) => {
          const processedData = [];

          // 'people' 카테고리에 대한 처리
          if (data.people) {
            processedData.push(
              ...data.people.map((item) => ({ ...item, type: "people" }))
            );
          }
          // 'award' 카테고리에 대한 처리
          if (data.award) {
            processedData.push(
              ...data.award.map((item) => ({ ...item, type: "award" }))
            );
          }

          // 'publication' 카테고리에 대한 처리
          if (data.publication) {
            processedData.push(
              ...data.publication.map((item) => ({
                ...item,
                type: "publication",
              }))
            );
          }

          // 'exhibition' 카테고리에 대한 처리
          if (data.exhibition) {
            processedData.push(
              ...data.exhibition.map((item) => ({
                ...item,
                type: "exhibition",
              }))
            );
          }

          setSearchResults(processedData);
          console.log(processedData);
          console.log("데이터" + processedData);
        })
        .catch((error) => {
          console.error("검색 요청 중 에러 발생:", error);
        });
    }
  }, [searchTerm]);

  const [visibleSearchCount, setVisibleSearchCount] = useState(5); // 초기에 표시할 뉴스 항목의 수
  const loadMoreSearch = () => {
    setVisibleSearchCount((prevCount) => prevCount + 5); // 추가로 5개 뉴스 항목을 로드
  };

  return (
    <main id="primary" class="site__main layout--loop layout--search">
      <h1 class="search__title">
        Search Results for:
        <span class="search__query">{searchTerm}</span>
      </h1>
      {searchResults.length > 0 ? (
        <>
          <div className="section section--posts ">
            {searchResults.slice(0, visibleSearchCount).map((result, index) => {
              if (index == 0) {
                switch (result.type) {
                  case "people":
                    return (
                      <BigBox
                        key={index}
                        url={`/People/Story/${result.id}`}
                        image={result.image}
                        title={result.role}
                        date={result.date}
                      />
                    );
                  case "award":
                    return (
                      <BigBox
                        key={index}
                        url={`/Work/Award/${result.id}`}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "publication":
                    return (
                      <BigBox
                        key={index}
                        url={`/Work/Publication/${result.id}`}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "exhibition":
                    return (
                      <BigBox
                        key={index}
                        url={`/Work/Exhibition/${result.id}`}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                }
              } else if (index >= 1 && index <= 4) {
                switch (result.type) {
                  case "people":
                    return (
                      <PeopleNormalBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        name={result.name}
                        role={result.role}
                        date={result.date}
                      />
                    );
                  case "award":
                    return (
                      <AwardNormalBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "publication":
                    return (
                      <PublicationNormalBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "exhibition":
                    return (
                      <ExhibitionNormalBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                }
              } else {
                switch (result.type) {
                  case "people":
                    return (
                      <PeopleCardBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        name={result.name}
                        role={result.role}
                        date={result.date}
                      />
                    );
                  case "award":
                    return (
                      <AwardCardBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "publication":
                    return (
                      <PublicationCardBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                  case "exhibition":
                    return (
                      <ExhibitionCardBox
                        key={index}
                        id={result.id}
                        image={result.image}
                        title={result.title}
                        date={result.date}
                      />
                    );
                }
              }
            })}
          </div>
          {visibleSearchCount >= searchResults.length ? (
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
              onClick={loadMoreSearch}
            >
              <span className="load-more__spinner"></span>
              <span className="load-more__text">Explore More</span>
            </button>
          )}
        </>
      ) : (
        <section className="no-results not-found">
          <h1 className="not-found__title">Nothing Found</h1>
          <div className="single__content block-area">
            <p>
              Sorry, but nothing matched your search terms. Please try again
              with some different keywords.
            </p>
            <form
              className="search"
              role="search"
              method="get"
              action="https://design.unist.ac.kr/"
            >
              <input
                className="search__submit"
                type="image"
                alt="Search"
                src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/search--white.svg"
              />
              <input
                className="search__input"
                type="text"
                name="s"
                placeholder="Search"
                defaultValue={searchTerm || ""}
              />
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default SearchList;

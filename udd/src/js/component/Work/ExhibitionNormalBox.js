import React from "react";
function ExhibitionNormalBox(props) {
  return (
    <article
      className="post--normal post type-post status-publish format-standard has-post-thumbnail hentry category-exhibition category-work tag-carbon-neutrality tag-futuring tag-museums tag-policy-design tag-sustainability-transition"
      data-tags="[Carbon neutrality,Futuring,Museums,Policy design,Sustainability Transition]"
    >
      <a
        href={`/Work/Exhibition/${props.id}`}
        rel="bookmark"
        className="post__link"
      >
        <div className="post__thumbnail__wrap">
          <img
            width="880"
            height="500"
            src={props.image}
            className="post__thumbnail wp-post-image"
            alt="A picture of MMCA project conducted by New Design Studio"
            decoding="async"
            srcSet={`${props.image} 880w, ${props.image} 1760w, ${props.image} 440w" `}
            sizes="(max-width: 880px) 100vw, 880px"
          />
        </div>

        <div className="post__details">
          <h2 className="post__title">{props.title}</h2>

          <div className="post__info">
            {props.name && props.name.trim() !== "" && (
              <span className="post__person post__organizer">{props.name}</span>
            )}
            {props.startdate && props.startdate.trim() !== "" ? (
              <>
                {props.startmonth && props.startmonth.trim() !== "" && (
                  <time
                    className="post__date post__date--starts"
                    dateTime="..."
                  >
                    {`${props.startmonth} ${props.startday}`}
                  </time>
                )}
                {props.nowmonth &&
                  props.nowmonth.trim() !== "" &&
                  (props.nowmonth !== props.startmonth ? (
                    <time
                      className="post__date post__date--ends"
                      dateTime="..."
                    >
                      &nbsp;{`- ${props.nowmonth} ${props.nowday}`} &nbsp;
                    </time>
                  ) : (
                    props.nowday !== 0 && (
                      <time
                        className="post__date post__date--ends"
                        dateTime="..."
                      >
                        &nbsp;{`- ${props.nowday}`} &nbsp;
                      </time>
                    )
                  ))}
                <time
                  className="post__date post__date--starts"
                  dateTime="2022-11-07KST12:00:00+09:00>"
                >
                  {props.year}
                </time>
              </>
            ) : (
              <time
                className="post__date post__date--day"
                dateTime="2020-10-22KST00:00:00+09:00"
              >
                {props.nowdate}
              </time>
            )}
          </div>
        </div>
      </a>
    </article>
  );
}

export default ExhibitionNormalBox;

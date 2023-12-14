import React from 'react'
function FacultyBox(props) {
    return (
        <article
            className="is-people professors type-professors status-publish has-post-thumbnail hentry"
        >
            <div className="post__thumbnail__wrap">
                <img
                    width="160"
                    height="160"
                    src={props.image}
                    className="post__thumbnail wp-post-image"
                    alt=""
                    decoding="async"
                    srcSet={`${props.image} 160w, ${props.image} 320w, ${props.image} 32w, ${props.image} 390w, ${props.image} 480w, ${props.image} 64w, ${props.image} 510w" `}
                    sizes="(max-width: 160px) 100vw, 160px"
                />{' '}
            </div>

            <div className="post__details people__details">
                <h2 className="post__title people__title">
                    {props.name}
                </h2>

                <p className="people__role">{props.job} </p>

                <p className="people__contact people__email">
                    <a href={`mailto:${props.email}`}>
                        {props.email}
                    </a>
                </p>

                {props.phone && props.phone.trim() !== '' && (
                    <p className="people__contact people__phone">
                        <a href={`tel:${props.phone}`}>
                            {props.phone}
                        </a>
                    </p>
                )}

                {props.lab && props.lab.trim() !== '' && (
                    <p className="people__contact people__lab-website">
                        <a href={`/etc/Labs/${props.lab}`}>
                            {props.lab}
                        </a>
                    </p>
                )}

            </div>
        </article>
    )
}

export default FacultyBox









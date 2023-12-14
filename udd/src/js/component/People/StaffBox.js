import React from 'react'
function StaffBox(props) {
    return (
        <article
            className="is-people staff type-staff status-publish hentry"
        >
            <div className="post__details people__details">
                <h2 className="post__title people__title">
                    {props.name}
                </h2>

                <p className="people__role">
                    {props.job}
                </p>

                <p className="people__contact people__email">
                    <a href={`mailto:${props.email}`}>
                        {props.email}
                    </a>
                </p>

                <p className="people__contact people__phone">
                    <a href={`tel:${props.phone}`}>
                        {props.phone}
                    </a>
                </p>

                <p className="people__contact people__location">
                    {props.location}
                </p>
            </div>
        </article>
    )
}

export default StaffBox









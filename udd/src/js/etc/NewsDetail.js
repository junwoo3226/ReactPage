import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function NewsDetail() {
    const { id } = useParams();

    const [firstNewsBox, setFirstNewsBox] = useState([]);
    useEffect(() => {
        fetch('/api/mainnewsbox/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setFirstNewsBox(data[i]);
                    }
                }
                console.log(data);
            });
    }, [])
    return (
        <main id="primary" className="site__main layout--single">


            <article id="post-7808"
                className="post-7808 post type-post status-publish format-standard has-post-thumbnail hentry category-news">
                <header className="single__header">
                    <div className="single__hero">
                        <img width="4786"
                            height="3384"
                            src={firstNewsBox.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt="" decoding="async"
                            fetchpriority="high"
                            srcSet={`${firstNewsBox.image} 4786w, ${firstNewsBox.image} 1024w, ${firstNewsBox.image} 1527w, ${firstNewsBox.image} 768w, ${firstNewsBox.image} 1536w, ${firstNewsBox.image} 2048w, ${firstNewsBox.image} 2037w, ${firstNewsBox.image} 1273w, ${firstNewsBox.image} 552w, ${firstNewsBox.image} 453w`}
                            sizes="(max-width: 4786px) 100vw, 4786px" />
                    </div>

                    <div className="single__details">

                        <h1 className="single__title">
                            {firstNewsBox.title}
                        </h1>




                        <time className="single__date" dateTime="2023-12-01T16:35:01+09:00">
                            <span className="visually-hidden">Posted on</span>
                            {firstNewsBox.date}
                        </time>

                    </div>
                </header>

                <div className="single__content block-area">

                    <div dangerouslySetInnerHTML={{ __html: firstNewsBox.text }} />


                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main>
    )
}

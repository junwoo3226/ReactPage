import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function AwardDetail() {
    const { id } = useParams();

    const [Award, setAward] = useState([]);

    useEffect(() => {
        fetch('/api/award/')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == id) {
                        setAward(data[i]);
                    }
                }
                console.log(data);
            });
    }, [])


    // 상태 변수를 사용하여 토글 상태를 관리합니다.
    const [isActive, setIsActive] = useState(false);

    // 버튼 클릭 이벤트 핸들러
    const toggleInfo = () => {
        setIsActive(!isActive); // 상태를 반전시킵니다.
    };



    return (
        <main id="primary" className="site__main layout--single">


            <article
                className=" post type-post status-publish format-standard has-post-thumbnail hentry category-award category-work"
            >
                <header className="single__header">
                    <div className="single__hero">
                        <img
                            width="6016"
                            height="3384"
                            src={Award.image}
                            className="attachment-hero size-hero wp-post-image"
                            alt=""
                            decoding="async"
                            fetchpriority="high"
                            srcSet={`${Award.image} 6016w, ${Award.image} 1024w, ${Award.image} 1920w, ${Award.image} 768w, ${Award.image} 1536w, ${Award.image} 2048w, ${Award.image} 1440w, ${Award.image} 693w, ${Award.image} 480w" `}
                            sizes="(max-width: 6016px) 100vw, 6016px"
                        />
                    </div>

                    <div className="single__details">

                        <h1 className="single__title">
                            {Award.title}
                        </h1>


                        {Award.name && Award.name.trim() !== '' && (
                            <span className="single__winner">
                                {Award.name}
                            </span>
                        )}
                        {Award.detailname && Award.detailname.trim() !== '' && (
                            <span className="single__member">
                                {Award.detailname}
                            </span>

                        )}



                        {Award.brand === 'IF' && (
                            <div className="single__award">
                                <img
                                    width="32"
                                    height="32"
                                    src="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-32x32.jpg"
                                    className="single__award__icon wp-post-image"
                                    alt=""
                                    decoding="async"
                                    srcSet="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-32x32.jpg 32w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-320x320.jpg 320w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-160x160.jpg 160w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-390x390.jpg 390w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-480x480.jpg 480w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb-64x64.jpg 64w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/04/if_designaward2020_red_l_rgb.jpg 500w"
                                    sizes="(max-width: 32px) 100vw, 32px"
                                />
                                <span className="single__award__title">
                                    iF Design Award
                                </span>
                                <span className="single__award__year">
                                    {Award.brandyear}
                                </span>


                                <button className={`single__award__toggle ${isActive ? 'is-active' : ''}`} type="button" onClick={toggleInfo}>
                                    <span className="visually-hidden">More about iF Design Award</span>
                                    <span className="single__award__toggle__icon">?</span>
                                </button>
                                <div className={`single__award__info ${isActive ? 'is-active' : ''}`}>
                                    <aside className="single__award__info__arrow" ></aside>
                                    iF Design Award is one of the three most influential design awards which span multiple disciplines and receive submissions from more than 50 nations every year.
                                </div>

                            </div>


                        )}
                        {Award.brand === 'RED' && (
                            <div className="single__award">
                                <img
                                    width="32"
                                    height="32"
                                    src="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-32x32.jpg"
                                    className="single__award__icon wp-post-image"
                                    alt=""
                                    decoding="async"
                                    srcSet="https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-32x32.jpg 32w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-320x320.jpg 320w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-160x160.jpg 160w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-480x480.jpg 480w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-64x64.jpg 64w, https://design.unist.ac.kr/wp-core/wp-content/uploads/2021/09/red-dot-award-1-150x150.jpg 150w"
                                    sizes="(max-width: 32px) 100vw, 32px"
                                />
                                <span className="single__award__title">
                                    Red Dot Design Award
                                </span>
                                <span className="single__award__year">
                                    {Award.brandyear}
                                </span>
                                <button className={`single__award__toggle ${isActive ? 'is-active' : ''}`} type="button" onClick={toggleInfo}>
                                    <span className="visually-hidden">More about Red Dot Design Award</span>
                                    <span className="single__award__toggle__icon">?</span>
                                </button>

                                <div className={`single__award__info ${isActive ? 'is-active' : ''}`}>
                                    <aside className="single__award__info__arrow"></aside>
                                    The Red Dot Design Award is one of the three most influential design awards for which designers and manufacturers around the world compete in three different categories: product design; brands and communication design; and design concept.
                                </div>
                            </div>

                        )}





                        <time className="single__date" dateTime="2023-05-15T17:06:56+09:00">
                            <span className="visually-hidden">Posted on</span>
                            {Award.date}
                        </time>

                    </div>
                </header>

                <div className="single__content block-area">

                    <div dangerouslySetInnerHTML={{ __html: Award.text }} />
                </div>
            </article>

            <aside className="closer__wrap">
                <img className="closer" width="30" height="15" src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg" />
            </aside>

        </main>
    )
}
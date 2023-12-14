import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="site__footer footer colophon">
            <div className="site__info footer__info">
                <address
                    id="text-3"
                    className="widget footer__address widget_text"
                >
                    <div className="textwidget">
                        <p>
                            울산광역시 울주군 언양읍
                            <br />
                            유니스트길 50, 44919
                            <br />
                            104동 9 – 10층 디자인학과
                        </p>
                        <p>
                            052 217 3561~3
                            <br />
                            design@unist.ac.kr
                        </p>
                    </div>
                </address>
                <div className="footer__social">
                    <ul id="menu-social" className="menu">
                        <li
                            id="menu-item-2257"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2257"
                        >
                            <a href="https://www.youtube.com/watch?v=yj8sehzCr4E">
                                <span className="visually-hidden">
                                    UNIST Design Department YouTube
                                </span>
                            </a>
                        </li>
                        <li
                            id="menu-item-2048"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2048"
                        >
                            <a href="https://www.facebook.com/groups/UNISTDHE">
                                <span className="visually-hidden">
                                    UNIST Design Department Facebook
                                </span>
                            </a>
                        </li>
                        <li
                            id="menu-item-2049"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2049"
                        >
                            <a href="https://www.instagram.com/unist_designdeprtment/">
                                <span className="visually-hidden">
                                    Instagram
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__branding">
                    <Link className="footer__logo" to="/">
                        <img
                            className="logo"
                            width="245"
                            height="57"
                            src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/logo-white.svg"
                        />
                    </Link>

                    <span className="footer__divider"></span>
                    <a
                        className="footer__logo--unist"
                        href="#"
                    >
                        <img
                            className="logo"
                            width="126"
                            height="21"
                            src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/logo-unist.svg"
                        />
                    </a>
                </div>
            </div>

            <p className="footer__copyright">© Design Department, UNIST</p>
        </footer>
    );
}

export default Footer;

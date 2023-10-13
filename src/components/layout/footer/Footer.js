import footerLogo from "../../../img/logo.png";
import "./footer.scss";
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter, BsVimeo, BsInstagram } from "react-icons/bs"

const Footer = () => {
    return (
        <div id="footer">
            <article className="row">
                <figure className="d-flex justify-content-center col-12">
                    <img src={footerLogo} />
                </figure>
                <section className="d-md-flex d-none justify-content-center col-12">
                    <a className="nav-link active" aria-current="page" href="#home">HOME</a>
                    <a className="nav-link active" aria-current="page" href="#about">ABOUT</a>
                    <a className="nav-link" href="#feature">FEATURE</a>
                    <a className="nav-link" href="#service">SERVICE</a>
                    <a className="nav-link" href="#service">CONTACT</a>
                </section>
                <section className="d-flex justify-content-center col-12 mb-3">
                    <p className="p-2"><FaFacebookF /> | </p>
                    <p className="p-2"><BsTwitter /> |</p>
                    <p className="p-2"><BsVimeo /> |</p>
                    <p className="p-2"><BsInstagram /></p>
                </section>
                <section className="d-flex justify-content-center col-12">
                    <h6>
                    © COPYRIGHT 2019 <span className="pink"> THEMEIES.COM </span> ALL RIGHTS RESERVED.
                    </h6>
                </section>
            </article>
        </div>
    );
};

export default Footer;
import leaf from "../../img/leaf.png"
import hero from "../../img/spa.png"
import logo from "../../img/logo.png";
import "../../style.scss";
import Nav from "../layout/nav/Nav";

const Hero = () => {
    return (
        <>
            <div className="herobgimage">
                <Nav />
                <article className="row">
                    <section className="col-2">
                        <img src={leaf} />
                    </section>
                    <section id="beautyStarts" className="offset-1 col-md-4">
                        <span className="pink">SPA & BEAUTY CENTER</span>
                        <h1 className="mt-3">Beauty and success starts here.</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <article className="row">
                            <section className="col-md-3">
                                <button>RESERVE NOW</button>
                            </section>
                            <section className="col-md-3">
                                <video></video>
                                <p>Watch our story</p>
                            </section>
                        </article>
                    </section>
                    
                </article>
            </div>
        </>
    );
};

export default Hero;
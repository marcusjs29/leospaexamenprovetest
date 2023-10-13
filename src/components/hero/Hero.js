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
                        <img className="img-fluid" src={leaf} />
                    </section>
                    <section id="beautyStarts" className="offset-1 col-md-4 col-sm-7">
                        <span className="pink">SPA & BEAUTY CENTER</span>
                        <h1 className="mt-3">Beauty and success starts here.</h1>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <article className="row mt-5">
                            <section className="col-md-4">
                                <button className="col-12 py-3">RESERVE NOW</button>
                            </section>
                            <section className="col-md-4">
                                
                                <iframe id="myVideo" width="260" height="105" src="https://www.youtube.com/embed/JqHaJkIvz0Q?si=Vt3QlZ8Lk-QrnfgJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                
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
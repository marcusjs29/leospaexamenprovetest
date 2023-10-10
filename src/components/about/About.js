import image1 from "../../img/procedures/4.jpg";
import image2 from "../../img/procedures/5.jpg";
import image3 from "../../img/procedures/6.jpg";
import image4 from "../../img/procedures/7.jpg";
import chinaRose from "../../img/china-rose.png";
import butterfly from "../../img/butterfly.png";
import jasmine from "../../img/jasmine.png";

const About = () => {
    return (
        <>
            <div className="mt-5" id="about">
                <article className="row">
                    <figure className="offset-2 col-2">
                        <img className="img-fluid" src={chinaRose} />
                    </figure>

                </article>

                <article className="row text-center">
                    <section className="col-12">
                        <figure className="offset-5 col-2 text-center">
                            <img src={butterfly} />
                        </figure>
                        <span>ABOUT OUR SPA CENTER</span>
                        <h1 className="mt-3">Come and you will be inspired!</h1>
                        <article className="row">
                            <p className="offset-3 col-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <figure className="offset-1 col-1">
                                <img className="img-fluid" src={jasmine} />
                            </figure>
                        </article>

                        <article className="row">
                            <section className="col-12 d-flex justify-content-center my-5">
                                <button className="p-2">RESERVE NOW</button>
                            </section>
                        </article>
                    </section>
                </article>

                <article className="row g-2">
                    <figure className="col-md-3">
                        <img className="img-fluid" src={image1} />
                    </figure>
                    <figure className="col-md-3">
                        <img className="img-fluid" src={image2} />
                    </figure>
                    <figure className="col-md-3">
                        <img className="img-fluid" src={image3} />
                    </figure>
                    <figure className="col-md-3">
                        <img className="img-fluid" src={image4} />
                    </figure>
                </article>
            </div>
        </>
    );
};

export default About;
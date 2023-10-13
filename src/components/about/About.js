import image1 from "../../img/procedures/4.jpg";
import image2 from "../../img/procedures/5.jpg";
import image3 from "../../img/procedures/6.jpg";
import image4 from "../../img/procedures/7.jpg";
import chinaRose from "../../img/china-rose.png";
import butterfly from "../../img/butterfly.png";
import jasmine from "../../img/jasmine.png";
import spaicon from "../../img/icons/1.png";

const About = () => {
    return (
        <>
            <div className="mt-5" id="about">
                <article className="row">
                    <figure className="offset-2 col-md-2">
                        <img className="img-fluid" src={chinaRose} />
                    </figure>

                </article>

                <article className="row text-center">
                    <section className="col-12">
                        <figure className="offset-5 d-md-flex d-none col-2 justify-content-center">
                            <img src={butterfly} />
                        </figure>
                        <span>ABOUT OUR SPA CENTER</span>
                        <h1 className="mt-3">Come and you will be inspired!</h1>
                        <article className="row">
                            <p className="offset-3 col-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                            <figure className="offset-1 col-1 d-md-flex d-none">
                                <img className="img-fluid" src={jasmine} />
                            </figure>
                        </article>

                        <article className="row">
                            <section className="col-12 d-flex justify-content-center my-5">
                                <button className="p-3 px-5">READ MORE</button>
                            </section>
                        </article>
                    </section>
                </article>

                <article className="row g-2">
                    <figure className="col-md-3">
                        <div className="hovertreatment position-relative">
                            <div className="position-absolute">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <img className="spaiconcenter" src={spaicon} />
                                        <h5>Body Treatement</h5>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid" src={image1} />
                        </div>
                    </figure>
                    <figure className="col-md-3 d-md-flex d-none">
                        <div className="hovertreatment position-relative">
                            <div className="position-absolute">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <img className="spaiconcenter" src={spaicon} />
                                        <h5>Body Treatement</h5>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid" src={image2} />
                        </div>
                    </figure>
                    <figure className="col-md-3 d-md-flex d-none">
                        <div className="hovertreatment position-relative">
                            <div className="position-absolute">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <img className="spaiconcenter" src={spaicon} />
                                        <h5>Body Treatement</h5>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid" src={image3} />
                        </div>
                    </figure>
                    <figure className="col-md-3 d-md-flex d-none">
                        <div className="hovertreatment position-relative">
                            <div className="position-absolute">
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <div className="text-center">
                                        <img className="spaiconcenter" src={spaicon} />
                                        <h5>Body Treatement</h5>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid" src={image4} />
                        </div>
                    </figure>
                </article>
            </div>
        </>
    );
};

export default About;
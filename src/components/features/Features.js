import procedure1 from "../../img/procedures/1.jpg";
import procedure2 from "../../img/procedures/2.jpg";
import procedure3 from "../../img/procedures/3.jpg";

import "../../style.scss";

const Features = () => {
    return (
        <>
            <div className="my-5" id="features">
                <article className="row text-center my-5">
                    <h2>Popular Procedures</h2>
                    <p className="offset-3 col-6">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </article>

                <div className="maincontainer">
                    <article className="row">
                        <section className="col-md-4">
                            <div className="text-center card p-3 pb-5">
                                <figure className="col-12">
                                    <img className="img-fluid" src={procedure1} />
                                </figure>
                                <h5 className="my-4">Massage Therapy</h5>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                <button className="p-2 px-2">Read More</button>
                            </div>
                        </section>

                        <section className="col-md-4">
                            <div className="text-center card p-3 pb-5">
                                <figure className="col-12">
                                    <img className="img-fluid" src={procedure2} />
                                </figure>
                                <h5 className="my-4">Beauty Care</h5>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                <button className="p-2 px-3">Read More</button>
                            </div>
                        </section>

                        <section className="col-md-4">
                            <div className="text-center card p-3 pb-5">
                                <figure className="col-12">
                                    <img className="img-fluid" src={procedure3} />
                                </figure>
                                <h5 className="my-4">Executive Reflexology</h5>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                                <button className="p-2 px-3">Read More</button>
                            </div>
                        </section>
                    </article>
                </div>

            </div>
        </>
    );
};

export default Features;
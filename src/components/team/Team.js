import team1 from "../../img/team/1.jpg";
import team2 from "../../img/team/2.jpg";
import team3 from "../../img/team/3.jpg";
import "../../style.scss";

const Team = () => {
    return (
        <>
            <div className="maincontainer my-5" id="team">
                <article className="row text-center">
                    <section className="col-12">
                        <h2>Experienced Team</h2>
                        <p className="my-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </section>
                    <article className="row">
                        <section className="col-md-4">
                            <div className="text-center position-relative mb-5">
                                <img className="img-fluid" src={team1} />
                                <section className="teamCard">
                                    <h4>Joseph Austin</h4>
                                    <p>Thai Massage</p>
                                </section>

                            </div>
                        </section>

                        <section className="col-md-4">
                            <div className="position-relative mb-5">
                                <img className="img-fluid" src={team2} />
                                <section className="teamCard">
                                    <h4>David Hannan</h4>
                                    <p>Thai Massage</p>
                                </section>
                            </div>

                        </section>

                        <section className="col-md-4 position-relative">
                            <div className="position-relative mb-5">
                                <img className="img-fluid" src={team3} />
                                <section className="teamCard">
                                    <h4>Cheryl Harris</h4>
                                    <p>Thai Massage</p>
                                </section>
                            </div>

                        </section>
                    </article>
                </article>
            </div>
        </>
    );
};

export default Team;
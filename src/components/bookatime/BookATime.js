import appointment from "../../img/appointment-img.jpg";
import "../../style.scss";

const BookATime = () => {
    return (
        <>
            <div className="my-5" id="bookatime">
                <article className="row">
                    <figure className="d-none d-md-flex col-5">
                        <img className="img-fluid" src={appointment} />
                    </figure>
                    <section className="col-md-7">
                        <article className="row p-5">
                            <section className="col-md-4">
                                <input className="my-4 col-12 py-2" type="text" id="name" placeholder="NAME" required></input>
                                <input className="my-4 col-12 py-2" type="text" id="name" placeholder="SELECT SERVICE"></input>
                                <input className="my-4 col-12 py-2" type="date" id="name"></input>
                            </section>
                            <section className="col-md-4">
                                <input className="my-4 col-12 py-2" type="text" id="name" placeholder="EMAIL ADDRESS"></input>
                                <input className="my-4 col-12 py-2" type="text" id="name" placeholder="PHONE NUMBER"></input>
                                <input className="my-4 col-12 py-2" type="time" id="name"></input>
                            </section>
                            <article className="row">
                                <label className="py-3" for="notes">YOUR NOTES</label>
                                <textarea className="col-md-8" type="text" id="notes" rows={1}></textarea>
                                <button className="col-6 p-3 mt-4">MAKE AN APPOINTMENT</button>

                            </article>


                        </article>
                        <form>

                        </form>
                    </section>
                </article>
            </div>
        </>
    );
};

export default BookATime;
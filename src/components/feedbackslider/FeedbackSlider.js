import quote from "../../img/quote.png";
import customer1 from "../../img/customers/client-1.png";
import "../../style.scss";

const FeedbackSlider = () => {
    return (
        <>
            <div className="my-5" id="comments">
                <article className="row text-center">
                    <section className="col-12 my-5">
                        <img src={quote} />
                    </section>
                    <section className="col-12">
                        <p className="offset-3 col-6">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <img className="img-fluid my-4" src={customer1} />
                        <h4 className="mb-5">
                            Jack Marsh, 
                            <span>Executive</span>
                        </h4>

                    </section>

                </article>
            </div>
        </>
    );
};

export default FeedbackSlider;
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { 
  handleChange,
  saveReviews,
  clearReview,
  getReviews
} from "../features/reviews/reviewsSlice";
import ReviewsCSS from "../assets/styles/Reviews.module.css";
import RevLogo from "../assets/images/Reviews_ReviewLogo.png";
import RevLogoA from "../assets/images/Reviews_reviewColored.png";
import { useNavigate } from "react-router-dom";

export default function Reviews() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { reviewsForm, isSave } = useSelector((store) => store.reviews);
    const { is_exist } = useSelector((store) => store.authentication);
    const showReviewForm = useSelector((store) => store.reviews.showReviewForm);
    const reviewImage = useSelector((store) => store.reviews.changeReviewImage);
    const latestReviews = useSelector((store) => store.reviews.latestReviews);

    const handleReviewImageClick = () => {
        dispatch(setShowReviewForm(true)); // Show review form
        dispatch(setChangeReviewImage(RevLogoA));
    };

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    return (
        <>
            <div id="reviews" className={ReviewsCSS.wrapper}>
                <div className={`${ReviewsCSS.inner} container`}>
                    <div className="row">
                    <div className={`${ReviewsCSS.images} col-md-4 col-sm-12 d-flex justify-content-center align-items-center my-5`}>
    <a onClick={handleReviewImageClick}>
        <img className={`${ReviewsCSS.revLogo} mb-5`} src={reviewImage} alt="Review" />
    </a>
</div>


                        {/* Reviews Form */}
                        <div className={`${ReviewsCSS.form} col-md-8 col-sm-12`}>
                            {showReviewForm && (
                                <form
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                        if (is_exist) {
                                            dispatch(saveReviews({ 'reviewsForm': reviewsForm }));
                                            dispatch(clearReview());
                                        } else {
                                            dispatch(clearReview());
                                            navigate("/login");
                                        }
                                    }}
                                >
                                    <div className={ReviewsCSS.formHolder}>
                                        <span>
                                            <i className="fa-regular fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className={ReviewsCSS.formControl}
                                            value={reviewsForm.name}
                                            placeholder="Name"
                                            name="name"
                                            onChange={(event) => {
                                                dispatch(handleChange({
                                                    name: event.target.name,
                                                    value: event.target.value
                                                }));
                                            }}
                                            required
                                        />
                                    </div>

                                    <div className={ReviewsCSS.formHolder}>
                                        <span>
                                            <i className="fa-regular fa-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className={ReviewsCSS.formControl}
                                            value={reviewsForm.email}
                                            placeholder="Email"
                                            name="email"
                                            onChange={(event) => {
                                                dispatch(handleChange({
                                                    name: event.target.name,
                                                    value: event.target.value
                                                }));
                                            }}
                                            required
                                        />
                                    </div>

                                    <div className={ReviewsCSS.formHolder}>
                                        <span>
                                            <i className="fa-regular fa-comment"></i>
                                        </span>
                                        <textarea
                                            className={ReviewsCSS.formControl}
                                            value={reviewsForm.comments}
                                            placeholder="Your Reviews   :)"
                                            name="comments"
                                            onChange={(event) => {
                                                dispatch(handleChange({
                                                    name: event.target.name,
                                                    value: event.target.value
                                                }));
                                            }}
                                            required
                                        />
                                    </div>

                                    <button className={ReviewsCSS.submitBtn}>
                                        <span>Submit</span>
                                    </button>
                                    {isSave === true && (
                                        <div><p className={`${ReviewsCSS.successMsg} mt-2`}>Review Saved Successfully</p></div>
                                    )}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Latest Reviews section */}
            <div className="container-fluid mb-4">
    <div className={`${ReviewsCSS.heading} text-center row`}>
        <h1>Latest Reviews</h1>
    </div>

    <div className={`container-fluid mt-4 ${ReviewsCSS.reviewCards}`}>
        <div className="row justify-content-center">
            {latestReviews && Array.isArray(latestReviews) ? (
                latestReviews.map((item) => (
                    <div className={`col-md-3 card ${ReviewsCSS.singleCard} mx-3 mb-3`} key={item.id}>
                        <div className="card-body">
                            <h5 className={`${ReviewsCSS.name} card-title`}>{item.reviewer_name}</h5>
                            <p className={`${ReviewsCSS.body} card-text`}>{item.reviewer_description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
</div>

        </>
    );
}

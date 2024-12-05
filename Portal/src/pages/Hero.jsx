import HeroCSS from "../assets/styles/Hero.module.css";
import StudyResourcesCSS from "../assets/styles/StudyResources.module.css";
import FeaturesCSS from "../assets/styles/Features.module.css";
import heroImage from "../assets/images/Hero_main.png";
import robot from "../assets/images/Hero_robot.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, logout } from "../features/authentication/authenticationSlice";
import React from "react";
import AboutUs_24_7 from "../assets/images/AboutUs_24_7.png";
import AboutUs_guidance from "../assets/images/AboutUs_guidance.png";
import AboutUs_TimeEff from "../assets/images/AboutUs_TimeEff.png";
import AboutUs_userFriendly from "../assets/images/AboutUs_userFriendly.png";

export default function Hero() {
    const { is_exist, role } = useSelector((store) => store.authentication);
    const dispatch = useDispatch();

    React.useEffect(() => {
        async function fetchAuthentication() {
            await dispatch(authenticate());
        }
        fetchAuthentication();
    }, [dispatch]);

    return (
        <div className={HeroCSS.hero}>
            <section className={`card ${HeroCSS.card} mt-5`}>
                <div className={`row no-gutters ${HeroCSS.card__row}`}>
                    <div className={`col-md-6 ${HeroCSS.card__col}`}>
                        <div className={`cardImage ${HeroCSS.cardImage} mt-5`}>
                            <img src={heroImage} alt="Career Guidance.pk" className={`img-fluid ${HeroCSS.card__image_img}`} />
                        </div>
                    </div>
                    <div className={`col-md-6 ${HeroCSS.card__col}`}>
                        <div className={`card__content ${HeroCSS.card__content}`}>
                            {!is_exist && (
                                <Link to="login" className={`btn ${HeroCSS.loginButton}`}>
                                    Login/Register
                                </Link>
                            )}
                            <div className={`${HeroCSS.BtnDiv} d-flex`}>
                                {is_exist === true && role === "A" && (
                                    <Link to="admin" className={`btn ${HeroCSS.DashboardBtn}`}>
                                        Dashboard
                                    </Link>
                                )}
                                {is_exist === true && role === "C" && (
                                    <Link to="counsellor" className={`btn ${HeroCSS.DashboardBtn}`}>
                                        Dashboard
                                    </Link>
                                )}
                                {is_exist === true && role === "B" && (
                                    <Link to="counsellor" className={`btn ${HeroCSS.DashboardBtn}`}>
                                        Dashboard
                                    </Link>
                                )}
                                {is_exist === true && (
                                    <Link
                                        to="."
                                        className={`btn ${HeroCSS.DashboardBtn} ${
                                            role === "U" ? HeroCSS.UserLogoutButton : ""
                                        }`}
                                        onClick={() => {
                                            dispatch(logout());
                                            window.location.reload();
                                        }}
                                    >
                                        Logout
                                    </Link>
                                )}
                            </div>
                            <h1 className={`card-title ${HeroCSS.cardTitle} mt-4`}>Career Quest</h1>
                            <p className={`card-text ${HeroCSS.cardText}`}>
                                Career Quest is transforming career counseling, empowering youth and students to make
                                informed decisions about their future by leveraging personalized insights.
                            </p>
                            <a
                                href="https://studious-fortnight-pv56w5q9gw5frrq9-8501.app.github.dev/"
                                className={`btn ${HeroCSS.chatButton}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chat with Career Bot{" "}
                                <span>
                                    <img src={robot} className={`${HeroCSS.robot} mb-2`} alt="Career Bot Icon" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={FeaturesCSS.featuresSection}>
                <div className={FeaturesCSS.container}>
                    <h2>Why Choose Our AI Career Counseling Chatbot?</h2>
                    <div className={FeaturesCSS.featuresGrid}>
                        <div className={FeaturesCSS.featureItem}>
                            <img src={AboutUs_guidance} alt="Personalized Guidance" className={FeaturesCSS.featureImage} />
                            <h3>Personalized Guidance</h3>
                            <p>
                                Discover career paths tailored to your skills, interests, and goals with our AI-driven
                                insights.
                            </p>
                        </div>
                        <div className={FeaturesCSS.featureItem}>
                            <img src={AboutUs_24_7} alt="24/7 Guidance" className={FeaturesCSS.featureImage} />
                            <h3>24/7 Guidance</h3>
                            <p>
                                Get expert career advice anytime, anywhere—our chatbot is always available to assist
                                you.
                            </p>
                        </div>
                        <div className={FeaturesCSS.featureItem}>
                            <img src={AboutUs_TimeEff} alt="Time and Cost Effective" className={FeaturesCSS.featureImage} />
                            <h3>Time and Cost Effective</h3>
                            <p>
                                Save time and money with affordable, instant access to personalized career counseling.
                            </p>
                        </div>
                        <div className={FeaturesCSS.featureItem}>
                            <img src={AboutUs_userFriendly} alt="Interactive and User-Friendly" className={FeaturesCSS.featureImage} />
                            <h3>Interactive and User-Friendly</h3>
                            <p>
                                Enjoy an intuitive and engaging experience that makes career exploration easy and
                                enjoyable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={StudyResourcesCSS.studySection}>
                <div className={StudyResourcesCSS.container}>
                    <h2>Study Resources</h2>
                    <p>Prepare for success with these helpful guides:</p>
                    <ul>
                    <Link to="/EntranceExams">Entrance Exams</Link>
                    
                    </ul>
                </div>
            </section>
        </div>
    );
}

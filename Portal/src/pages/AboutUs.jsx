import AboutUsCSS from "../assets/styles/AboutUs.module.css"
import Image1 from "../assets/images/AboutUs_Image1.png"

import Team1 from "../assets/images/AboutUs_Team1.jpeg"
import Team2 from "../assets/images/AboutUs_Team2.jpeg"
import Team3 from "../assets/images/AboutUs_Team3.jpeg"


export default function AboutUs(){
    return (
        <>
            <div className={`p-5 mt-5 ${AboutUsCSS.aboutContainer}`}>
                <div className="d-flex flex-row justify-content-center row">
                    <div className="col-md-6 m-auto">
                        <h1 className={AboutUsCSS.missionheading}>Our Mission</h1>
                        <p className={AboutUsCSS.missionDescription}>Our mission is to empower individuals across India to make informed career decisions by providing personalized,
                             accessible, and expert online career counseling. 
                             We aim to guide students and professionals toward fulfilling career paths by offering 
                             culturally relevant insights, resources, and support tailored to their unique aspirations and goals
                    </p> 
                    </div>
                    <div className={`col-md-6 ${AboutUsCSS.imageContainer}`}>
                        <img className={AboutUsCSS.missionImage} src={Image1} alt="AboutUs_Image" />
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div className={` mt-5 ${AboutUsCSS.headingDiv}`}>
                <h1 className={AboutUsCSS.mainHeading}>Our Team</h1>
            </div>

            <div className={`${AboutUsCSS.cardsContainer} container`}>
                <div className="row">
                    <div className={`col-sm-6 col-lg-3 ${AboutUsCSS.teamCards}`}>
                        <div className={AboutUsCSS.team}>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.frontFace}`}>
                                <img src={Team1} alt="TeamMember1" className={AboutUsCSS.profile} />
                                <div className={`mt-3 text-uppercase ${AboutUsCSS.name}`}>
                                    Guruprasad S A
                                </div>
                            </div>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.backFace}`}>
                                <span className={AboutUsCSS.iconsLeft}><i className="fa-solid fa-quote-left"></i></span>
                                <div className={AboutUsCSS.testimonial}>
                                Excels in problem-solving and has a strong command of skills.
                                    <p className={AboutUsCSS.socialIcons}>
                                        <a href="https://www.linkedin.com/in/guruprasad-s-a-594744269/"><span className={AboutUsCSS.linkedIn}><i class="fa-brands fa-linkedin"></i></span></a>
                                        
                                    </p>
                                </div>
                                <span className={AboutUsCSS.iconsRight}><i className="fa-solid fa-quote-right"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-6 col-lg-3 ${AboutUsCSS.teamCards}`}>
                        <div className={AboutUsCSS.team}>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.frontFace}`}>
                                <img src={Team2} alt="TeamMember1" className={AboutUsCSS.profile} />
                                <div className={`mt-3 text-uppercase ${AboutUsCSS.name}`}>
                                    Jeevan V
                                </div>
                            </div>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.backFace}`}>
                                <span className={AboutUsCSS.iconsLeft}><i className="fa-solid fa-quote-left"></i></span>
                                <div className={AboutUsCSS.testimonial}>
                                Passionate about learning new technologies and consistently delivers high quality work.
                                    <p className={AboutUsCSS.socialIcons}>
                                        <a href="https://www.linkedin.com/in/jeevan-v-2a202425a/"><span className={AboutUsCSS.linkedIn}><i class="fa-brands fa-linkedin"></i></span></a>
                                    </p>
                                </div>
                                <span className={AboutUsCSS.iconsRight}><i className="fa-solid fa-quote-right"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-sm-6 col-lg-3 ${AboutUsCSS.teamCards}`}>
                        <div className={AboutUsCSS.team}>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.frontFace}`}>
                                <img src={Team3} alt="TeamMember1" className={AboutUsCSS.profile} />
                                <div className={`mt-3 text-uppercase ${AboutUsCSS.name}`}>
                                    Pavan V
                                </div>
                                
                            </div>
                            <div className={`${AboutUsCSS.face} ${AboutUsCSS.backFace}`}>
                                <span className={AboutUsCSS.iconsLeft}><i className="fa-solid fa-quote-left"></i></span>
                                <div className={AboutUsCSS.testimonial}>
                                Enthusiastic and committed to continuous learning and growth.
                                    <p className={AboutUsCSS.socialIcons}>
                                        <a href="https://www.linkedin.com/in/pavan-kishan-969ba233b/"><span className={AboutUsCSS.linkedIn}><i class="fa-brands fa-linkedin"></i></span></a>
                                        </p>
                                </div>
                                <span className={AboutUsCSS.iconsRight}><i className="fa-solid fa-quote-right"></i></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Contact */}
            <div className={AboutUsCSS.headingDiv}>
                
            </div>
            <div className={`${AboutUsCSS.contactContainer}`}>
                <div className="row">
                    <div className="col-md-12">
						<div className="text-center">
			        		<div className={AboutUsCSS.icons}>
                             
			        		</div>
				        </div>
                    </div>     
                </div>
                
                
                
            </div>
        </>
    )
}
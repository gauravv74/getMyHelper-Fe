import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Providerprofile.css";
import { useParams } from "react-router-dom";
import APIContext from "../context/APIContext";
import axios from "axios";
// import profile from '../assets/images/profile.jpg';

const Providerprofile = () => {
    const url = useContext(APIContext);
    const {id} = useParams();
   
    const [provider, setProvider] = useState(null);
    const mapUrl =`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5760776475922!2d${18.45754717109685}!3d${73.8482586749414}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR'S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1699462832600!5m2!1sen!2sin`

useEffect(() => {
    const fetchProvider = async () => {
      try {
        const response = await axios.get(`${url}/user/${id}`);
        console.log(response.data);
        setProvider(response.data)

        const data: {
            location: string[];
            _id: string;
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            type: string;
            __v: number;
          } = response.data;
      } catch (error : any) {
        console.error(error.response?.data);
        alert(JSON.stringify(error.response?.data));
      }
    };

    fetchProvider();
  }, [id]);






  
    
      if (!provider) {
        return <div>Loading...</div>;
      }

  return (

  <div className="gaurav">
    <React.StrictMode>
    
  <div className="main-page-content gaurav">
  <div className="main-page-content">
     

    {/* <!-- ================================ ABOUT =============================== --> */}

    <div id="about">
      <div className="about-content">
        {/* <div className="love-grid text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center wow fadeIn">
                  <h3>What We do</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>
                  India's online Platform, connecting users with locally skilled individuals.Revolutionizing the Indian service landscape, this cutting-edge online platform serves as a comprehensive hub, efficiently linking users with a diverse array of highly skilled local professionals, thereby creating a thriving ecosystem of specialized services and fostering community growth.                    </p>
                </div>
              </div>
            </div>
            <div className="row love-row wow fadeIn">
              <div className="col-md-3 col-sm-6">
                <div className="love-details" data-wow-delay=".1s">
                  <i
                    className="fa fa-pencil-square-o love-icon"
                    aria-hidden="true"
                  ></i>
                  <h3>Connect Individuals </h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Facilitates seamless connections between users seeking assistance.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="love-details" data-wow-delay=".3s">
                  <i
                    className="fa fa-file-image-o love-icon"
                    aria-hidden="true"
                  ></i>
                  <h3>Help The Gig Economy</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Boosts the gig economy by creating opportunities for skilled individuals.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="love-details" data-wow-delay=".2s">
                  <i
                    className="fa fa-globe love-icon"
                    aria-hidden="true"
                  ></i>
                  <h3>Skill Verification and Ratings</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Implements a system for verifying the skills.</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="love-details" data-wow-delay=".4s">
                  <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                  <h3>Localized Service Availability</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>Allows users to search for services based on their location.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-back"></div> */}

        <div className="me-grid">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                <div className="about-image">
                  {/* <img
                    src={profile}
                    alt="sanajit-jana"
                    className="about-img wow fadeIn"
                  /> */}
                </div>
              </div>
              <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                <div className="about-details wow fadeIn">
                  <div className="main-title left-title text-left wow fadeIn">
                    <h3>Hello! This is {provider["first_name"]}</h3>
                    <div className="underline1 no-margin"></div>
                    <div className="underline2 no-margin"></div>
                  </div>
                  <p className="wow fadeIn">
                         
                    <a className="underline2" href="#contact">
                      {" "}
                      here.
                    </a>{" "}
                    I'm  a certified electrician registered on this platform. With 9 months of experience in the electrical industry, I specialize in providing a wide range of electrical services. From installations and repairs to troubleshooting and maintenance, I'm dedicated to delivering top-quality workmanship and ensuring the safety of your electrical systems. Your satisfaction and safety are my priorities. Let's work together to meet your electrical needs efficiently and effectively
                    <br />
                    <br />
                    Since beginning my journey as a web developer in my
                    college days, I've done remote work for agencies,
                    consulted for startups, and collaborated with talented
                    people to create digital products for both business and
                    consumer use. I'm quietly confident, naturally curious,
                    and perpetually working on improving my chops one design
                    problem at a time.
                  </p>
        
                  <a className="about-link-2" href="services">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="work-counter text-center">
          <div className="counter">
            <div className="container">
              <div className="row wow fadeIn">
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-pencil-square-o stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">0021</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Satisfied Clients</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-crop stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">0040</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Months of experience</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-bolt stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">0015</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>jobs Done</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="work-statistics">
                    <i
                      className="fa fa-coffee stat-icon"
                      aria-hidden="true"
                    ></i>
                    <h3 className="Count">0085</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Cups Coffee Taken</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 

    {/* <!-- ================================ Skill =============================== --> */}

    {/* <div id="skill">
      <div className="skill-main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title text-center wow fadeIn">
                <h3>My Skill</h3>
                <div className="underline1"></div>
                <div className="underline2"></div>
                <p>
                  I value simple content structure, clean design patterns,
                  and thoughtful interactions.
                </p>
              </div>
            </div>
          </div>
          <div className="row love-row wow fadeIn">
            <div className="col-md-6">
              <div className="skill-details text-left">
                <p>
                  UI/UX involves planning and iterating a site's structure
                  and layout. Once the proper information architecture is in
                  place, I design the visual layer to create a beautiful
                  user experience. Front End Development is building out the
                  visual components of a website. Using HTML, CSS, and
                  Javascript, I build fast, interactive websites. This also
                  may include a CMS, apis, or other integrations. The work
                  that I am most interested in is 0-1 work (helping you get
                  your idea into the world).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-details">
                <div className="content">
                  <div className="col">
                    <ul id="skill-main">
                      <li>
                        <h3>Communication - 97%</h3>
                      </li>
                      <li>
                        <h3>Perfection - 92%</h3>
                      </li>
                      <li>
                        <h3>Time Management - 30%</h3>
                      </li>
                      <li>
                        <h3>Costumer Satisfaction - 93%</h3>
                      </li>
                      <li>
                        <h3>Accuraacy - 95%</h3>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <!-- ================================ RESUME =============================== --> */}

    <div id="resume">
      <div className="resume-content">
        <div className="resume-grid text-center">
          <div className="container">
            {/* <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center wow fadeIn">
                  <h3>Educational Story</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>
                    I like to code things from scratch, and enjoy bringing
                    ideas to life in the browser.
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="row love-row wow fadeIn">
              <div className="col-md-4 col-sm-4">
                <div className="resume-details" data-wow-delay=".2s">
                  <div className="resume-hover"></div>
                  <div className="resume-main">
                    <i
                      className="fa fa-home resume-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>School</h3>
                    <h2>2010-2017</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      Completed my school life from Haludbari High School
                      (H.S.), Khejuri, West Bengal, India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="resume-details" data-wow-delay=".3s">
                  <div className="resume-hover"></div>
                  <div className="resume-main">
                    <i
                      className="fa fa-graduation-cap resume-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Graduation</h3>
                    <h2>2017-2020</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      Achieved my Graduation Degree from{" "}
                      <a
                        href="https://www.cclms.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CCLMS (Contai College of Learning and Management
                        Science)
                      </a>
                      , Contai, West Bengal, India.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-4">
                <div className="resume-details" data-wow-delay=".4s">
                  <div className="resume-hover"></div>
                  <div className="resume-main">
                    <i
                      className="fa fa-graduation-cap resume-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Training &amp; Skill</h3>
                    <h2>2022-2022</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      Currently learning Full-Stack Web Development from{" "}
                      <a
                        href="https://masaischool.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Masai School
                      </a>
                      , Bengaluru, India.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row main-row wow fadeIn">
              <div className="col-md-12">
                <div className="main-title text-center">
                  <h3>Working Experience</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>
                    I don’t like to define myself by the work I’ve done. I
                    define myself by the work I want to do.
                  </p>
                </div>
              </div>
            </div>
            <div className="row love-row">
              <div className="col-md-6 col-sm-12">
                <div className="exp-details" data-wow-delay=".2s">
                  <div className="exp-hover"></div>
                  <div className="exp-main">
                    <i
                      className="fa fa-building exp-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>
                      <a
                        href="https://patelgtech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4d4d4d" }}
                      >
                        Patel G Tech LLP
                      </a>
                    </h3>
                    <h4>Repub Member</h4>
                    <h2>2019-2020</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I did an internship at PATEL G TECH LLP as a
                      Republication Team Member
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="exp-details" data-wow-delay=".3s">
                  <div className="exp-hover"></div>
                  <div className="exp-main">
                    <i
                      className="fa fa-building exp-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>
                      <a
                        href="https://uaguria.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#4d4d4d" }}
                      >
                        Uaguria Software
                      </a>
                    </h3>
                    <h4>Carpenter</h4>
                    <h2>2020-2022</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      At Uaguria Software, I was working as a Web Developer
                      &amp; IT Consultant Person
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 col-sm-4">
                <div className="exp-details" data-wow-delay=".4s">
                  <div className="exp-hover"></div>
                  <div className="exp-main">
                    <i
                      className="fa fa-cogs exp-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Supreme Company</h3>
                    <h4>Designer &amp; Developer</h4>
                    <h2>2013-2016</h2>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- ================================ WORK =============================== --> */}

    {/* <div id="work">
      <div className="work-content">
        <div className="work-grid">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title text-center wow fadeIn">
                  <h3>Work Portfolio</h3>
                  <div className="underline1"></div>
                  <div className="underline2"></div>
                  <p>
                    Here are a few design projects I've worked on recently.
                    Want to see more?{" "}
                    <a className="underline2" href="#contact">
                      contact me.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="gallery" style={{ paddingTop: "80px" }}>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                    alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                    alt="sunset behind San Francisco city skyline"
                  />
                </div>
              </a>
              <div className="gallery-item">
                <img
                  className="gallery-image"
                  src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                  alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                />
              </div>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop"
                    alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop"
                    alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop"
                    alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                    alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                    alt="sunset behind San Francisco city skyline"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                    alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop"
                    alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop"
                    alt="sunset behind San Francisco city skyline"
                  />
                </div>
              </a>
              <a href="#">
                <div className="gallery-item">
                  <img
                    className="gallery-image"
                    src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop"
                    alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div> */}

            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “Sanajit was a real pleasure to work with
                                      and we look forward to working with him
                                      again. He’s definitely the kind of
                                      developer you can trust with a project
                                      from start to finish.”
                                      <br />
                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Sanajit's a clear communicator with the
                                      tenacity and confidence to really dig in
                                      to tricky design scenarios and the
                                      collaborative friction that's needed to
                                      produce excellent work.”
                                      <br />
                                      <span>Kamrul Roy</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Sanajit has done a fantastic job overall.
                                      Not only the site is to design, but the
                                      code is also very clean and slick. Love
                                      the way he achieved the translations
                                      portion of the site.”
                                      <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>


    <div id="contact">
      <div className="contact-content">
        <div className="text-grid">
          <div className="text-grid-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>Contact Me</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I’m always open to discussing product design work or
                      partnership opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-form-details wow fadeIn">
            <div className="container">
              <div className="row contact-row">
                <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                  <h3>Write Your Message Here</h3>
                  <div className="contact-form">
                    <form
                      action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                      method="post"
                      id="mc-embedded-subscribe-form contactForm"
                      name="mc-embedded-subscribe-form"
                      className="contact-form shake validate"
                      target="_blank" 
                      data-toggle="validator"
                     >
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="text"
                            name="FLNAME"
                            id="mce-FLNAME"
                            className="required form-control"
                            placeholder="Your Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="email"
                            className="email required form-control"
                            name="EMAIL"
                            id="mce-EMAIL"
                            placeholder="Your Email"
                            required
                            data-error="Please enter your email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <input
                            type="phone"
                            name="PHONE"
                            className="phone form-control"
                            id="phone mce-PHONE"
                            placeholder="Your Phone"
                            required
                            data-error="Please enter your phone"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="controls">
                          <textarea
                            id="message mce-MESSAGE"
                             placeholder="Your Massage"
                            name="MESSAGE"
                            className="required form-control"
                            required
                            data-error="Please enter your message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div id="mce-responses" className="clear">
                        <div
                          className="response"
                          id="mce-error-response"
                          style={{ display: "none" }}
                        ></div>
                        <div
                          className="response"
                          id="mce-success-response"
                          style={{ display: "none" }}
                        ></div>
                      </div>
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                      >
                        <input
                          type="text"
                          name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                        //   tabindex="-1"
                          value=""
                        />
                      </div>
                      <button
                        type="submit"
                        value="Subscribe"
                        name="subscribe"
                        id="submit mc-embedded-subscribe"
                        className="btn btn-success"
                      >
                        Send Message
                      </button>
                      <div
                        id="msgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                      <div className="clearfix"></div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row contact-info-row text-center wow fadeIn">
                <div className="col-md-3 col-sm-6 contact-colamn">
                  <div className="contact-col-info" data-wow-delay=".2s">
                    <i
                      className="fa fa-map-marker contact-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Address</h3>
                    <p>Kolkata, West Bengal, India</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 contact-colamn">
                  <div className="contact-col-info" data-wow-delay=".4s">
                    <i
                      className="fa fa-envelope contact-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Email</h3>
                    <a
                      href="mailto:contact.nannevaibhav@gmail.com"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "17px",
                      }}
                    >
                      {provider["email"]}
                    </a>   
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 contact-colamn">
                  <div className="contact-col-info" data-wow-delay=".6s">
                    <i
                      className="fa fa-mobile contact-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Phone</h3>
                    <a
                      href="tel:8372876775"
                      style={{
                        color: "black",
                        textDecoration: "none",
                        fontSize: "17px",
                      }}
                    >
                      +91 8372876775
                    </a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 contact-colamn">
                  <div className="contact-col-info" data-wow-delay=".6s">
                    <i
                      className="fa fa-television contact-icon"
                      aria-hidden="true"
                    ></i>
                    <h3>Portfolio</h3>
                    <p>https://vaibhav18.github.io/</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid map-col">
              <div className="col-md-12 col-sm-12 map-col">
                <div className="google-maps">
                  <div className="map-wrap">
                    <iframe
                      title="google-maps"
                      src= {mapUrl}
                   width="100%"
                      height="450"
                      style={{ border: "0" }}
                    //   allowfullscreen=""
                      loading="lazy"
                    //   referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</React.StrictMode>
</div>
  );
};

export default Providerprofile;
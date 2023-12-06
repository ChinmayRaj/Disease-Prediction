import React, { useState } from "react";
import Countup from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./Home.css";
import banner from "../../assets/banner.png"
import flow from "../../assets/flow.svg"
import patient from "../../assets/patient.svg"
import img from "../../assets/sekiro.jpg";
import img1 from "../../assets/google.png";
import img2 from "../../assets/intel.png";
import img3 from "../../assets/maestro.png";
import img4 from "../../assets/mastercard.png";
import img5 from "../../assets/microsoft.png";
import img6 from "../../assets/oracle.png";
import img7 from "../../assets/samsung.png";
import img8 from "../../assets/toyota.png";
import img9 from "../../assets/walmart.png";
import img10 from "../../assets/walt-disney.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [counteron, Setcounteron] = useState(false);

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="banner">
        <div className="left-side">
          <h2>More than a  <br />Symptomer Checker</h2>
          <p>
            Sensely's comprehensive clinical decision <br /> support solution navigates
            users from <br /> problem to solution, all through a simple conversation
            to:
          </p>
          <ul>
            <li>Assess symptoms</li>
            <li>Route patients to care</li>
            <li>Deliver content from leading sources</li>
          </ul>
        </div>
        <div className="right-side">
<img className="bannerimg" src={banner} alt="" />
        </div>
      </div>
    
      <div className="counter-div">
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={100}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> patients treated</span>
          </h1>
        </ScrollTrigger>
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={200}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> Prediction made</span>
          </h1>
        </ScrollTrigger>
        <ScrollTrigger
          className="innercounter"
          onEnter={() => Setcounteron(true)}
          onExit={() => Setcounteron(false)}
        >
          <h1>
            {counteron && (
              <Countup
                className="counter"
                start={0}
                end={300}
                duration={3}
                delay={0}
              />
            )}
            + <br />
            <span> Appointments made</span>
          </h1>
        </ScrollTrigger>
      </div>


      <div className="info">
        <div className="left-side">
          <h2>Improve Patient Flow</h2>
          <p>
          Identify patients’ needs and appropriate care. Using our technology, it is easy to accurately identify those who can self-treat, qualify for teleconsultation, consult a doctor, or seek immediate medical treatment.
          </p>
          <p>
           <span>$18B</span> 
            
<br />
in healthcare savings per year when patients are led to proper care
<br />
           <span>25%</span> 

<br />
of cases can be self-treated or treated through teleconsultation</p>
        </div>
        <div className="right-side">
<img className="infoimg" src={flow} alt="" />
        </div>
      </div>
    


      <div className="partners">
        <h2>Our Sponsor Partners</h2>
        <div className="logos">
          <div className="logos-slide">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </div>
          <div className="logos-slide">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
          </div>
        </div>
      </div>





      <div className="patient">
        <div className="left-side">
        <img className="infoimg" src={patient} alt="" />

        </div>
        <div className="right-side">
<h2>Give patients a tool <br /> they will love</h2>
          <p>
          People worldwide, all ages and professions <br /> (including clinicians), use our Symptom Checker <br /> and appreciate its accuracy, reliability and <br /> simplicity of use. Up your service level and add <br /> a Symptom Checker to your organization.</p>
        </div>
      </div>    
      
      
      
      
      
        
      <div className="accordion">
        <h1>FAQ'S</h1>
        <div className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 0 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(0)}
          >
            What is a Resume?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 0 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.4s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
              A resume is a brief document that gives an overview of your
              qualifications. It includes information about your work history,
              education, and professional skills relevant to the job. It also
              shows your achievements, awards, certifications, and other things
              that will help you impress the recruiter.
              <br />
              <br />
              In other words, a resume is a document necessary to apply for any
              job and to convince your potential employer that you’re the
              perfect fit for their opening. A unique resume template, an
              ATS-friendly document, and a perfect cover letter can skyrocket
              those chances.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 1 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(1)}
          >
            What does an ATS-friendly resume mean?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 1 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
              An ATS-friendly resume is one that is fully and easily scanned and
              understood by the Applicant Tracking Systems. Format your resume
              and include relevant keywords to achieve it. Many companies use
              such software to scan and filter resumes before landing on a
              recruiter’s desk.
              <br />
              <br />
              All the templates in Zety resume builder are 100% ATS-compliant.
              Make your resume using an ATS-friendly resume template, and don’t
              get rejected.
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 2 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(2)}
          >
            What should I include on my resume?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 2 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
              <p>
                A resume consists of several parts. Here's what you should
                include on your resume in 2023:
              </p>
              <br />
              <ul style={{ paddingLeft: "1rem" }}>
                <li>Contact Details (with a LinkedIn Profile) </li>
                <li>Resume Summary or Resume Objective</li>
                <li>Work Experience</li>
                <li> Education & Diplomas</li>
                <li>
                  Professional Skills (consider listing hard skills and soft
                  skills separately)
                </li>
                <li>Additional Information</li>
              </ul>
              <br />
              <p>
                When building a resume in our resume app, you'll be guided
                through each step of the resume creation process and given
                expert tips and even generated content tailored to the job
                you’re applying for. After you're done, your resume should be
                one-page long. But there are exceptions, and sometimes it can be
                a two-page resume. Find more about an ideal resume length.
              </p>
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 3 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(3)}
          >
            Do I need a different resume for every different job application?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 3 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
              Yes, you do! You should make a different resume for every
              application. Tailoring your resume to each job you apply to can
              significantly increase your chances of getting hired. Generic
              resumes simply don't stand a chance against a targeted resume.
              <br />
              <br />
              For an easy way out, check if the job title and skills section
              match and are relevant to the job you’re after.
              <br />
              <br />
              In our resume generator, once you enter the job title you’re
              pursuing, you’ll get customized suggestions for a list of skills,
              resume profile, and other areas that can be improved. Also, you
              can easily duplicate, change, and save every resume you write.
              That makes it way easier to tailor your resume for each job offer
              you’re applying for in less than 5 minutes. Now you don't have to
              mass-send the same resume or spend hours creating a new one for
              each offer from scratch!
            </div>
          </div>
        </div>
        <div className={`accordion-item ${activeIndex === 4 ? "active" : ""}`}>
          <div
            className={`accordion-item-header ${
              activeIndex === 4 ? "active" : ""
            }`}
            onClick={() => handleAccordionClick(4)}
          >
            Do I need a cover letter for my resume?
          </div>
          <div
            className="accordion-item-body"
            style={{
              maxHeight: activeIndex === 4 ? "1000px" : "0",
              overflow: "hidden",
              transition: "max-height 0.2s ease-out",
            }}
          >
            <div className="accordion-item-body-content">
              Yes, cover letters are necessary. Your recruiters might need more
              time to read it carefully, but they will find time to scan them
              when they consider you as a potential hire.
              <br />
              <br />
              Submitting a cover letter is one of the best ways to boost your
              resume and prove just how motivated you are. More than 25% of
              recruiters consider them critical, and half of them prefer when
              applicants attach a cover letter to their resume. Of course, a
              cover letter will only work if it is as tailored and unique as
              your resume, so it’s important to figure out what a cover letter
              should say to wow the recruiter.
              <br />
              <br />
              To learn more about creating a job-winning cover letter, check out
              our guide on how to write a cover letter. Help yourself with our
              hundreds of free cover letter examples, or use our professional
              cover letter templates that match your resume in our resume
              builder.
            </div>
          </div>
        </div>
        {/* Add more accordion items as needed */}
      </div>
      <div className="review-section">
        <h1>Customer Review</h1>
        <p className="text">Read what our customers have to say about us</p>
        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>

        <div className="inner-review">
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
          <div className="review">
            <div className="top-section">
              <img src={img} alt="" />
              <div className="detail">
                <h2>Sagar Negi</h2>
                <p>Position,Company</p>
              </div>
            </div>
            <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              culpa repudiandae nisi ut dolor alias a maxime aliquam omnis
              aspernatur sunt eaque exercitationem rerum, assumenda velit
              eveniet facere. Ipsum, soluta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

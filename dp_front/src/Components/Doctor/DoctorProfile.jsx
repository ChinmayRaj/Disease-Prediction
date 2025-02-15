import React, { useState, useEffect } from 'react';
import "./doctor.css";
import { FaStar, FaStarHalf, FaUserMd, FaUser } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useParams } from 'react-router-dom';
import doctorService from '../../services/doc_service';
import clientApi from '../../services/client_api';

const DoctorProfile = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [doctor, setDoctor] = useState({});
  const [flag, setFlag] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    doctorService.get(params.id).then((res) => {
      console.log("Doctor: ", res.data);
      setDoctor(res.data);
      setReviews(res.data.reviews);
    }).catch((err) => {
      console.log(err);
    });
  }, [flag]);

  const handleBook = () => {
    clientApi.post(`/booking/checkout-session/${doctor._id}`).then((res) => {
      console.log("Booking Res: ", res.data);
      if (res.data) {
        window.location.href = res.data.session.url;
      }
    }).catch((err) => {
      console.log("Booking Error: ", err);
    });
  };

  const handleSubmitFeedback = () => {
    const data = {
      reviewText: userComment,
      rating: userRating,
      createdAt: new Date().toISOString(), // Include the current timestamp
    };

    clientApi.post(`/doctor/${doctor._id}/reviews`, data).then((res) => {
      console.log("Res :", res.data);
      setFlag(flag ? 0 : 1);
    }).catch((err) => {
      console.log("Error :", err);
    });

    setUserRating(0);
    setUserComment('');
    setShowFeedbackForm(false);
  };

  return (
    <div className="doctor">
      <div className="profile">
        <div className="top">
          <div className="top-left">
            <div className='imgdiv'>
              {doctor.image ? (
                <img src={doctor.image} alt={doctor.name} />
              ) : (
                <FaUserMd className='default-icon' />
              )}
            </div>
            <div className='infodiv'>
              <p>Name: <span>{doctor.name}</span></p>
              <p>Email: <span>{doctor.email}</span></p>
              <p>Phone: <span>{doctor.phone}</span></p>
           
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
                <span>{doctor.avgRating}/5</span>
              </div>
              <p className='profession'>{doctor.specialization}</p>
            </div>
          </div>
          <div className="top-right">
            <p className='price'>Price: <span>₹{doctor.price}</span></p>
            <div className="">
              <h3>Available slots:</h3>
              <div className='timing'>
                <div>
                  <p>Monday </p>
                  <p>Wednesday </p>
                  <p>Friday </p>
                </div>
                <div>
                  <p> 10:00 am - 2:00 pm</p>
                  <p> 4:00 pm - 6:00 pm</p>
                  <p> 10:00 am - 2:00 pm</p>
                </div>
              </div>
            </div>
            <button onClick={handleBook}>Book Appointment</button>
          </div>
        </div>
        {/* <div className="mid">
          <h1>Personal Information</h1>
          <div className='infodiv'>
            <div className='detail'>
              <p>Name: <span>{doctor.name}</span></p>
              <p>Email: <span>{doctor.email}</span></p>
              <p>Phone: <span>{doctor.phone}</span></p>
              <p>Address: <span>{doctor.address}</span></p>
            </div>
            <div className='aboutme'>
              <h2>About Me:</h2>
              <p>{doctor.about}</p>
            </div>
          </div>
        </div> */}
        <div className="bottom">
          <h2>Feedback</h2>
          <p className='reviewnum'>All reviews <span>({reviews.length})</span>:</p>
          <div className='allreview'>
          {reviews.map((review, index) => (
            <div className="feedback" key={index}>
              {/* <div className='imgdiv'>
                {review.user.image ? (
                  <img src={review.user.image} alt={review.user.username} />
                ) : (
                  <FaUser className='default-icon' />
                )}
              </div> */}
              <div className='feed'>
                <p className='name'>Name: <span>{review.user.username}</span></p>
                <div className='ratingdiv'>
                  <p>Rating:</p>
                  <div className="stars">
                    {[...Array(Math.floor(review.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {review.rating % 1 !== 0 && <FaStarHalf />}
                    {[...Array(5 - Math.ceil(review.rating))].map((_, i) => (
                      <CiStar key={i} />
                    ))}
                  </div>
                </div>
                <h3>Comment: <span>{review.reviewText}</span> </h3>
                <p className='datetime'>Date: <span>{new Date(review.createdAt).toLocaleDateString()}</span></p>
                <p className='datetime'>Time: <span>{new Date(review.createdAt).toLocaleTimeString()}</span></p>
              </div>
            </div>
          ))}
          </div>
          <button className='feedbackbtn' onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
        </div>
        {showFeedbackForm && (
          <div className="feedback-form">
            <h2>Provide Your Feedback</h2>
            <div>
              <p>Rating:</p>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} onClick={() => setUserRating(i + 1)} style={{ color: (i + 1) <= userRating ? "#ffc107" : "#e4e5e9", cursor: "pointer" }} />
                ))}
              </div>
            </div>
            <textarea placeholder="Your Comment" value={userComment} onChange={(e) => setUserComment(e.target.value)} />
            <button onClick={handleSubmitFeedback}>Submit</button>
            <button onClick={() => setShowFeedbackForm(false)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorProfile;

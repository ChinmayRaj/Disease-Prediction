import React, { useState } from 'react';
import './Symptom.css';
import BookData from '../Search/Data.json';
import SearchBar from '../Search/SearchBar.jsx'
import { FaTimes } from 'react-icons/fa';
import img1 from '../../assets/men_front.png'
import img2 from '../../assets/men_back.jpeg'
import PredictionService from "../../services/prediction_service.jsx"

const Symptom = () => {

  const data = {
    "abdominal_pain": 0.0,
    "abnormal_menstruation": 0.0,
    "acidity": 0.0,
    "acute_liver_failure": 0.0,
    "altered_sensorium": 0.0,
    "anxiety": 0.0,
    "back_pain": 0.0,
    "belly_pain": 0.0,
    "blackheads": 0.0,
    "bladder_discomfort": 0.0,
    "blister": 0.0,
    "blood_in_sputum": 0.0,
    "bloody_stool": 0.0,
    "blurred_and_distorted_vision": 0.0,
    "breathlessness": 0.0,
    "brittle_nails": 0.0,
    "bruising": 0.0,
    "burning_micturition": 0.0,
    "chest_pain": 0.0,
    "chills": 0.0,
    "cold_hands_and_feets": 0.0,
    "coma": 0.0,
    "congestion": 0.0,
    "constipation": 0.0,
    "continuous_feel_of_urine": 0.0,
    "continuous_sneezing": 0.0,
    "cough": 0.0,
    "cramps": 0.0,
    "dark_urine": 0.0,
    "dehydration": 0.0,
    "depression": 0.0,
    "diarrhoea": 0.0,
    "dischromic_patches": 1.0,
    "distention_of_abdomen": 0.0,
    "dizziness": 0.0,
    "drying_and_tingling_lips": 0.0,
    "enlarged_thyroid": 0.0,
    "excessive_hunger": 0.0,
    "extra_marital_contacts": 0.0,
    "family_history": 0.0,
    "fast_heart_rate": 0.0,
    "fatigue": 0.0,
    "fluid_overload": 0.0,
    "foul_smell_ofurine": 0.0,
    "headache": 0.0,
    "high_fever": 0.0,
    "hip_joint_pain": 0.0,
    "history_of_alcohol_consumption": 0.0,
    "increased_appetite": 0.0,
    "indigestion": 0.0,
    "inflammatory_nails": 0.0,
    "internal_itching": 0.0,
    "irregular_sugar_level": 0.0,
    "irritability": 0.0,
    "irritation_in_anus": 0.0,
    "joint_pain": 0.0,
    "knee_pain": 0.0,
    "lack_of_concentration": 0.0,
    "lethargy": 0.0,
    "loss_of_appetite": 0.0,
    "loss_of_balance": 0.0,
    "loss_of_smell": 0.0,
    "malaise": 0.0,
    "mild_fever": 0.0,
    "mood_swings": 0.0,
    "movement_stiffness": 0.0,
    "mucoid_sputum": 0.0,
    "muscle_pain": 0.0,
    "muscle_wasting": 0.0,
    "muscle_weakness": 0.0,
    "nausea": 0.0,
    "neck_pain": 0.0,
    "nodal_skin_eruptions": 1.0,
    "obesity": 0.0,
    "pain_behind_the_eyes": 0.0,
    "pain_during_bowel_movements": 0.0,
    "pain_in_anal_region": 0.0,
    "painful_walking": 0.0,
    "palpitations": 0.0,
    "passage_of_gases": 0.0,
    "patches_in_throat": 0.0,
    "phlegm": 0.0,
    "polyuria": 0.0,
    "prominent_veins_on_calf": 0.0,
    "puffy_face_and_eyes": 0.0,
    "pus_filled_pimples": 0.0,
    "receiving_blood_transfusion": 0.0,
    "receiving_unsterile_injections": 0.0,
    "red_sore_around_nose": 0.0,
    "red_spots_over_body": 0.0,
    "redness_of_eyes": 0.0,
    "restlessness": 0.0,
    "runny_nose": 0.0,
    "rusty_sputum": 0.0,
    "scurring": 0.0,
    "shivering": 0.0,
    "silver_like_dusting": 0.0,
    "sinus_pressure": 0.0,
    "skin_peeling": 0.0,
    "skin_rash": 1.0,
    "slurred_speech": 0.0,
    "small_dents_in_nails": 0.0,
    "spinning_movements": 0.0,
    "spotting_urination": 0.0,
    "stiff_neck": 0.0,
    "stomach_bleeding": 0.0,
    "stomach_pain": 0.0,
    "sunken_eyes": 0.0,
    "sweating": 0.0,
    "swelled_lymph_nodes": 0.0,
    "swelling_joints": 0.0,
    "swelling_of_stomach": 0.0,
    "swollen_blood_vessels": 0.0,
    "swollen_extremeties": 0.0,
    "swollen_legs": 0.0,
    "throat_irritation": 0.0,
    "toxic_look_typhos": 0.0,
    "ulcers_on_tongue": 0.0,
    "unsteadiness": 0.0,
    "visual_disturbances": 0.0,
    "vomiting": 0.0,
    "watering_from_eyes": 0.0,
    "weakness_in_limbs": 0.0,
    "weakness_of_one_body_side": 0.0,
    "weight_gain": 0.0,
    "weight_loss": 0.0,
    "yellow_crust_ooze": 0.0,
    "yellow_urine": 0.0,
    "yellowing_of_eyes": 0.0,
    "yellowish_skin": 0.0,
    "blank": 1.0,
    "itching": 1.0
   }
  
  const [currentImage, setCurrentImage] = useState(1);
  const [result, setResult] = useState("Prediciton not made yet!!");

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  // Function to handle selected symptoms from SearchBar
  const handleSymptomSelect = (selectedSymptom) => {
    // Update the state with the selected symptom
    if (!selectedSymptoms.includes(selectedSymptom)) {
      setSelectedSymptoms([...selectedSymptoms, selectedSymptom]);
    }
    else {
      // Show an alert if the symptom is already present
      alert('This symptom is already selected.');
    }
  };

  const handleRemoveSymptom = (index) => {
    const updatedSymptoms = [...selectedSymptoms];
    updatedSymptoms.splice(index, 1);
    setSelectedSymptoms(updatedSymptoms);
  };

  const handleSubmit = () => {
    console.log("Selected Symptoms:", selectedSymptoms);
    PredictionService.getRes(data).then((res)=>{
      console.log('Result of pred :',res.data);
      setResult(res.data)
    }).catch((err)=>{
      console.log('Pred error :',err);
    });
  };

  return (
    <>
    <div className="symptom-div">
      <div className="main-div">
        <div className="left-side">
          <h2>Add your symptoms</h2>
          <p>Add as many symptoms as you can for the most accurate results.</p>
          <SearchBar
            placeholder="Enter a Symptom..."
            data={BookData}
            onSymptomSelect={handleSymptomSelect}
          />
{selectedSymptoms.length === 0 && (
            <div className="content-div">
              <p>Please try to add at least three symptoms</p>
            </div>
          )}
          {selectedSymptoms.length > 0 && (
            <div className="content-div">
              <ul>
                {selectedSymptoms.map((symptom, index) => (
                  <li key={index}>
                    {symptom}
                    <FaTimes className='crossitem' onClick={() => handleRemoveSymptom(index)} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {selectedSymptoms.length >= 3 && (
        <button onClick={handleSubmit}>Submit</button>
        )}
        <div>Prediction : {result}</div>
        </div>
        <div className="right-side">
            <img
        src={
          currentImage === 1
            ? img1
            : img2
        }
        alt={`Image ${currentImage}`}
        
      />
                <button className='btn' onClick={toggleImage}><i className="fa-solid fa-rotate"></i> Rotate Model</button>
            </div>
      </div>
    </div>
    </>

  )
}

export default Symptom











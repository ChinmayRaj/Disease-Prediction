import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/login.gif';
import { useFormik } from "formik";
import userService from '../../services/user_service.jsx'
import { saveToken } from '../../services/user_service.jsx';
import {loginschema} from '../Login/Loginschema.jsx'
import { SiteContext } from '../../context/siteContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const { setUid } = useContext(SiteContext)
  const navigate = useNavigate()
  const showToastMessage =(msg) => {
    // console.log("called ",msg)
    if(msg === "success"){
      toast.success('LOGIN SUCCESSFUL !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    else if(msg === "failed"){
      toast.warning('Incorrect UserName or Password !', {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: 2000,
          pauseOnHover: false,
          hideProgressBar: true
      });
    }
    };

  const initialValues = {
    username: "",
    password: ""
    };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginschema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log("Login Values:", values);
        userService.login(values).then(async (res)=>{
          console.log('Login Res:', res.data);
          showToastMessage("success");
          await delay(2000);
          setUid(res.data.uid);
          saveToken({"uid": res.data.uid, "Token":res.data.token})
          await delay(100);
          navigate("/")
        }).catch((err)=>{
          toast.warning('Invalid credentials',err.response.data);
        })
        action.resetForm();
      },
    });

  return (
    <>
    <ToastContainer/>
    <div className="login-container">
  <div className="login-form">
    <div className="login-left">
    <form onSubmit={handleSubmit}>

      <h2>User Login </h2>
      <div className='formbox'>

      <div className="box">
        <i className="fa-solid fa-user" />
        <div>
        <input  type="text"  placeholder="Username"  
                      autoComplete="off"
                      name="username"
                      id="username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}/>
        {errors.username && touched.username ? (
          <p className="form-error">{errors.username}</p>
          ) : null}
                    </div>
      </div>
      <div className="box">
        <i className="fa-solid fa-lock" />
        <div>
        <input  type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                    {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                      ) : null}
                    </div>
      </div>
      </div>

      <a href="" className='forgot'>Forgot Password?</a> <br />
      <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up now</Link>{" "}
      </p>
      
    </div>
    <div className="login-right">
      <img src={img} alt="" />
    </div>
  </div>
</div>

  </>
  )
}

export default Login
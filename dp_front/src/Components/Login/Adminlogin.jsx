import React, { useContext } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import img from '../../assets/login.gif';
import { useFormik } from "formik";
import adminService from '../../services/admin_service.jsx';
import {loginschema} from '../Login/Loginschema.jsx'
import { SiteContext } from '../../context/siteContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Adminlogin = () => {
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
        });
      }
      else if(msg === "failed"){
        toast.warning('Incorrect UserName or Password !', {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            pauseOnHover: false,
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
          const data={
            adminname: values.username,
            password: values.password
          }
          console.log("Login Values:", data);
          adminService.login(data).then(async (res)=>{
            console.log('Login Res:', res.data);
            showToastMessage("success");
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

      <h2>Admin Login </h2>
      <div className='formbox'>

      <div className="box">
      <i class="fa fa-envelope" />
        <div>
        <input  type="text"  placeholder="adminname"  
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
        Don't have an account? <Link to="/adminregister">Sign up now</Link>{" "}
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

export default Adminlogin
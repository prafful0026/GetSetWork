import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/Login.css';

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirm, setconfirm] = useState("");
    const [passwordToggler, setPasswordToggler] = useState(false);
    const [loading, setLoading] = useState(false);
    var passwordRef = React.createRef();
    const [error, setError] = useState({
        status:false,
        message: "",
        style : {
            top:"-10rem"
        }
    });

    const toggleIcon = passwordToggler ? (
        <div className="password-toggler">
            <i className="fas fa-eye-slash" onClick={()=> {managePasswordVisibility()}}></i>
        </div>
    ) : (
        <div className="password-toggler">
            <i className="fas fa-eye" onClick={()=> {managePasswordVisibility()}}></i>
        </div>
    );

    const submitButton = loading ? (
            <button className="form-button"><i className="fas fa-spinner" ></i></button>
        ) : (
            <button className="form-button">Sign Up</button>
        )

    const managePasswordVisibility = () => {
        const node = passwordRef.current;
        if(passwordToggler){
            node.type="password";
            setPasswordToggler(false);
        }
        else{
            node.type = "text";
            setPasswordToggler(true);
        }
    }

    const handleSettingError = (message, status) => {
        if(status){
            setError({
                message:message,
                status: status,
                style:{
                    top:"3rem"
                }
            });
        }
        
        else{
            setError({
                message:message,
                status: status,
                style:{
                    top:"-10rem"
                }
            });
        }

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirm){
            setLoading(true);
            axios.post("/api/user/signup",{
                name : name,
                email : username,
                password : password,
                role : "freelancer"
            })
            .then((res) => {
                console.log(res.data);
                setLoading(false);
            })
            .catch((error) => {
                handleSettingError(error.response.data, true);
                setLoading(false);
                setTimeout(() => {
                    handleSettingError(error.response.data, false);
                },5000);
            });
            }else{
                handleSettingError("Password does not match.", true);
                setTimeout(() => {
                    handleSettingError("Password does not match.", false);
                },5000);
            }
            
    }

    const clearError = () => {
        setError({
            message:error.message,
            status:false,
            style:{
                top:"-10rem"
            }
        });
    }

    return ( 
        <div className="login">
            <div className="error" style={error.style}>
                <i className="fas fa-times-circle" onClick={clearError}></i>
                <div>{error.message}</div>
            </div>
            <div className="brand">
                <Link to={'/'} >GetSetWork</Link>
            </div>
            <div className="form-div">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-header">
                        Sign Up
                    </div>
                    <div className="input-div">
                        <input 
                            type="text" 
                            name="name" 
                            className="form-input" 
                            placeholder="  " 
                            required 
                            onChange={(e)=>{
                                setName(e.target.value);
                            }}
                            />
                        <label htmlFor="name" className="form-label">Name</label>
                        <div className="input-icon"><i className="far fa-user"></i></div>
                    </div>
                    <div className="input-div">
                        <input 
                            type="email" 
                            name="email" 
                            className="form-input" 
                            placeholder="  " 
                            required 
                            onChange={(e)=>{
                                setUsername(e.target.value);
                            }}
                            />
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-icon"><i className="far fa-envelope"></i></div>
                    </div>
                    <div className="input-div">
                        <input 
                        type="password" 
                        name="password" 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-icon"><i className="fas fa-lock"></i></div>
                    </div>
                    <div className="input-div">
                        <input 
                        type="password" 
                        name="confirm" 
                        ref={passwordRef} 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        onChange={(e)=>{
                                setconfirm(e.target.value);
                            }}
                        />
                        <label htmlFor="confirm" className="form-label">Confirm Password</label>
                        <div className="input-icon"><i className="fas fa-key"></i></div>
                        {toggleIcon}
                    </div>
                    {submitButton}
                </form>
            </div>
        </div>
     );
}
 
export default Register;
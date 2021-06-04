import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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
            <button className="form-button" disabled><i className="fas fa-spinner" ></i></button>
        ) : (
            <button className="form-button">Log In</button>
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


    const handleSubmit = (e) => {
        setLoading(true);
        axios.post("/api/user/login",{
            email : username,
            password : password
        })
        .then((res) => {
            console.log(res.data);
            setLoading(false);
        })
        .catch((error) => {
            setError({
                message:error.response.data,
                status: true,
                style:{
                    top:"3rem"
                }
            });
            setLoading(false);
            setTimeout(() => {
                setError({
                    message:error.response.data,
                    status: false,
                    style:{
                        top:"-10rem"
                    }
                });
            },5000);
        });
        e.preventDefault();
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
                        Log In
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
                        <label htmlFor="email" className="form-label">Username</label>
                        <div className="input-icon"><i className="far fa-user"></i></div>
                    </div>
                    <div className="input-div">
                        <input 
                        type="password" 
                        name="password" 
                        ref={passwordRef} 
                        className="form-input" 
                        placeholder="  " 
                        required 
                        onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-icon"><i className="fas fa-lock"></i></div>
                        {toggleIcon}
                    </div>
                    {submitButton}
                </form>
            </div>
        </div>
     );
}
 
export default Login;
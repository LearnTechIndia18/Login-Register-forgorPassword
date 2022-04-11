import React  from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
export default class Login extends Component{
    render(){
        return(
            <div class="container-fluid pages" style={{ width: '600px' }}>
            <div class="col-12 grid-margin ">
            <div class="card" >
            <div class="card-body">
            <div class="main">
            <h1 class="sign" align="center">Welcome to E-commerce, Sign In to Continue!</h1>
             
            <div className="row">
            <form class="forms-sample" autoComplete='off'>
            <div class="col-md-11-sm-11-lg-11">
            <input class="un " type="text" align="center" placeholder="Username"/>  
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="password" align="center" placeholder="Password"/>
            </div>
            <div class="col-md-11-sm-11-lg-11 m-2">
            <a class="submit" align="center" style={{fontWeight:'bolder'}}>Sign In</a>
            </div>
            <div class="col-md-11-sm-11-lg-11 m-2">
      
            </div>
            <div class="col-md m-4">
            <Link class="forgot" to="/forgotpassword"  >Forgot Password?</Link>
            </div>  
            <div class="col-md m-4">
            <Link class="forgot"  to="/register">Register as new user?</Link>
            </div>     
            </form>   
            </div>
         
            </div>
            </div>
            </div>

            </div>
        
            </div>
        )
    }
}
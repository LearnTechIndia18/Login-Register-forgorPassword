import React  from "react";
import { Component } from "react";
 
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
export default class Register extends Component{
    render(){
         
     
        return(
            <div class="container-fluid pages" style={{ width: '600px' }}>
            <div class="col-12 grid-margin  ">
            <div class="card" >
            <div class="card-body">
            <div class="main1">
            <h1 class="sign" align="center">Welcome to E-commerce, Sign Up to join with us!</h1>
             
            <div className="row">
            <form class="forms-sample" autoComplete='off'>
            <div class="col-md-11-sm-11-lg-11">
            <input class="un " type="text" align="center" placeholder="Username"/>  
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="email" align="center" placeholder="E-mail"required/>
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="number" align="center" placeholder="Phone Number"/>
            </div>
            <div class="col-md-11-sm-11-lg-11">
            <input class="pass" type="password" align="center" placeholder="Password"/>
            </div>
            <div class="col-md-11-sm-11-lg-11 m-2">
            <Link class="submit" align="center" to="/">Sign Up</Link>
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
import logo from './logo.svg';
import faceIcon from './res/facebook.png';
import './App.css';
import React from 'react';
import { ReactDOM } from 'react';

function App(props) {
  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}

class LoginForm extends React.Component{
  render(){
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon" ><img src={require('./res/facebook.png')} width="50" height="50"/> </a>
);


const Google = props => (
  <a href="#" id="googleIcon"><img src={require('./res/google.png')} width="50" height="50"/></a>
);
export default App;

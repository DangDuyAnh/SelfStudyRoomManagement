import faceIcon from "../res/facebook.png";
import React from 'react';
import { ReactDOM } from 'react';
import { axiosGet, axiosPost } from '../utils/api.js';
import { authenticationService } from "../utils/authenticationService";

export default class LoginForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false,
      textError: ''
    };
  }

  vertical = 'top';
  horizontal = 'right';

  handleChangeUsername = (s) => {
    this.setState({
      ...this.state, username: s
    })
  }

  handleChangePassword = (s) => {
    this.setState({
      ...this.state, password: s
    })
  }

  handleClick = async () => {
    if (this.state.username == '' || this.state.password == '') {
      this.setState({
        ...this.state,
        error: true,
        textError: 'Email và Password không nên để trống'
      })
      return;
    }
    try {
    const res = await axiosPost('/manager/login', {
      email: this.state.username,
      password: this.state.password
    })
    if (res.status == 200) {
      authenticationService.login(res.data);
      window.location = '/'
    } else {
      this.setState({
        ...this.state,
        error: true,
        textError: 'Email hoặc Password không hợp lệ'
      })     
    }
    } catch (e) {
      this.setState({
        ...this.state,
        error: true,
        textError: 'Email hoặc Password không hợp lệ'
      })
    }
  }

  componentDidMount() {
    if (authenticationService.getUser()) {
      window.location = '/';
    }
  }

    render(){
      return(
        <div id="login-background">
            <div id="loginform">
            <FormHeader title="Login" />
            <Form error={this.state.error} textError={this.state.textError} username={this.state.username} password={this.state.password} handleChangeUsername={this.handleChangeUsername} handleChangePassword={this.handleChangePassword} handleClick={this.handleClick}/>
            <OtherMethods />
            </div>
        </div>
      )
    }
  }
  
  const FormHeader = props => (
      <h2 id="headerTitle">{props.title}</h2>
  );
  
  
  const Form = props => (
     <div>
       <FormInput description="Email" placeholder="Enter your email" type="text" text={props.username} handleChange={props.handleChangeUsername}/>
       <FormInput description="Password" placeholder="Enter your password" type="password" text={props.password} handleChange={props.handleChangePassword}/>
       
       <div style={{textAlign: 'center', position: 'relative'}}>
      {(props.error)&&<p style={{color: 'red', margin: 0, padding: 0, fontSize: '14px', position: 'absolute', marginTop: '20px'
                  ,marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0}}>{props.textError}</p>}
      </div> 
       <FormButton title="Log in" handleClick={props.handleClick}/>
     </div>
  );
  
  const FormButton = props => (
    <div id="button" class="row-login" style={{marginTop: '30px'}}>
      <button onClick={props.handleClick}>{props.title}</button>
    </div>
  );
  
  const FormInput = props => (
    <div class="row-login">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder} value={props.text} onChange={e => {
        props.handleChange(e.target.value)
      }}/>
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
    <a href="#" id="facebookIcon" ><img src={require('../res/facebook.png')} width="50" height="50"/> </a>
  );
  
  
  const Google = props => (
    <a href="#" id="googleIcon"><img src={require('../res/google.png')} width="50" height="50"/></a>
  );
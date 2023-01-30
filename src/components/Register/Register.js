import React from 'react';


class Register extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: '',
			password:'',
      registerInfo: ''
		}
	}


	onUsernameChange = (event) =>{
		this.setState({username:event.target.value});
	}

	onEmailChange = (event) =>{
		this.setState({email:event.target.value});
	}

	onPasswordChange = (event) =>{
		this.setState({password:event.target.value});
	}

  // onRegisterInfoChange = (event) => {
  //   if (!this.state.username || !this.state.Email|| !this.state.password) {
  //     this.setState({registerInfo: 'Empty input!'});
  //   }
  // }

	onSubmitRegiester = () =>{ //request: username, email, password, POST to /register, handleRegister, response: user
		if (!this.state.username || !this.state.email|| !this.state.password) {
      return this.setState({registerInfo: 'Empty input!'});
    }  //can add a validation about the email must have @ and password must be...
    
    fetch('https://smartbrain-yuqingslab-api.onrender.com/register', {
			method:'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username:this.state.username,
				email: this.state.email,
				password:this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if(user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home');
			} 
      // else {
      //   this.onRegisterInfoChange();
      // }
		})
	}


  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="username"
                  id="username"
                  onChange={this.onUsernameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <label className="db fw6 lh-copy f6 white">{this.state.registerInfo}</label>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitRegiester}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
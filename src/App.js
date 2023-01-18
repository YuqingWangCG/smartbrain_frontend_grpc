
import './App.css';
import React, {Component} from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


const initialState = {
      input : '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        username: '', 
        email: '',
        entries: 0,
        joined: ''
      }
    }


class App extends Component {
  constructor(){
    super()
    this.state = initialState;
  }

  
loadUser = (data) => {
  this.setState({user: {
        id: data.id,
        username: data.username, 
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }})
}


calculateFaceLocation = (data) => {
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage');
  const width = Number(image.width);
  const height = Number(image.height);
 
  return {
    leftCol: clarifaiFace.left_col*width,
    topRow: clarifaiFace.top_row*height,
    rightCol: width - (clarifaiFace.right_col*width),
    bottomRow: height - (clarifaiFace.bottom_row*height)
  };
}

displayFaceBox = (box) => {
  this.setState({box:box});
}


// what will happen when the input is changed
onInputChange = (event)=>{
     this.setState({input:event.target.value});
  }

// what will happen when we click Detect
onPictureSubmit = () => {
    fetch('https://smartbrain-yuqingslab-api.onrender.com/imageurl', {
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          }
        )
    .then(result => result.json())
    .then((result) => {
      if (result) {
        fetch('https://smartbrain-yuqingslab-api.onrender.com/image', {
            method:'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          }
        )
        .then(result => result.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries:count}))
          })
        .catch(console.log)
        }
      this.displayFaceBox(this.calculateFaceLocation(result))
    })
    .catch((error) => console.log("error", error));
}

onRouteChange = (route) => {
  if (route === 'signout'){
    this.setState(initialState)
  } else if (route === 'home') {
    this.setState({isSignedIn:true})
  }

  this.setState({route:route});
}


  render () {
    const {box, input, isSignedIn, route} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route ==='home'
          ? 
          <div>
            <Logo />
            <Rank username={this.state.user.username} entries={this.state.user.entries}/>
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onPictureSubmit={this.onPictureSubmit}
            />
            <FaceRecognition box = {box} inputURL={input}/>
          </div>
          : (
             route ==='signin'
              ? <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default App;

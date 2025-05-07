import { ChangeEvent, useState } from "react";
import { Navigation } from "./Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg';
import { FaceRecognition } from "./FaceRecognition/FaceRecognition";
import { Singin } from "./Singin/Singin";
import {Register}  from "./Register/Register";

// import Clarifai from 'clarifai';

// doesn't work. need improvement
// const app = new Clarifai.App({
//  apiKey: 'd61a3acbc1cf4474910cb8689f72db1d'
// });


interface AppState {

  input: string;
  imgURL: string;
  route: string | null;
  isSignedIn: boolean;
  box: object;
  user: {
        id: string,
        name: string,
        email: string,
        entries: number,
        joined: Date
      }
};

const initialState = {
  
  input: '',
  imgURL: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: new Date()
  }
};

export const App = () =>  {

  const [state, setState] = useState<AppState>({
    input: '',
    imgURL: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: new Date()
    }
  });

  // clarifai does not work
  // calculateFaceLocation = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width),
  //     bottomRow: height - (clarifaiFace.bottom_row * height)
  //   }
  // }

  // displayFaceBox = (box) => {
  //   this.setState({box: box});
  // }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => (
      { ...prevState, input: e.target.value }
    )
    )
  };

  const onButtonSubmit = () => {
    setState((prevState) => (
      { ...prevState, imgURL: state.input }));

    // clarifai doesn't work properly
    console.log('button submitted')
    // app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    //   .then(response => {
    //     console.log('hi', response)
    //     if (response) {
    //       fetch('http://localhost:5173/image', {
    //         method: 'put',
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify({
    //           id: this.state.user.id
    //         })
    //       })
    //         .then(response => response.json())
    //         .then(count => {
    //           this.setState(Object.assign(this.state.user, { entries: count}))
    //         })
    //       .catch(err => console.log(err))

    //     }
    //     this.displayFaceBox(this.calculateFaceLocation(response))
    //   })
    //   .catch(err => console.log(err));
  
  };

  const onRouteChange = (route: string) => {

    if (route === 'signout') {
      
      setState(initialState)
    } else if (route === 'home') {

      setState((prevState) => (
        { ...prevState, isSignedIn: true }))
    }
    setState((prevState) => (
      { ...prevState, route: route }));
  };



    const {  isSignedIn, route, imgURL} = state;

    return (
    
      <div className="App">
        <ParticlesBg type="tadpole" bg={true}/>
        <Navigation  onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
        {route === 'home' ?
          <div>
            <Logo />
            <Rank
              name={state.user.name}
              entries={state.user.entries} />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit} />
            <FaceRecognition imgURL={imgURL} />
          </div>
          : (
            route === 'signin' ?
              <Singin onRouteChange={onRouteChange} />
              :
              <Register
                onRouteChange={onRouteChange}
                // loadUser={this.loadUser}
                // onSubmitSignIn={function (data: unknown): void {
                // throw new Error("Function not implemented.");}
                // }
              />
          )
        }
        </div>
    )
  }

import { ChangeEvent, Component } from "react";
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
}

type user = {
id: string,
        name: string,
        email: string,
        entries: number,
        joined: Date

}

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

}
export class App extends Component<object, AppState> {

  constructor(props: object) {

    super(props);
    this.state = initialState
  }

  loadUser = (data: user) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }
// no need for delete
  // componentDidMount() {
    
  //   fetch('http://localhost:3000/')
  //     .then(res => res.json())
  //     .then(console.log)
  // }

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


  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = () => {

    this.setState({imgURL: this.state.input});

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
  
  }

  onRouteChange = (route: string) => {

    if (route === 'signout') {
      
      this.setState(initialState)
    } else if (route === 'home') {

      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  }

  render() {

    const {  isSignedIn, route, imgURL} = this.state;

    return (
    
      <div className="App">
        <ParticlesBg type="tadpole" bg={true}/>
        <Navigation  onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'home' ?
          <div>  
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imgURL={imgURL} />
          </div>
          : (
            route === 'signin' ?
              <Singin onRouteChange={this.onRouteChange} /> 
              :
              <Register onRouteChange={this.onRouteChange} loadUser={function (user: { name: string; email: string; password: string; }): void {
                throw new Error("Function not implemented.");
              } } onSubmitSignIn={function (data: unknown): void {
                throw new Error("Function not implemented.");
              } }/>
          )
        }
        </div>
    )
  }
}
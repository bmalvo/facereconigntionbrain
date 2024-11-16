import { ChangeEvent, Component } from "react";
import { Navigation } from "./Navigation/Navigation";
import { Logo } from "./components/Logo/Logo";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg';
import { FaceRecognition } from "./FaceRecognition/FaceRecognition";
import { Singin } from "./Singin/Singin";

// import Clarifai from 'clarifai';

// doesn't work. need improvement
// const app = new Clarifai.App({
//  apiKey: 'd61a3acbc1cf4474910cb8689f72db1d'
// });


interface AppState {

  input: string;
  imgURL: string;
  route: string | null;
}



export class App extends Component<object, AppState> {

  constructor(props: object) {

    super(props);
    this.state = {
      
      input: '',
      imgURL: '',
      route: 'singin',
    }
  }

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

    // clarifai doesn't work properly
    // console.log('button submitted')
    // app.models.predict('face-detection', this.state.input)
    //   .then(response => {
    //     console.log('hi', response)
    //     if (response) {
    //       fetch('http://localhost:3000/image', {
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

    //     }
    //     this.displayFaceBox(this.calculateFaceLocation(response))
    //   })
    //   .catch(err => console.log(err));
  
  }

  onRouteChange = (route: string) => {

    this.setState({ route: route });
  }

  render() {

    return (

      <div className="App">
        <ParticlesBg type="tadpole" bg={true}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === 'singin' ?
          <Singin onRouteChange={ this.onRouteChange} />
          :
          <div>  
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition imgURL={this.state.imgURL} />
          </div>}
        </div>
    )
  }
}
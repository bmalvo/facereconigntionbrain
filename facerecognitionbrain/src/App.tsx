import { ChangeEvent, Component } from "react";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo/Logo";
import { ImageLinkForm } from "./components/ImageLinkForm/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import ParticlesBg from 'particles-bg';
import { FaceRecognition } from "./FaceRecognition/FaceRecognition";

interface AppState {

  input: string;
  imgURL: string;
}

export class App extends Component<object, AppState> {

  constructor(props: object) {

    super(props);
    this.state = {
      
      input: '',
      imgURL: ''
    }
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = () => {

    this.setState({ imgURL: this.state.input })
  }

  render() {

    return (

      <div className="App">
        <ParticlesBg type="tadpole" bg={true}/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imgURL={ this.state.imgURL} />
      </div>
    )
  }
}
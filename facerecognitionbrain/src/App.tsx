import { Component } from "react";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo/Logo";

export class App extends Component {

  render() {

    return (

      <div className="App">
        <Navigation />
        <Logo />
        {/* <ImageLinkForm /> */}
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}
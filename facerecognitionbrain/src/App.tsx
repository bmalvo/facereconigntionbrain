import { Component } from "react";
import { Navigation } from "./components/Navigation";

export class App extends Component {

  render() {

    return (

      <div className="App">
        <Navigation />
        {/* <Logo />
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    )
  }
}
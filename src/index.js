import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    //initialize state
    this.state = { lat: null, errMsg: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }

  //react need us to define render method
  render() {
    return (
      <div>
        Latitude:{this.state.lat}
        <br />
        Error: {this.state.errMsg}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));

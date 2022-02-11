import { Component } from "react";
import Clock from "./Clock";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hrPosition: 0,
      minPosition: 0,
      secPosition: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setClock();
    }, 1000);
  }

  setClock = () => {
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // the hour hand of a normal 12-hour analogue clock turns 360 degree in 12 hours (720 minutes) or 0.5 degree per minute.
    let hrPosition = hr * (360 / 12) + (min * (360 / 60)) / 12;

    // the minute hand rotates through 360 degree in 60 minutes or 6 degree per minute.
    let minPosition = min * (360 / 60) + (sec * (360 / 60)) / 60;
    let secPosition = sec * (360 / 60);

    this.setState({ hrPosition: hrPosition });
    this.setState({ minPosition: minPosition });
    this.setState({ secPosition: secPosition });
  };

  render() {
    const { hrPosition, minPosition, secPosition } = this.state;
    return (
      <Clock
        hrPosition={hrPosition}
        minPosition={minPosition}
        secPosition={secPosition}
      />
    );
  }
}

export default App;

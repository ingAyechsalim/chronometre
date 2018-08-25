import React from "react";

import "./styles.css";

const secondsToTime = totalSeconds => {
  const PerMinute = 60;
  const PerHour = PerMinute * 60;
  const seconds = totalSeconds % PerMinute;
  const minutes = Math.floor((totalSeconds / PerMinute) % PerMinute);
  const hours = Math.floor(totalSeconds / PerHour);
  return {
    seconds,
    minutes,
    hours
  };
};
const TimerComponent = totalSeconds => {
  const time = secondsToTime(totalSeconds);
  return (
    String(time.hours).padStart(2, "0") +
    ":" +
    String(time.minutes).padStart(2, "0") +
    ":" +
    String(time.seconds).padStart(2, "0")
  );
};

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      valid: false
    };
  }
  startTimer = () => {
    this.setState({
      valid: !this.state.valid
    });
    if (!this.state.valid) {
      let stockTime = setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1
        });
      }, 1000);
      this.setState({
        number: stockTime
      });
    } else this.pauseTimer();
  };
  pauseTimer = () => {
    clearInterval(this.state.number);
  };
  resetTimer = () => {
    this.setState({
      seconds: 0
    });
    clearInterval(this.state.number);
  };
  render() {
    return (
      <div>
        <div className="time-format">
          <h1>{TimerComponent(this.state.seconds)}</h1>
        </div>
        <div className="time-text">
          <div>Hours</div>
          <div>Minutes</div>
          <div>Seconds</div>
        </div>
        <button className="start" onClick={this.startTimer}>
          Start
        </button>

        <button className="reset" onClick={this.resetTimer}>
          {" "}
          Reset
        </button>
        <button className="pause" onClick={this.pauseTimer}>
          {" "}
          Pause
        </button>
      </div>
    );
  }
}

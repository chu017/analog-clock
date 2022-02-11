import React from "react";

function Clock({ hrPosition, minPosition, secPosition }) {
  return (
    <div className="clock">
      <div
        className="hand hour"
        style={{ transform: `rotate(${hrPosition}deg)` }}
      ></div>
      <div
        className="hand minute"
        style={{ transform: `rotate(${minPosition}deg)` }}
      ></div>
      <div
        className="hand second"
        style={{ transform: `rotate(${secPosition}deg)` }}
      ></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
  );
}

export default Clock;

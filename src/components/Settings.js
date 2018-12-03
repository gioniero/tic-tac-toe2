import React , { Component}  from 'react';

class Settings extends Component {
  render(){
  return (
  <div>
    <h2>
      Set symbols:
    </h2>
    <div>
      <h3>
        First player:
      </h3>

      <label>
        <input type="radio" name="X-Y"
          onChange={() => this.props.onChangeFirstPlayer("X") }
          />X
        <input type="radio" name="X-Y"
          onChange={() => this.props.onChangeFirstPlayer("Y")}
          />Y
      </label>
    </div>
      <div>
      <h3>
        Second player:
      </h3>

      <label>
        <input type="radio" name="O-U"
          onChange={() => this.props.onChangeSecondPlayer("O") }
          />O
        <input type="radio" name="O-U"
          onChange={() => this.props.onChangeSecondPlayer("U")}
          />U
      </label>
    </div>
  </div>
  );
  }
}

export default Settings;

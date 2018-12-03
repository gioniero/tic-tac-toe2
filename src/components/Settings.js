import React, { Component }  from 'react'

class Settings extends Component {
  render() {
    return (
      <div>
        <h2>
          Set symbols:
        </h2>
        <div>
          <h3>
            First player:
          </h3>
          <div>
            <input type="text" placeholder="First Player: let's choose your symbol" id="symbol" value={this.props.firstPlayerSymbol} onChange={(event) => {console.log(event) || this.props.onChangeFirstPlayer(event.target.value)}} />
          </div>
        </div>
        <div>
          <h3>
            Second player:
          </h3>

          <label>
            <input type="radio" name="O-U"
              onChange={() => this.props.onChangeSecondPlayer('O') }
            />O
            <input type="radio" name="O-U"
              onChange={() => this.props.onChangeSecondPlayer('U')}
            />U
          </label>
        </div>
      </div>
    )
  }
}

export default Settings

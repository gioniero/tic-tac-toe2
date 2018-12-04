import React from 'react'

// trasforma questa classe in una funzione pura
// const Settings = (props) => {...}

// fai sì che di default gli input siano popolati con il simbolo corrente, anche all'inizio
const Settings = (props) => {
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
          <input type="text" placeholder="First Player: let's choose your symbol" id="symbol" value={props.firstPlayerSymbol} onChange={(event) => { props.onChangeFirstPlayer(event.target.value) }} />
        </div>
      </div>
      <div>
        <h3>
          Second player:
        </h3>
        <div>
          <input type="text" placeholder="Second Player: let's choose your symbol" id="symbol" value={props.secondPlayerSymbol} onChange={(event) => { props.onChangeSecondPlayer(event.target.value) }} />
        </div>
      </div>
    </div>
  )
}

export default Settings

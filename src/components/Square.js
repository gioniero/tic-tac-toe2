import React  from 'react'
import '../css/App.css'

function Square(props) {
  if (props.numberOfPlayer === 'firstPlayer') {
    return (
      <button className="firstPlayerSquare" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
  else if (props.numberOfPlayer === 'secondPlayer') {
    return (
      <button className="secondPlayerSquare" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
  else {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    )
  }
}

export default Square

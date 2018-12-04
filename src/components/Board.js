import Square from './Square.js'
import React from 'react'
import '../css/App.css'

// trasforma questa classe in una funzione pura
// usa un colore di sfondo diverso per le caselle del giocatore 1
// e quelle del giocatore 2, a prescindere dal simbolo
// (ad esempio 1 rosso, 2 blu, non selezionate gialle)

function Board(props) {
  const gameField = props.field.map((item, k) =>
    <div key={k} className="board-row">
      {props.row.map((item, i) =>
        (renderSquare(3 * k + i, props))
      ) }
    </div>)
  return (
    <div>
      <div className="status">{props.status}</div>
      <div>{gameField}</div>
    </div>
  )
}

function renderSquare(i, props) {
  let value
  if (props.squares[i] == null) {
    value = props.squares[i]
    return (
      <Square key={i}
        value={value}
        onClick={() => props.onClick(i)}
      />)}
  else if (props.squares[i] === 'X') {
    value = props.firstPlayerSymbol
    return (
      <div>
        <Square
          numberOfPlayer="firstPlayer"
          key={i}
          value={value}
          onClick={() => props.onClick(i)}
        />
      </div>)}
  else if (props.squares[i] === 'O') {
    value = props.secondPlayerSymbol
    return (
      <div>
        <Square
          numberOfPlayer="secondPlayer"
          key={i}
          value={value}
          onClick={() => props.onClick(i)}
        />
      </div>
    )}
}

export default Board

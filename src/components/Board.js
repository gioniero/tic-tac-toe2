import Square from './Square.js'
import React, { Component }  from 'react'

// trasforma questa classe in una funzione pura
// usa un colore di sfondo diverso per le caselle del giocatore 1
// e quelle del giocatore 2, a prescindere dal simbolo
// (ad esempio 1 rosso, 2 blu, non selezionate gialle)

class Board extends Component {
  renderSquare(i) {
    let value
    if (this.props.squares[i] == null)
      value = this.props.squares[i]
    else if (this.props.squares[i] === 'X')
      value = this.props.firstPlayerSymbol
    else if (this.props.squares[i] === 'O')
      value = this.props.secondPlayerSymbol
    return (
      <Square key={i}
        value={value}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    const gameField = this.props.field.map((item, k) =>
      <div key={k} className="board-row">
        {this.props.row.map((item, i) =>
          (this.renderSquare(3 * k + i))
        ) }
      </div>)
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div>{gameField}</div>
      </div>
    )
  }
}

export default Board

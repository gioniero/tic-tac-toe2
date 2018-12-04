import React, { Component } from 'react'
import '../css/App.css'
import Board from './Board.js'
import Settings from './Settings.js'
import { calculateWinner, calculateDraw } from '../utils.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
      firstPlayerSymbol: 'X',
      secondPlayerSymbol: 'O',
      row: Array(3).fill(null),
      field: Array(3).fill(null),
      ascendingOrderMoves: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1)
    const current = history[history.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i])
      return
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    })
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    })
  }

  onChangeSecondPlayer(str) {
    this.setState({
      secondPlayerSymbol: str.substring(0, 2)
    })
  }
  onChangeFirstPlayer(str) {
    this.setState({
      firstPlayerSymbol: str.substring(0, 2)
    })
  }

  render() {
    const history = this.state.history
    const current = history[this.state.stepNumber]
    const toCalculateWinner = (str) => {
      if ((str) === 'X')
        return (this.state.firstPlayerSymbol)
      else if ((str) === 'O')
        return (this.state.secondPlayerSymbol)
      else
        return null
    }
    const winner = toCalculateWinner(calculateWinner(current.squares))
    const draw = calculateDraw(current.squares)

    const moves = history.map((step, move) => {
      if (move === 0) {
        return <li key={move}>
          <button onClick={() => this.jumpTo(move)}>
            Go to game start
          </button>
        </li>
      } else if (this.state.ascendingOrderMoves) {
        return <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{'Go to move #' + move}</button>
        </li>
      } else {
        return <li key={move}>
          <button onClick={() => this.jumpTo(this.state.history.length - move)}>
            {'Go to move #' + (this.state.history.length - move)}
          </button>
        </li>
      }
    })

    let status
    if (winner)
      status = 'Winner: ' + winner
    else if (draw)
      status = 'Draw'
    else
      status = 'Next player: ' + (this.state.xIsNext ? this.state.firstPlayerSymbol : this.state.secondPlayerSymbol)

    return (
      <div className="game">
        <div className="game-board">
          <Settings
            firstPlayerSymbol={this.state.firstPlayerSymbol}
            secondPlayerSymbol={this.state.secondPlayerSymbol}
            onChangeFirstPlayer={(str) => this.onChangeFirstPlayer(str)}
            onChangeSecondPlayer={(str) => this.onChangeSecondPlayer(str)}
          />
          <Board
            firstPlayerSymbol={this.state.firstPlayerSymbol}
            secondPlayerSymbol={this.state.secondPlayerSymbol}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            row={this.state.row}
            field={this.state.field}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.setState({
            ascendingOrderMoves: !this.state.ascendingOrderMoves
          })}>"Change Order of moves" </button>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

export default App

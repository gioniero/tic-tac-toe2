import Square from './Square.js';
import React , { Component}  from 'react';

class Board extends Component {
  renderSquare(i) {
    let value;
    if (this.props.squares[i] == null)
      {value=this.props.squares[i]}
    else if (this.props.squares[i] === 'X')
      {value=this.props.firstPlayerSymbol}
    else if (this.props.squares[i] === 'O')
      {value=this.props.secondPlayerSymbol}
    return (
      <Square key={i}
        value={value}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    const gameField = this.props.field.map((item, k) =>
                                    <div key={k} className="board-row">
                                            {this.props.row.map((item, i) =>
                                            (this.renderSquare(3* k + i))
                                            ) }
                                    </div>)
    return (
      <div>
        <div className="status">{this.props.status}</div>
        <div>{gameField}</div>
      </div>
    );
  }
}
 export default Board;

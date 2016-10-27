const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    const fields = board.map((field, i) => <Field player={field} onClick={onClick.bind(field, i)}/>)
    return (
      <div className="board">
        {fields}
      </div>
    );
  }
}

module.exports = Board;

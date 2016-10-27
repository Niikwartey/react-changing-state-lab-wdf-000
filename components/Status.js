const React = require('react');

class Status extends React.Component {
  render () {
    const { winner } = this.props;
    let status = winner ? (winner + " wins") : "Tie"
    return (
      <div className="status">
      {status}
      </div>
    );
  }
}

module.exports = Status;

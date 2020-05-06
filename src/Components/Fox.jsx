import React, { Component } from 'react';


const ranks = [
  "Serf",
  "Yeoman",
  "Knight",
  "Baron",
  "Earl",
  "Count",
  "Duke",
  "Emperor"
];

class Fox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRank: this.props.rank
    };
  }

  levelUp = () => {
    if(this.state.currentRank !== ranks.length-1) {
      this.setState({currentRank: this.state.currentRank+1}, () => {
        if(this.state.currentRank === 7) {
          alert("Congrats you're the emperor now");
        }
      });
    }
  }

  render() {
    return (
      <div className="card col-md-6">
        <div className="card-body">
          <h2 className="card-title">
            { this.props.name }
          </h2>
          <p className="card-text">Royal Title: { ranks[this.state.currentRank] }</p>
          <p className="card-text">Fur Color: { this.props.furColor }</p>
          <button 
            onClick={ this.levelUp }
            className="btn" 
            style={{backgroundColor: "rebeccapurple", color: "#fff"}}
          >
            Rank up
          </button>
        </div>
      </div>
    );
  }
}

export default Fox;
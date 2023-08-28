import { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Typography } from "antd";
import { Card } from "antd";
const { Title } = Typography;
const { Meta } = Card;

class Flipcards extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <div className="flex flex-row justify-center align-middle flex-wrap">
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <Card>
            <button onClick={this.handleClick}>Click to flip</button>
          </Card>

          <Card>
            This is the back of the card.
            <button onClick={this.handleClick}>Click to flip</button>
          </Card>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Flipcards;

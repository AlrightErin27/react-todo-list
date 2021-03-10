import { Component } from "react";

export default class ListItem extends Component {
  render() {
    return (
      <div>
        <br />
        <li>{this.props.task}</li>
        <br />
        <button onClick={this.props.handleDeleteTask} class="a-button">
          remove
        </button>
      </div>
    );
  }
}

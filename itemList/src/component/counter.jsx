import React, { Component } from "react";

class Counter extends Component {
  state = {
    //value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"],
    imageUrl:
      "https://scontent.ftpe8-2.fna.fbcdn.net/v/t1.0-9/185309_226967617341743_5763275_n.jpg?_nc_cat=100&_nc_ht=scontent.ftpe8-2.fna&oh=8e3b68397b07e9647cc4f7bf7a9ea9da&oe=5D4EA9BB"
  };

  style = {
    fontSize: 10,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there is no tag</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
        ))}
      </ul>
    );
  }

  render() {
    //console.log("props", this.props);
    return (
      <React.Fragment>
        <p>{this.props.counter.id}##</p>
        {/*<img src={this.state.imageUrl} alt="" />*/}
        <span style={{ fontSize: 10 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn-secondary btn btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-primary btn-sm m-2"
        >
          decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag} </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    //console.log(this.props);
    const { value } = this.props.counter;
    //console.log(count);
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

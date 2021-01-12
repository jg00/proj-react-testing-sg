/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button className="btn-small">Submit Comment</button>
          </div>
        </form>

        <button
          className="fetch-comments btn-small"
          onClick={this.props.fetchComments}
          style={{ marginTop: "5px" }}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);

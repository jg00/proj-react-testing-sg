/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { connect } from "react-redux";

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, null)(CommentList);

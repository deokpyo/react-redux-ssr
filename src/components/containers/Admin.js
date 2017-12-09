import React, { Component } from "react";
import { connect } from "react-redux";

class Admin extends Component {
  render() {
    const currentUser = this.props.user.currentUser;
    return (
      <div className="container">
        <h1>Admin Component</h1>
        {currentUser == null ? (
          "No Current User"
        ) : (
          <div>Welcome {currentUser.username}</div>
        )}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(stateToProps)(Admin);

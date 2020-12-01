import React, { Component } from "react";
// import ProfilePic from "./profilePicture/img_react.png";
import { IconContext } from "react-icons";
//import AccountIcon from "@material-ui/svg-icons/image/edit";
import * as AiIcons from "react-icons/ai";

class UserProfileControls extends Component {
  state = { profilePicture: null, userFirstName: null };

  async componentDidMount() {
    const url = "http://localhost:57170/api/aduser?userName=TClinger";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      profilePicture: data.userPhoto,
      userFirstName: data.firstName + " " + data.lastName
    });
  }

  render() {
    const { userName } = this.props;
    return (
      <div>
        <div>
          {this.state.profilePicture ? (
            <img
              src={this.state.profilePicture}
              className="rounded-circle z-depth-2 border border-warning"
              style={{
                maxWidth: "3rem",
                maxHeight: "3rem",
                borderColor: "Orange"
              }}
            ></img>
          ) : (
            <div></div>
          )}

          <label className="badge badge-secondary">
            {this.state.userFirstName}
          </label>
        </div>
        <div>
          <span
            className="badge badge-pill badge-light"
            style={{ marginLeft: "2.8rem" }}
          >
            Admin
          </span>
        </div>
      </div>
    );
  }
}

export default UserProfileControls;

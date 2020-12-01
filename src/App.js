import React, { useState, useEffect } from "react";
import UserProfileControls from "./Components/userProfile";
import DBDropDownControl from "./Components/DBDropDownControl";
import TablesDropDownControl from "./Components/tablesDropDownControl";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Table from "./Components/table";
import SideMenu from "./Components/SideMenu";
import {
  makeStyles,
  CssBaseline,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NavigationIcon from "@material-ui/icons/Navigation";
import Header from "./Components/Header";
import PageHeader from "./Components/PageHeader";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ddDBSelectedValue: "",
      ddTableSelectedValue: "",
      isAdmin: true,
      isDBDDLoaded: false,
      data: []
    };
  }

  componentDidMount() {
    document.title = "Data View/Edit App";
  }
  componentDidUpdate() {}
  ddDBChange(dbValue) {
    this.setState({
      ddDBSelectedValue: dbValue,
      isDBDDLoaded: true
    });
  }
  ddTableChange(tValue) {
    this.setState({
      ddTableSelectedValue: tValue,
      isTableDDLoaded: true
    });
    console.log("tValue :" + tValue);
  }
  setReqMonitor() {
    alert("Clicked" + this.state.ddTableSelectedValue);
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path="/" exact component={"UserProfileControls"} />
            <Route path="/reports" component={"UserProfileControls"} />
          </Switch>
        </Router>
        <div></div>
        <div
          className="card border-secondary mb-8 border border-success"
          style={{
            width: "80rem",
            marginLeft: "20rem",
            marginTop: "2px",
            height: "10rem"
          }}
        >
          <div className="card-header" style={{ textAlign: "center" }}>
            Data Monitor Controls
          </div>
          <div
            className="form-group"
            style={{
              marginTop: "30px"
            }}
          >
            <div className="row">
              <label
                style={{
                  marginTop: "1.2rem",
                  marginLeft: "5rem"
                }}
              >
                Database:
              </label>
              <div className="col-lg-2">
                <DBDropDownControl
                  data={{
                    ddDBSelectedValue: this.state.ddDBSelectedValue,
                    ddDBChange: this.ddDBChange.bind(this)
                  }}
                ></DBDropDownControl>
              </div>
              {this.state.isDBDDLoaded ? (
                <label
                  style={{
                    marginTop: "1.2rem",
                    marginLeft: "3rem"
                  }}
                >
                  Select SQL Table Name:
                </label>
              ) : (
                <div></div>
              )}

              <div className="col-lg-3">
                {this.state.isDBDDLoaded ? (
                  <TablesDropDownControl
                    data={{
                      ddTableSelectedValue: this.state.ddDBSelectedValue,
                      ddTableChange: this.ddTableChange.bind(this)
                    }}
                  ></TablesDropDownControl>
                ) : (
                  <div></div>
                )}
              </div>
              {this.state.isTableDDLoaded ? (
                <Fab
                  variant="extended"
                  color="primary"
                  onClick={this.setReqMonitor()}
                >
                  {<AddIcon />}
                  {this.state.isAdmin === true
                    ? "Set Data Monitoring"
                    : "Request Data Monitoring"}
                </Fab>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        {/* <MuiThemeProvider>
          <div className="App">
            <Table
              data={this.state.data}
              header={[
                {
                  name: "First name",
                  prop: "firstName"
                },
                {
                  name: "Last name",
                  prop: "lastName"
                },
                {
                  name: "Username",
                  prop: "username"
                },
                {
                  name: "Email",
                  prop: "email"
                }
              ]}
            />
          </div>
        </MuiThemeProvider> */}
      </div>
    );
  }
}

import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

class DropdownControl extends React.Component {
  async componentDidMount() {
    const url =
      "http://localhost:57170/api/dbtables/GetTablesList?dbName=" +
      this.props.data.ddTableSelectedValue;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ tNames: data });
  }

  constructor(props) {
    super(props);
    this.state = {
      tNames: [],
      ddTableSelectedValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    console.log("from table dd: " + this.props.data.ddTableSelectedValue);
  }

  handleChange(event) {
    this.setState({ ddTableSelectedValue: event.target.value });
    this.props.data.ddTableChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        {/* <select className="drop-down" onChange={this.handleChange}>
          {this.state.tNames.map(dbs => (
            <option value={dbs.tableName}>{dbs.tableName}</option>
          ))}
        </select> */}
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">
            Tables
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={this.state.ddTableSelectedValue}
            onChange={this.handleChange}
            //input={<BootstrapInput />}
          >
            <option aria-label="None" value="" disabled />
            {this.state.tNames.map(dbs => (
              <option key={dbs.tableId} value={dbs.tableName}>
                {dbs.tableName}
              </option>
            ))}
          </NativeSelect>
          <FormHelperText>Select tables to view/edit data</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

export default DropdownControl;

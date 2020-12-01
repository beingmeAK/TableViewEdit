import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1)
//   }
// }));

class DropdownControl extends React.Component {
  async componentDidMount() {
    const response = await fetch("http://localhost:57170/api/dbtables/");
    const data = await response.json();
    this.setState({ dbNames: data });
  }

  constructor(props) {
    super(props);
    this.state = {
      dbNames: [],
      selectedValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    console.log("Selected Value: " + event.target.value);
    this.setState({ selectedValue: event.target.value });
    this.props.data.ddDBChange(event.target.value);
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    //const classes = useStyles();
    return (
      <div>
        {/* <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label">DB</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value=""
            displayEmpty
            onChange={this.handleChange}
          >
            {this.state.dbNames.map(db => {
              return (
                <menuitem key={db.dbId} value={db.dbName}>
                  {db.dbName}
                </menuitem>
              );
            })}
          </Select>
        </FormControl> */}
        <FormControl>
          <InputLabel htmlFor="demo-customized-select-native">
            DataBases
          </InputLabel>
          <NativeSelect
            id="demo-customized-select-native"
            value={this.state.selectedValue}
            onChange={this.handleChange}
            //input={<BootstrapInput />}
          >
            <option aria-label="None" value="" disabled />
            {this.state.dbNames.map(dbs => (
              <option key={dbs.dbId} value={dbs.dbName}>
                {dbs.dbName}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
      </div>
      // <div className="container">
      //   <select className="drop-down" onChange={this.handleChange}>
      //     {this.state.dbNames.map(dbs => (
      //       <option value={dbs.dbName}>{dbs.dbName}</option>
      //     ))}
      //   </select>
      // </div>
    );
  }
}

export default DropdownControl;

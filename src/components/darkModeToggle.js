import React, { Component } from "react";
import Switch from "react-switch";

export default class ToggleDarkMode extends Component {
  
  constructor() {
    super();
    this.state = { dark: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const root = document.getElementById('root');
    if (!localStorage.getItem('theme')) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.setState({dark: true});
        localStorage.setItem('theme', "dark");
        root.classList.add("dark");
      } else {
        this.setState({dark: false});
      }
      console.log("Intet tema endnu!");
    } else if (localStorage.getItem('theme') === "dark") {
      this.setState({dark: true});
      root.classList.add("dark");
    } else if (localStorage.getItem('theme') === "light") {
      this.setState({dark: false});
      root.classList.remove("dark");
    }
  }

  handleChange(dark) {
    this.setState({ dark });
    const root = document.getElementById('root');
    if (dark === true) {
      localStorage.setItem('theme', "dark");
      root.classList.add("dark");

    } else {
      localStorage.setItem('theme', "light");
      root.classList.remove("dark");
    }
  }

  render() {
    return (
      <div className="md:fixed md:bottom-10 md:left-10">
        <Switch
                onChange={this.handleChange}
                checked={this.state.dark}
                onHandleColor={"#1f2937"}
                offHandleColor={"#fff"}
                onColor={"#fff"}
                offColor={"#1f2937"}
                checkedIcon={<div className="text-center pt-1">🌞</div>}
                uncheckedIcon={<div className="text-center pt-1">🌛</div>}
                handleDiameter={24}
                height={32}
        />
      </div>
    );
  }
}
import React, { Component } from "react";
import logo from "./../logo.svg";
import App from "./sample.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
// import InputSlider from "./component/slider";
import MergeVisualizer from "./SortingVisualizer/SortingVisualizer";
import BubbleVisualizer from "./SortingVisualizer/bubbleSort";
import QuickVisualizer from "./SortingVisualizer/quickSort";

class Visual extends Component {
  constructor() {
    super();
    this.header = this.header.bind(this);
    this.navigationBar = this.navigationBar.bind(this);
    this.countAlgoButton = this.countAlgoButton.bind(this);
    this.algoSelect = this.algoSelect.bind(this);
    this.displayAlgo = this.displayAlgo.bind(this);
    this.pathFinding = this.pathFinding.bind(this);
    this.sorting = this.sorting.bind(this);
  }
  state = {
    Algo: 0,
    CountAlgo: 0,
    view: "",
  };

  render() {
    return (
      <React.Fragment>
        {this.header()}
        {this.navigationBar()}
      </React.Fragment>
    );
  }
  header() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
        <img src={logo} alt="Logo" style={{ width: 40 }} />
        <a style={{ color: "white" }} href={{ href: "#" }}>
          ~ Algorithm Visualizer ~
        </a>
        <img src={logo} alt="Logo" style={{ width: 40 }} />
      </nav>
    );
  }

  navigationBar() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="btn-group dropright mr-2 ">
            <button
              type="button"
              className="btn btn-secondary btn-sm dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Algo
            </button>
            <div className="dropdown-menu ">
              <button
                className="dropdown-item btn-secondary btn-sm"
                onClick={() =>
                  this.setState({
                    Algo: this.state.Algo * 0 + 1,
                    CountAlgo: this.state.CountAlgo * 0,
                  })
                }
              >
                Sorting
              </button>
              <button
                className="dropdown-item btn-secondary btn-sm"
                onClick={() =>
                  this.setState({
                    Algo: this.state.Algo * 0 + 2,
                    CountAlgo: this.state.CountAlgo * 0,
                  })
                }
              >
                Path Finding
              </button>
              <button
                className="dropdown-item btn-secondary btn-sm"
                onClick={() =>
                  this.setState({
                    Algo: this.state.Algo * 0 + 0,
                    CountAlgo: this.state.CountAlgo * 0,
                  })
                }
              >
                Something else here
              </button>
            </div>
          </div>
          {this.algoSelect()}
          {this.countAlgoButton()}
        </nav>
        {this.displayAlgo()}
      </React.Fragment>
    );
  }
  algoSelect() {
    return this.state.Algo === 1
      ? this.sorting()
      : this.state.Algo === 2
      ? this.pathFinding()
      : "";
  }
  countAlgoButton() {
    return this.state.CountAlgo === 0 ? (
      ""
    ) : (
      <button type="button" className="btn btn-secondary btn-sm ">
        {this.state.CountAlgo === 1
          ? "MergeSort"
          : this.state.CountAlgo === 2
          ? "QuickSort"
          : this.state.CountAlgo === 3
          ? "BubbleSort"
          : this.state.CountAlgo === 4
          ? "Something else Here"
          : this.state.CountAlgo === 5
          ? "XYZ"
          : "Something else Here"}
      </button>
    );
  }

  displayAlgo() {
    return this.state.view;
  }

  sorting() {
    return (
      <div className="btn-group dropright mr-2">
        <button
          type="button"
          className="btn btn-secondary btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sorting Algos
        </button>
        <div className="dropdown-menu ">
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 1,
                view: (this.state.view = <MergeVisualizer />),
              })
            }
          >
            Mergesort
          </button>
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 2,
                view: (this.state.view = <QuickVisualizer />),
              })
            }
          >
            Quicksort
          </button>
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 3,
                view: (this.state.view = <BubbleVisualizer/>),
              })
            }
          >
            Bubble Sort
          </button>
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 3,
                view: (this.state.view = <App />),
              })
            }
          >
            Something else here
          </button>
        </div>
      </div>
    );
  }

  pathFinding() {
    return (
      <div className="btn-group dropright mr-2">
        <button
          type="button"
          className="btn btn-secondary btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Path Finding Algos
        </button>
        <div className="dropdown-menu ">
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 4,
                view: (this.state.view = ""),
              })
            }
          >
            ABC
          </button>
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 5,
                view: (this.state.view = <App />),
              })
            }
          >
            XYZ
          </button>
          <button
            className="dropdown-item btn-secondary btn-sm"
            onClick={() =>
              this.setState({
                CountAlgo: this.state.CountAlgo * 0 + 6,
                view: (this.state.view = ""),
              })
            }
          >
            Something else here
          </button>
        </div>
      </div>
    );
  }
}

export default Visual;

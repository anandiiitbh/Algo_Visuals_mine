import React from "react";
import { getQuickSortAnimations } from "../sortingAlgorithms/quickSort";
import "./SortingVisualizer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Slider from "@material-ui/core/Slider";

const NUMBER_OF_ARRAY_BARS = 16;
const PRIMARY_COLOR = "#6c757d";

const marks = [
  {
    value: 0,
    label: "Fastest",
  },
  {
    value: 350,
    label: "Fine",
  },
  {
    value: 500,
    label: "Slow",
  },
];

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 350,
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }
  handleSliderChange = (event, newValue) => {
    this.setState({speed : newValue});
  };

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 90));
    }
    // console.log({ array }, this);
    this.setState({ array });
  }

  mergeSort() {
    const ANIMATION_SPEED_MS = this.state.speed;
    // const SECONDARY_COLOR = "#dc3545";
    const third_color = "#28a745";

    const animations = getQuickSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName("elem");
    // console.log(animations);
    for (let j = 0; j < animations.length; j++) {
      const [check,barOneIdx, barTwoIdx, firstVal, secVal] = animations[j];
      if(check===0){
        setTimeout(() => {
          // console.log(barTwoIdx);
          arrayBars[barTwoIdx].style.backgroundColor = "rgb(238, 11, 11)";
        }, j* ANIMATION_SPEED_MS);
      }
      if(check===1){
        for (let i = barOneIdx; i <= barTwoIdx; i++) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = "rgb(245, 225, 139)";
          }, j * ANIMATION_SPEED_MS);
        }
      }
      if(check===2){
        for (let i = barOneIdx ; i >= barTwoIdx; i--) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = "rgb(245, 225, 139)";
          }, j * ANIMATION_SPEED_MS);
        }
      }
      if(check===3){
        // console.log(arrayBars[barOneIdx].innerHTML);
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = third_color;
          arrayBars[barTwoIdx].style.backgroundColor = third_color;
          // let secVal = arrayBars[barTwoIdx].innerHTML , firstVal=arrayBars[barOneIdx].innerHTML;
          arrayBars[barOneIdx].innerHTML = secVal;
          arrayBars[barTwoIdx].innerHTML = firstVal;
          arrayBars[barOneIdx].style.height = `${secVal + 100}px`;
          arrayBars[barTwoIdx].style.height = `${firstVal+ 100}px`;
          arrayBars[barOneIdx].style.paddingTop = `${secVal + 75}px`;
          arrayBars[barTwoIdx].style.paddingTop = `${firstVal + 75}px`;
        }, j * ANIMATION_SPEED_MS);
      }
      if(check===4){
        for (let i = barOneIdx; i <= barTwoIdx; i++) {
          setTimeout(() => {
            arrayBars[i].style.backgroundColor = PRIMARY_COLOR;
          }, j * ANIMATION_SPEED_MS);
        }
      }
      // for (let y = barOneIdx; y <= barTwoIdx; y++) {
      //   setTimeout(() => {
      //     arrayBars[y].style.backgroundColor = "rgb(197, 17, 98)";
      //   }, i * ANIMATION_SPEED_MS);
      // }
      // for (let y = barOneIdx; y <= barTwoIdx; y++) {
      //   i++;
      //   const [barOneIdxx, newHeight] = animations[i];
      //   const barOneStyle = arrayBars[barOneIdxx].style;
      //   setTimeout(() => {
      //     barOneStyle.backgroundColor = third_color;
      //     arrayBars[y].innerHTML = newHeight;
      //     barOneStyle.height = `${newHeight + 100}px`;
      //     barOneStyle.paddingTop = `${newHeight + 75}px`;
      //   }, i * ANIMATION_SPEED_MS);
      // }
      // for (let y = barOneIdx; y <= barTwoIdx; y++) {
      //   setTimeout(() => {
      //     arrayBars[y].style.backgroundColor = PRIMARY_COLOR;
      //   }, i * ANIMATION_SPEED_MS);
      // }
    }
  }

  render() {
    const { array } = this.state;

    return (
      <React.Fragment>
        <section className="d-flex pt-2 justify-content-center">
          <button
            type="button"
            className="btn btn-secondary mr-2 align-text-bottom "
            onClick={() => this.mergeSort()}
          >
            Start
          </button>
        </section>
        <section className="d-flex pt-4 justify-content-center">
          <button
            type="button"
            style={{ cursor: "default" }}
            className="btn btn-secondary mr-2 align-text-bottom "
            onClick={() => this.resetArray()}
          >
            Change Values
          </button>
        </section>
        <section className="d-flex pt-4 justify-content-center">
        <Slider
        style={{width:"25%"}}
              value={this.state.speed}
              onChange={this.handleSliderChange}
              aria-labelledby="input-slider"
              marks={marks}
              min={0}
              max={500}
            />
        </section>



        
        <section
          className="d-flex justify-content-center mt-4 align-items-end"
          style={{ height: "50vh" }}
        >
          {array.map((value, idx) => (
            <button
              type="button"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: value + 100,
                width: "50px",
                paddingTop: 75 + value,
              }}
              className="btn btn-secondary mr-2 elem align-text-bottom "
            >
              {value}
            </button>
          ))}
        </section>
      </React.Fragment>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

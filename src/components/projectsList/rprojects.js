import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const RProjects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1280px-R_logo.svg.png) center / cover",
          }}
        >
          Crop Calculator
        </CardTitle>
        <CardText>
          <strong>
            R-Shiny application intended for regional farmers to know
            information on what crops to cultivate, how many days required for 1
            crop rotation and total yield. Forecasted five years of crop
            productivity using ARIMA model.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://lumus.shinyapps.io/ForNew/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <center>
              <Button colored>Live Demo</Button>
            </center>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
    </div>
  );
};

export default RProjects;

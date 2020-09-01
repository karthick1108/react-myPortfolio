import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const ReactNativeProjects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
          }}
        >
          Guess A Number
        </CardTitle>
        <CardText>
          <strong>
            A React Native application (using Expo) that takes user input and
            calculate number of rounds the program took to generate the number
            user has entered.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Guess-a-number"
            rel="noopener noreferrer"
            target="_blank"
          >
            <center>
              <Button colored>GitHub</Button>
            </center>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
    </div>
  );
};

export default ReactNativeProjects;

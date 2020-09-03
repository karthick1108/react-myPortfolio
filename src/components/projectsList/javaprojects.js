import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const JavaProjects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://image.slidesharecdn.com/gettingstartedwithwebsocketandsse-130605160939-phpapp01/95/getting-started-with-websocket-and-serversent-events-in-java-1-638.jpg?cb=1370701096) center / cover",
          }}
        >
          Healthy Green
        </CardTitle>
        <CardText>
          <strong>
            A web application built on Java Enterprise Edition (JEE)
            architecture for a fictitious organization to provide useful
            information about indigenous plants of South East Asia.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Healthy-Green"
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

export default JavaProjects;

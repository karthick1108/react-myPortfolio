import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const AndroidProjects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://res.cloudinary.com/practicaldev/image/fetch/s--hjLhVled--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/nedy123/image/upload/v1560632862/Screenshot_2019-06-15_at_10.07.26_PM_nhhf6e.png) center / cover",
          }}
        >
          B!NLET
        </CardTitle>
        <CardText>
          <strong>
            An educational app to help kids learn about the importance of litter
            disposal through games and fun activities.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Binlet"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>GitHub</Button>
          </a>
          <a
            href="https://www.youtube.com/watch?v=67o3MTWxXvk&feature=youtu.be"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>Product Video</Button>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
      {/* Project 2 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://res.cloudinary.com/practicaldev/image/fetch/s--hjLhVled--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/nedy123/image/upload/v1560632862/Screenshot_2019-06-15_at_10.07.26_PM_nhhf6e.png) center / cover",
          }}
        >
          Calorie Tracker
        </CardTitle>
        <CardText>
          <strong>
            A personalized android application to keep track of what you eat,
            your daily calorie intake and calories burned, and provide you with
            useful information and reports.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Calorie-Tracker"
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

export default AndroidProjects;

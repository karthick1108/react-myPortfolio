import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const ReactProjects = () => {
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
          To Do List
        </CardTitle>
        <CardText>
          <strong>
            TodoList Application built in react to keep track of completed and
            pending activities.
          </strong>
        </CardText>
        <CardActions border className="button-align">
          <a
            href="https://github.com/karthick1108/To_do_list_React"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>GitHub</Button>
          </a>
          <a
            href="https://todolist-5fe6d.web.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>Live Demo</Button>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
      {/* Project 2 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
          }}
        >
          Recipe Meal App
        </CardTitle>
        <CardText>
          <strong>
            A react app to show food information based on the input entered by
            the user. Edamam API is used to fetch the food details.
          </strong>
        </CardText>
        <CardActions border className="button-align">
          <a
            href="https://github.com/karthick1108/react-recipe-meal-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>GitHub</Button>
          </a>
          <a
            href="https://react-recipe-app-46af8.web.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>Live Demo</Button>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
      {/* Project 3 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
          }}
        >
          Super Squad(Redux)
        </CardTitle>
        <CardText>
          <strong>
            React Redux application which lets you pick your own superhero from
            the given list and calculate strength,Intelligence and speed.
          </strong>
        </CardText>
        <CardActions border className="button-align">
          <a
            href="https://github.com/karthick1108/Super-Squad"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>GitHub</Button>
          </a>
          <a
            href="https://supersquad-redux.web.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button colored>Live Demo</Button>
          </a>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
      {/* Project 4 */},
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "#fff",
            height: "176px",
            background:
              "url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover",
          }}
        >
          My Courses(Flux)
        </CardTitle>
        <CardText>
          <strong>
            React flux application to add, edit and delete the courses using
            Hooks to manage the state and react router to perform routing.
          </strong>
        </CardText>
        <CardActions border>
          <center>
            <a
              href="https://github.com/karthick1108/MyCourses"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button colored>GitHub</Button>
            </a>
          </center>
        </CardActions>
        <CardMenu style={{ color: "#fff" }}></CardMenu>
      </Card>
    </div>
  );
};

export default ReactProjects;

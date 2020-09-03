import React from "react";
import {
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

const BigDataProjects = () => {
  return (
    <div className="projects-grid">
      {/* Project 1 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://www.cefns.nau.edu/capstone/projects/CS/2019/SmartCloudShield-S19/apache_spark.png) center / cover",
          }}
        >
          Spark Programming
        </CardTitle>
        <CardText>
          <strong>
            Analyse and process the big data using Pyspark and make comparison
            of different machine learning algorithms to train the model.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Spark-programming"
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
      {/* Project 2 */}
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://www.cefns.nau.edu/capstone/projects/CS/2019/SmartCloudShield-S19/apache_spark.png) center / cover",
          }}
        >
          Stop Fire
        </CardTitle>
        <CardText>
          <strong>
            A spark streaming application to simulate the real-time streaming of
            the data that can be processed by Apache Spark Streaming client.
          </strong>
        </CardText>
        <CardActions border>
          <a
            href="https://github.com/karthick1108/Spark-Streaming-Application"
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

export default BigDataProjects;

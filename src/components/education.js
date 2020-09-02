import React from "react";
import { Grid, Cell } from "react-mdl";

const Education = (props) => {
  return (
    <Grid>
      <Cell col={4}>
        <p>
          {props.startYear} - {props.endYear}
        </p>
      </Cell>
      <Cell col={8}>
        <h5 style={{ marginTop: "0px" }}>
          {props.schoolName}: {props.score}
        </h5>
        <p>
          <strong>{props.location}</strong>
        </p>
      </Cell>
    </Grid>
  );
};

export default Education;

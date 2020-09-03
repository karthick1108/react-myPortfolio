import React from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

const Awards = (props) => {
  return (
    <Grid>
      <Cell col={1}>
        <div style={{ display: "flex" }}>{props.skill}</div>
      </Cell>
      <Cell col={11}>
        <div style={{ display: "flex", paddingTop: "5px" }}>
          <ProgressBar
            style={{ margin: "auto", width: "75%", height: "5px" }}
            progress={props.progress}
          />
        </div>
      </Cell>
    </Grid>
  );
};

export default Awards;

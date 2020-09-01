import React, { Component } from "react";
import { Tab, Tabs, Grid, Cell } from "react-mdl";

import ReactProjects from "./projectsList/reactprojects";
import AndroidProjects from "./projectsList/androidprojects";
import BigDataProjects from "./projectsList/bigdataprojects";
import ReactNativeProjects from "./projectsList/reactnativeprojects";
import JavaProjects from "./projectsList/javaprojects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return ReactProjects();
    } else if (this.state.activeTab === 1) {
      return AndroidProjects();
    } else if (this.state.activeTab === 2) {
      return BigDataProjects();
    } else if (this.state.activeTab === 3) {
      return ReactNativeProjects();
    } else if (this.state.activeTab === 4) {
      return JavaProjects();
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Android</Tab>
          <Tab>Big Data</Tab>
          <Tab>React Native</Tab>
          <Tab>J2EE</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;

import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import "./App.css";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Title" scroll>
          <Navigation>
            <a href="/">Rajasekaran</a>
            <a href="/">Praveen</a>
            <a href="/">Sriram</a>
            <a href="/">Karthick</a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <a href="/">Muthu</a>
            <a href="/">Jaanvi</a>
            <a href="/">Uma</a>
            <a href="/">Vidhya</a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

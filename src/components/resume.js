import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://res.cloudinary.com/dmswxxfu4/image/upload/v1598949476/images/karthick_igr2vq.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Karthick Rajasekaran</h2>
            <h4 style={{ color: "grey" }}>
              Full Stack Developer | Android Developer | Data Engineer
            </h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              An enthusiastic developer with 3 years of experience in IT with
              astute knowledge on Full stack and Android development seeking
              opportunities for progressive learning. My academic and work
              experience in relevant fields have provided me with a well-rounded
              background and enabled me to develop an analytical/logical
              approach to tasks, software skills and ability to work under
              pressure. In short, I am reliable, hard-working with strong
              attention to detail and eager to learn about new technologies and
              business issues.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <strong>
              <h5>ADDRESS</h5>
            </strong>
            <p>203/238,Flinders Street,Melbourne,VIC-3000</p>
            <strong>
              <h5>PHONE</h5>
            </strong>
            <p>+61-406819822</p>
            <strong>
              <h5>EMAIL</h5>
            </strong>
            <p>karthickraj1108@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>EDUCATION</h2>
            <Education
              startYear={2018}
              endYear={2020}
              schoolName={
                "Masters in Information Technology - Monash University"
              }
              score={"70%"}
            />
            <Education
              startYear={2011}
              endYear={2015}
              schoolName={
                "Bachelors in Computer Science and Engineering - Anna University"
              }
              score={"72.2%"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>EXPERIENCE</h2>
            <Experience
              startYear={2015}
              endYear={2018}
              jobName={"Systems Engineer - Tata Consultancy Services Ltd"}
              jobDescription={
                "C# | ASP.NET MVC | Oracle | DB2 | SSIS | Web API | Splunk | Android"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>SKILLS</h2>
            <Skills skill="Python" progress="100" />
            <Skills skill="Java" progress="90" />
            <Skills skill="Android" progress="100" />
            <Skills skill="JavaScript" progress="75" />
            <Skills skill="R" progress="65" />
            <Skills skill="C#" progress="65" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

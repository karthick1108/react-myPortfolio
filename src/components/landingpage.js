import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", height: "100%" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://res.cloudinary.com/dmswxxfu4/image/upload/v1598949476/images/karthick_igr2vq.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>
                Full Stack Web Developer | Mobile Developer | Data Engineer
              </h1>
              <hr />
              <p>
                <strong>
                  Programming: Java | C++ | C# | Python | R | Kotlin | Unix
                  Shell Scripting
                </strong>
              </p>{" "}
              <p>
                <strong>
                  Web: HTML5 | CSS3 | Bootstrap | JavaScript | Node | React
                </strong>
              </p>{" "}
              <p>
                <strong>Mobile: React Native | Flutter | Android</strong>{" "}
              </p>{" "}
              <p>
                <strong>
                  Database: Oracle | DB2 | MongoDB | MySQL | SQL Server
                </strong>
              </p>
              <div className="social-links">
                {/*LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/karthick-rajasekaran/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github */}
                <a
                  href="https://github.com/karthick1108"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Instagram */}
                <a
                  href="https://www.instagram.com/imkarthickr/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;

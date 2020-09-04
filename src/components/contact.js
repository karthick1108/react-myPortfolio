import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Karthick Rajasekaran</h2>
            <img
              src="https://res.cloudinary.com/dmswxxfu4/image/upload/v1598949476/images/karthick_igr2vq.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p
              style={{
                width: "75%",
                margin: "auto",
                paddingTop: "1em",
                textAlign: "justify",
              }}
            >
              Building state-of-the-art, easy to use, user-friendly applications
              is truly a passion of mine. I am currently looking for a Full Time
              Opportunities, so feel free to check out my projects and
              experience on Github and LinkedIn. Looking forward to speaking
              with you{" "}
              <span role="img" aria-label="smiley">
                🙂
              </span>
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+61) 406819822
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i
                      style={{ fontSize: "30px" }}
                      className="fa fa-envelope"
                      aria-hidden="true"
                    />
                    karthickraj1108@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/karthick-rajasekaran/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-github-square" aria-hidden="true" />
                    <a
                      href="https://github.com/karthick1108"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Github
                    </a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;

import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Player } from "@lottiefiles/react-lottie-player";
import "././../../App.css";
import Grid from "@mui/material/Grid";
import "../../App.css";
import PopupVideo from "components/popup-video";
import thumb from "assets/img/about/comp.png";
import purpGirl from "../../assets/img/blush/purpgirl.png";

function AboutPageArea() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs></Grid>
        <Grid xs={7}> 
          <PopupVideo
            isThumb={true}
            thumb={thumb}
            channel={"youtube"}
            videoId={"rz5DyyzafKA"}
          />{" "}
        </Grid>{" "}
        <Grid item xs></Grid>{" "}
      </Grid>{" "}
    </Container>
  );
}

export default AboutPageArea;

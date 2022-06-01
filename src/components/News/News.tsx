import React from "react";
import { Box, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { newsData } from "../../interface/index";
import Image from "./assets/image.svg";

type props = {
  data: newsData;
};

const News: React.FC<props> = ({ data }) => {
  const News = {
    minHeight: "80px",
    background: "#fff",
    position: "relative",
    display: "grid",
    gridTemplateColumns: "90px 1fr",
    boxSizing: "border-box",
  };
  const NewsContent = {
    // marginLeft:"1rem",
    boxSizing: "border-box",
    padding: ".9rem",
    paddingTop: "0",
    paddingBottom: "0",

    "& p": {
      color: "#103B66",
      fontSize: ".8rem",
      fontWeight: "normal",
      margin: 0,
      marginTop: ".2rem",
      height: "40px",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "100%",

      //   whiteSpace: "nowrap",
    },
    "& h6": {
      fontSize: ".9rem",
      fontWeight: "normal",
      margin: 0,
      color: "#21B8F9",
      textTransform: "capitalize",
    },
    "& a": {
      fontSize: ".8rem",
      fontWeight: "lighter",
      margin: 0,
      color: "#103B66",
    },
  };

  const NewsImage = {
    backgroundImage: data?.image ? `url(${data?.image})` : `url(${Image})`,
    backgroundSize: "cover",
    //   backgroundColor:"red",
    width: "100%",
    height: "100%",
  };

  return (
    <Box sx={News} >
      <Box sx={NewsImage}></Box>
      <Box sx={NewsContent}>
        <h6 data-testid="news-item">{data?.category}</h6>
        <p>{data?.title}</p>
        <a href={`${data?.url}`}>Estimated reading: 4 min</a>
      </Box>
    </Box>
  );
};

export default News;

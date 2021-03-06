import React, {useState, useEffect} from "react";
import { Box, Stack, Button} from "@mui/material";
import {newsService} from '../../services/apiService'
import {newsData} from '../../interface/index'
import FileIcon from './assets/file.svg';
import LinkIcon from './assets/link.svg';
import News from '../News/News';


const NewsContainer: React.FC = () => {
  const NewsContainerContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "2rem 1rem",
    minHeight: "150px",
    background: "#fff",
    marginBottom: "6rem",
    position: "relative",
    "@media (max-width: 1024px)": {
        marginBottom: "4rem",
      }
  
  };
  const NewsContainerTitle = {
    display: "flex",
    alignItems: "center",
    height: "fit-content",
    "& h5": {
      margin: 0,
      marginLeft: ".4rem",
      fontSize: "1.1rem",
      fontWeight: "normal",
    },
  };

  const NewsContainerLink = {
    cursor: "pointer",
    color: "#21B8F9",
    textDecoration: "underline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    "& img":{
      width: "20px",
    },
    "& p": {
      padding: 0,
      margin: 0,
      fontSize: ".9rem",
      marginRight: ".7rem",
    },
  };

  const NewsContainerContent = {
    display:"grid",
    gridTemplateColumns: "1fr 1fr",
    gridGap:"2rem",
    marginTop:"3rem",
    "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr",
      }
  }
  

  const [data, setData] = useState<newsData[]>([]);

  useEffect(() => {
    newsService(8)
    .then((data) => {
      console.log(data.data.data, "data");
      setData(data.data.data)
     
    })
    .catch((error: Error) => {
      console.error({ error });
     
    });
  },[])
  
  return (
    <Box sx={NewsContainerContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={NewsContainerTitle}>
          <img src={FileIcon} alt="file icon" /> <h5>Latest News</h5>
        </Box>

        <Box sx={NewsContainerLink}>
        <p>Visit our blog</p>
        <img src={LinkIcon} alt="file icon" />
      </Box>
      </Stack>

      <Box sx={NewsContainerContent}>
          {
              data && data.map((item:newsData) => <News data={item} />)
          }
        {/* <News /> */}
      </Box>



     
    </Box>
  );
};

export default NewsContainer;

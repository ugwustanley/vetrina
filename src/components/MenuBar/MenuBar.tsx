import React from "react";
import { Typography, Stack } from "@mui/material";

//components
import New from "../New/New";

type props = {
  title: string;
};

const MenuBar: React.FC<props> = () => {
  const MenuContainer = {
    padding: ".5rem 1.5rem",
    // width:"100vh",
    display: "flex",
    JustifyContent: "space-between",
    alignItems: "center",
  };
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      alignItems="center"
      sx={MenuContainer}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: "1.05rem",
          fontWeight: "normal",
          fontFamily: "Noto Sans HK",
        }}
      >
        Dashboard
      </Typography>

      <New items={2} />
    </Stack>
  );
};

export default MenuBar;

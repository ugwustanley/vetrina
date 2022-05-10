import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CaretDown, ArrowRight } from "phosphor-react";
import InviteIcon from "../../assets/extension.svg";
import UsersImage from "./assets/users.svg";

const Invite: React.FC = () => {
  const InviteContainer = {
    boxShadow:
      " 0px 4px 4px rgba(50, 50, 71, 0.08), 0px 4px 8px rgba(50, 50, 71, 0.06);",
    borderRadius: "10px",
    padding: "1rem",
    minHeight: "200px",
    background: "#fff",
    marginBottom: "4rem",
    position: "relative",
  };
  const InviteTitle = {
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

  const InviteLink = {
    cursor: "pointer",
    color: " #00C48C",
    textDecoration: "underline",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    position: "absolute",
    bottom: "20px",
    "& p": {
      padding: 0,
      margin: 0,
      fontSize: ".9rem",
      marginRight: ".7rem",
    },
  };

  const InviteContent = {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "1.5rem",
    marginTop: "1.7rem",
    "& span": {
      color: "#00C48C",
    },
    "& b": {
      color: "#fff",
      fontFamily: "Noto Sans HK",
      fontWeight: "bold",
    },
  };

  return (
    <Box sx={InviteContainer}>
      <Stack justifyContent="space-between" direction="row">
        <Box sx={InviteTitle}>
          <img src={UsersImage} alt="orders icon" /> <h5>Invite friend</h5>
        </Box>
      </Stack>

      <Typography sx={InviteContent} paragraph>
        <span>Receive 50 products</span> by inviting a friend who subscribes to
        a plan. Your friend will receive a 30% discount coupon valid for any
        plan.
      </Typography>

      <Box sx={InviteLink}>
        <p>Start inviting friends!</p>
        <ArrowRight size={17} color="#00C48C" weight="bold" />
      </Box>
    </Box>
  );
};

export default Invite;

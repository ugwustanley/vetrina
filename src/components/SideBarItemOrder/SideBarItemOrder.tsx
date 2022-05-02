import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CaretDown, CaretUp } from "phosphor-react";
import { Link } from "react-router-dom";

type TSubNav = {
  name: string;
  link: string;
};

type props = {
  name: string;
  icon: any;
  link: string;
  subNavItems?: Array<TSubNav>;
  active?: Boolean,
  showSideBar: Boolean;
};

const NavItemBox = {
  borderLeft: "5px solid transparent",
  height: "40px",
  marginTop: ".7rem",
  boxSizing: "border-box",
};
const NavItemBoxActive = {
  ...NavItemBox,
  borderLeft: "5px solid #21B8F9",
};

const NavItem = {
  display: "flex",
  justifyContent: "space-between",
  height: "inherit",
  padding: ".1rem 1rem",
  alignItems: "center",
  marginLeft: ".4rem",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "5px",
  background: "transparent",
};

const NavItemActive = {
    ...NavItem,
    background: "#F7F7F7",
}

const NavInnerItem = {
  display: "flex",
  alignItems: "center",
};

const NavItemText = {
  fontSize: "1rem",
  marginLeft: ".3rem",
  marginTop: ".4rem",
  fontWeight: "normal",
};

const NavItemTextActive = {
  ...NavItemText,
  color: "#21B8F9",
}

const Orders = {
    padding:".4rem .6rem",
    fontSize: ".8rem",
    background: "#00C48C",
    borderRadius: "50%",
    color:"#fff",
    textAlign: "center",
}

const SideBarItemOrder: React.FC<props> = ({
  name,
  icon,
  link,
  subNavItems,
  active,
  showSideBar,
}) => {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <>
      <Box sx={active ? NavItemBoxActive : NavItemBox}>
        <Box sx={active ? NavItemActive : NavItem}>
          <Box sx={NavInnerItem}>
            <img src={icon || ""} alt="home icon" />
            {showSideBar && (
              <Typography sx={active ?NavItemTextActive : NavItemText} variant="h6">
                {name || "Dashboard"}
              </Typography>
            )}
          </Box>

          {showSideBar ? (
            <Box sx={Orders} onClick={() => setShowChildren(!showChildren)}>
               14
            </Box>
          ) : null}

          {/* <CaretDown size={22} /> */}
        </Box>
      </Box>
     
    </>
  );
};

export default SideBarItemOrder;

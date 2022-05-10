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
  marginLeft: ".5rem",
  marginTop: ".1rem",
  fontWeight: "normal",
  fontFamily: 'Noto Sans HK',
};

const NavItemTextActive = {
  ...NavItemText,
  color: "#21B8F9",
}

const Orders = {
    padding:".3rem .5rem",
    fontSize: ".8rem",
    background: "#00C48C",
    borderRadius: "50%",
    color:"#fff",
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: 'Noto Sans HK',
}

const NavIcon = {
    width: "22px",
 }

const SideBarItemOrder: React.FC<props> = ({
  name,
  icon,
  link,
  subNavItems,
  active,
  showSideBar,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  return (
    <>
      <Box sx={active ? NavItemBoxActive : NavItemBox}>
        <Box sx={active ? NavItemActive : NavItem}>
          <Box sx={NavInnerItem}>
            <Box sx={NavIcon}> <img src={icon || ""} alt="home icon" /></Box>
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

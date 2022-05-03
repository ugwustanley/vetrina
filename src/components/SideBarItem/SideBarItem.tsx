import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CaretDown, CaretUp } from "phosphor-react";
import { Link } from "react-router-dom";

type TSubNav = {
  title: string;
  path: string;
};

type props = {
  name: string;
  icon: any;
  link: string;
  subNavItems?: any,
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
  fontSize: ".94rem",
  marginLeft: ".5rem",
  marginBottom: ".1rem",
  fontWeight: "normal",
  fontFamily: 'Noto Sans HK',
  textAlign: "left"
};

const NavIcon = {
   width: "22px",
}

const SubLinkItem = {
  color: "#233B53",
  background:"#E9F8FE",
  textDecoration: "inherit !important",
  boxSizing: "border-box",
  fontSize:".9rem",
  padding:".6rem 2rem",
  paddingLeft:"3.5rem",
  paddingRight: ".5rem",
  display:"block",
  fontWeight: "400",
  fontFamily: 'Noto Sans HK',
}

const SideBarItem: React.FC<props> = ({
  name,
  icon,
  link,
  subNavItems,
  active,
  showSideBar,
}) => {
  const [showChildren, setShowChildren] = useState(false);

  console.log(subNavItems , "nav items")

  return (
    <>
      <Box sx={active ? NavItemBoxActive : NavItemBox}>
        <Box sx={active ? NavItemActive : NavItem}>
          <Box sx={NavInnerItem}>
           <Box sx={NavIcon}> <img src={icon || ""} alt="home icon" /></Box>
            {showSideBar && (
              <Typography sx={NavItemText}  variant="h3">
                {name || "Dashboard"}
              </Typography>
            )}
          </Box>

          {subNavItems && showSideBar ? (
            <Box sx={{ cursor: "pointer" , marginTop: ".5rem" }} onClick={() => setShowChildren(!showChildren)}>
              {showChildren ? <CaretUp size={20} weight="regular" /> : <CaretDown weight="regular"  size={20} />}
            </Box>
          ) : null}

          {/* <CaretDown size={22} /> */}
        </Box>
      </Box>
      {subNavItems && showSideBar ? (
        <Box sx={{}}>
          {showChildren &&
           <Box sx={{}}>
             {
                subNavItems?.map((item: any, index: number) => (
                  <Typography sx={SubLinkItem} variant="h5">{item?.title}</Typography>
               ))
             }</Box>}
        </Box>
      ) : null}
    </>
  );
};

export default SideBarItem;

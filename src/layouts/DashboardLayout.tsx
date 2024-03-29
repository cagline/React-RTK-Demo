import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav/SideNav";
import TopBar from "../components/Topbar/Topbar";
import { useState } from "react";
import { styled } from "@mui/material";

const drawerWidth = 240;

const PageContainer = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
  open?: boolean;
}>(({theme, open}) => ({
  flexGrow: 1,
  marginTop: 64,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <TopBar open={open} onDrawerOpen={handleDrawerOpen}/>
      <SideNav open={open} onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose}/>
      <PageContainer open={open} id="page-content-wrapper">
        <Outlet/>
      </PageContainer>
    </div>
  );
};

export default DashboardLayout;

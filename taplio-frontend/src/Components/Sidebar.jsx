import {
  Article,
  Campaign,
  Create,
  ExpandLess,
  ExpandMore,
  LinkedIn,
  Menu,
  Person,
  Psychology,
  Search,
} from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Logo_Rec (1).png";

const Sidebar = () => {
  const [toggle, setToggle] = useState();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      className={`min-h-full bg-white fixed left-0 top-0 shadow-xl flex flex-col py-10 px-3 ease-in-out duration-200 ${
        toggle ? "w-[300px]" : " w-20 "
      }`}
      onPointerLeave={() => setToggle(false)}
      onMouseEnter={() => setToggle(true)}
    >
      {toggle && (
        <div className="w-full flex justify-center  ">
          <img src={logo} alt="" className="w-[130px]" />
        </div>
      )}
      <div className="mt-5 h-full flex flex-col ">
        {!toggle && (
          <IconButton
            className="h-16 w-16 "
            onMouseEnter={() => setToggle(true)}
          >
            <Menu className="text-black " />
          </IconButton>
        )}

        <IconButton className="h-14 w-full flex text-center hover:!bg-[#2f5081] !bg-[#2f5081] !px-4 !rounded-lg ">
          <Create className="text-white " />
          {toggle && (
            <span
              className={`!text-[16px] text-white ml-5 ${
                !toggle && "scale-0"
              } duration-100 ease-in-out`}
            >
              Write a Post
            </span>
          )}
        </IconButton>

        <IconButton
          className=" !mt-5 h-16 w-full flex !justify-start !text-center !rounded-lg !px-4"
          onClick={() => navigate("queue")}
          sx={{
            minWidth: 260,
          }}
        >
          <Article className="text-black " />
          {toggle && (
            <span className="!text-[16px] text-black ml-5">My Shedule</span>
          )}
        </IconButton>
        {!toggle ? (
          <IconButton className="h-16 w-16">
            <Psychology className="text-black mr-2" />
          </IconButton>
        ) : (
          <List
            sx={{
              minWidth: 260,
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="text-black min-h-full"
          >
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon className="mr-3">
                <Psychology className="text-black  " />
              </ListItemIcon>
              <ListItemText primary="Content Inspiration" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate("viral")}
                >
                  <ListItemIcon>
                    <Campaign />
                  </ListItemIcon>
                  <ListItemText primary="Viral Content" />
                </ListItemButton>

                <ListItemButton
                  sx={{ pl: 4 }}
                  onClick={() => navigate("searchmode")}
                >
                  <ListItemIcon>
                    <Search />
                  </ListItemIcon>
                  <ListItemText primary="Search mode" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        )}

        <IconButton
          className="  h-16 w-full flex !justify-start !text-center !rounded-lg !px-4"
          onClick={() => navigate("/cntlinkdIn")}
          sx={{
            minWidth: 260,
          }}
        >
          <LinkedIn className="text-black " />
          {toggle && (
            <span className="!text-[16px] text-black ml-5">
              Connect Your LinkedIn Account
            </span>
          )}
        </IconButton>
      </div>

      <div className="mt-auto">
        <IconButton className="h-16 w-16 !bg-zinc-300">
          <Person className="text-black " />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
// import CharAccordion from "./CharAccordion.js";
// import Stack from '@mui/material/Stack';

import { Link } from "react-router-dom";

export default function TempDrawer({ match, handleChipClick }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  let chipList = match.map((elem, idx) => (
    <Chip
      avatar={<Avatar alt={elem.name} src={elem.image} />}
      label={elem.name}
      variant="outlined"
      onClick={(event) => handleChipClick(event.target.outerText)}
    />
  ));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          to="/characters"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ListItem disablePadding>
            <h3>Characters</h3>
          </ListItem>
        </Link>
      </List>

      <List>
        {/* <CharAccordion/> */}

        {chipList}
      </List>

      <Divider />
    </Box>
  );

  return (
    <div>
      <h2 color="primary"> See Full List</h2>

      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <ViewListOutlinedIcon
            sx={{ fontSize: 100 }}
            color="disabled"
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </ViewListOutlinedIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

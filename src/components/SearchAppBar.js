import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import TempDrawer from './TempDrawer'
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "secondary",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({handleSearch}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <TempDrawer />

          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >

          <Link to="/">
             <img src="https://tinyurl.com/yr2xmb23" alt="logo" width ='60' height='60'/>
          </Link>

          </Typography>

          <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Home</Button>
          </Link>

          <Link to="/characters" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Characters</Button>
          </Link>

          <Link to="/houses" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Houses</Button>
          </Link>

          <Link to="/orders" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Orders</Button>
          </Link>

          {/* <Link to="/tree" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Tree</Button>
          </Link> */}

          <Link to="/battle" style={{ textDecoration: 'none', color: 'white'}}>
            <Button variant="contained">Battle</Button>
          </Link>



          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onBlur={(event) => handleSearch(event)}
              onKeyUp={(event) => {
                if (event.key === "Enter") {handleSearch(event)}
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
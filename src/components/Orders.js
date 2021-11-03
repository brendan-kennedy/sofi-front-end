// import React, {useState, useEffect } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import '../App.css';





function Orders ({match}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

        return (
          <main>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="NIGHTS WATCH"
              />
              <CardMedia
                component="img"
                height="194"
                image= "url" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />



            </Card>
        </main>
          );
        }

export default Orders;
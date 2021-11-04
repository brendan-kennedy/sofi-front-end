import React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { flexbox } from '@mui/system';
import IconButton from "@mui/material/IconButton";
import '../App.css';

function Battle() {
    return (

  <section>
      <main>
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="JON SNOW"
        />
        <CardMedia
          component="img"
          height="194"
          image= "url" alt="Logo"
          alt="Sorry you cant see our badass Pokemon"
        />
      </Card>
      <Button variant="contained">Select Your Opponent</Button>
    </Box>

    <Box>
      <Button variant="contained">BATTLE!</Button>
    </Box>

    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title="JAMIE LANISTER"
        />
        <CardMedia
          component="img"
          height="194"
          image= "url" alt="Logo"
          alt="Sorry you cant see our badass Pokemon"
        />
      </Card>
      <Button variant="contained">Select Your Opponent</Button>
    </Box>
  </main>

        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
          <h1>JON SNOW DECLARES VICTORY!</h1>
        </Box>
  </section>


    );
  }

  export default Battle;

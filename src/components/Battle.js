import React from 'react';
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DuelAcc from "../components/DuelAcc.js";
import TempDrawerDuel from "../components/TempDrawerDuel.js";
import '../App.css';

function Battle() {
    return (

  <section>
      <main>
    <Box>
      <Card sx={{ maxWidth: 345}}>
        <CardHeader
          title="JON SNOW"
        />
        <CardMedia
          component="img"
          height="194"
          image= "url" alt="Logo"
        />
      </Card>

      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <TempDrawerDuel/>
        </Box>

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

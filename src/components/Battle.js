import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DuelAcc from "../components/DuelAcc.js";
import TempDrawerDuel from "../components/TempDrawerDuel.js";
import "../App.css";

function Battle({ match, matchfull, handleChipClick }) {
  console.log("Match: ", match);
  return (
    <section>
      <main>
        <Box>

          {/* USER CARD */}
          <Card sx={{ maxWidth: 345 }}>
            {console.log("Match: ", match[0].name)}
            <CardHeader title= {match[0] ? match[0].name : ""} />
            {/* {match[0] ? match[0].order : ""} */}
            <CardMedia component="img" height="194" image={match[0] ? match[0].image : ""} alt="Logo" />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <TempDrawerDuel match={matchfull} handleChipClick={handleChipClick} />
          </Box>
        </Box>

        <Box>
          <Button variant="contained">BATTLE!</Button>
        </Box>

        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title="JAMIE LANISTER" />
            <CardMedia component="img" height="194" image="url" alt="Logo" />
          </Card>
          <Button variant="contained">Select Your Opponent</Button>
        </Box>
      </main>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h1>JON SNOW DECLARES VICTORY!</h1>
      </Box>
    </section>
  );
}

export default Battle;

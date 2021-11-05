import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DuelAcc from "../components/DuelAcc.js";
import TempDrawerDuel from "../components/TempDrawerDuel.js";
import "../App.css";

function Battle({ match, matchfull, handleChipClick }) {

  useEffect(() => {
    fetchResults();
  }, []);

  const [results, setResults] = useState([]);
  const [randomChar, setRandomChar] = useState({});

  const fetchResults = async () => {
    const data = await fetch("http://localhost:3001/GOT/characters");

    const results = await data.json();
    console.log(results.characters);
    setResults(results.characters);
  };


  const handleClick = () => {
    console.log("Clicker");
    let randomNumber = Math.floor(Math.random() * (results.length - 1));
    console.log("Random: ", randomNumber);
    let charSelectedByRandomNumber = results.find(
      (elem, index) => index === randomNumber
    );
    setRandomChar(charSelectedByRandomNumber);
    console.log(charSelectedByRandomNumber);
  };


  return (
    <section>
      <main>
        <Box>
              {/* USER CARD */}
              <Card sx={{ maxWidth: 345 }}>
                {console.log("Champion: ", match[0])}
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
              <CardHeader title={randomChar?.name} />
              <CardMedia
                component="img"
                height="194"
                image= {randomChar?.image}
                alt={`This character has no image. Sad ${randomChar?.name || 'character'} :(`}
              />
            </Card>

            <Button variant="contained" onClick={() => handleClick()}>
              Select Your Opponent
            </Button>
        </Box>

      </main>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <h1>JON SNOW DECLARES VICTORY!</h1>
        </Box>
    </section>
  );
}

export default Battle;

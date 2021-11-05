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
  const [results, setResults] = useState([]);
  const [randomChar, setRandomChar] = useState({});
  let [victor, setVictor] = useState("FIGHT");

  const fetchResults = async () => {
    const data = await fetch("http://localhost:3001/GOT/characters");

    const results = await data.json();
    console.log(results.characters);
    setResults(results.characters);
  };


  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * (results.length - 1));
    let charSelectedByRandomNumber = results.find(
      (elem, index) => index === randomNumber
      );
      setRandomChar(charSelectedByRandomNumber);
      console.log("Opponent: ", charSelectedByRandomNumber);
    };

    const handleDuel = () =>{
      let UserChar = match[0].attack_value ? match[0].attack_value : 1;
      let OpponentChar = randomChar.attack_value ? randomChar.attack_value : 1;

      console.log ("VALUES for user", match[0].attack_value);

      if (OpponentChar < UserChar){
        setVictor(`${match[0].name} is declared the Ruler of Westoros!`);
      }else{
        setVictor(`${randomChar.name} is declared the Ruler of Westoros!`);
      };
      console.log("Victor: ", victor)
    }

    useEffect(() => {
      fetchResults();
      handleChipClick("Jon Snow");
      handleClick();
    }, []);

    return (
      <section>
      <main>
        <Box>
          {/* USER CARD */}
          <Card sx={{ maxWidth: 345 }}>
            {console.log("Champion: ", match[0])}
            <CardHeader title={match[0] ? match[0].name : ""} />
            {/* {match[0] ? match[0].order : ""} */}
            <CardMedia
              component="img"
              height="194"
              image={match[0] ? match[0].image : ""}
              alt="Logo"
            />
          </Card>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <TempDrawerDuel
              match={matchfull}
              handleChipClick={handleChipClick}
            />
          </Box>
        </Box>

        {/* BATTLE BUTTON */}
        <Box>
          <Button variant="contained" onClick={() => handleDuel()}>
            BATTLE!
          </Button>
        </Box>

        {/* OPPONENT CARD */}
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={randomChar?.name} />
            <CardMedia
              component="img"
              height="194"
              image={randomChar?.image}
              alt={`This character has no image. Sad ${
                randomChar?.name || "character"
              } :(`}
            />
          </Card>

          <Button variant="contained" onClick={() => handleClick()}>
            Select Your Opponent
          </Button>
        </Box>
      </main>

      {/* RESULT MESSAGE */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <h1>{victor}</h1>
      </Box>
    </section>
  );
}

export default Battle;



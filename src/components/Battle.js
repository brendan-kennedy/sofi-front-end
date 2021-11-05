import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TempDrawerDuel from "../components/TempDrawerDuel.js";
import "../App.css";
import Sound from 'react-sound';
import song from '../song.mp3';

function Battle({ match, matchfull, handleChipClick,
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying }) {
  const [results, setResults] = useState([]);
  const [randomChar, setRandomChar] = useState({});
  let [victor, setVictor] = useState("Battle Characters To Find The True Ruler of Westeros!");
  const [isPlaying, setIsPlaying] = useState(false);

  //Fetch for Opponent Card
  const fetchResults = async () => {
    const data = await fetch("http://localhost:3001/GOT/characters");

    const results = await data.json();
    setResults(results.characters);
  };

     // Handler For Opponent Card
  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * (results.length - 1));
    let charSelectedByRandomNumber = results.find(
      (elem, index) => index === randomNumber
      );
      setRandomChar(charSelectedByRandomNumber);
    };

        // Handler Battle - compares strength for user and opponent cards
    const handleDuel = () =>{
      let UserChar = match[0].attack_value ? match[0].attack_value : 1;
      let OpponentChar = randomChar.attack_value ? randomChar.attack_value : 1;

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
          <Card sx={{ maxWidth: 290 }}>
            <CardHeader title={match[0] ? match[0].name : ""} />
            <CardMedia
              component="img"
              height="194"
              maxwidth="290"
              image={match[0] ? match[0].image : ""}
              alt={`This character has no image. Sad ${match[0]?.name || "character"
              } :(`}
            />
          </Card>

          <Box>
            <TempDrawerDuel
              match={matchfull}
              handleChipClick={handleChipClick}
            />
          </Box>
        </Box>

        {/* BATTLE BUTTON */}
        <Box>
              <Button variant="contained" onClick={() => {
              handleDuel();
                setIsPlaying(true);
                // setIsPlaying(!isPlaying);
                }}>
                BATTLE FOR THE CROWN OF WESTEROS!
              </Button>

              <Sound
            url= {song}
            playStatus={
              isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
            }
            playFromPosition={300}
            onLoading={handleSongLoading}
            onPlaying={handleSongPlaying}
            onFinishedPlaying={handleSongFinishedPlaying}
            />
        </Box>

        {/* OPPONENT CARD */}
        <Box>
          <Card sx={{ maxWidth: 290 }}>
            <CardHeader title={randomChar?.name} />
            <CardMedia
              component="img"
              height="194"
              maxwidth="290"
              image={randomChar?.image}
              alt={`This character has no image. Sad ${
                randomChar?.name || "character"
              } :(`}
            />

          </Card>

                {/* Select Random Opponent */}
          <Button variant="contained" onClick={() => {
            handleClick();
            setIsPlaying(false)}}>
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



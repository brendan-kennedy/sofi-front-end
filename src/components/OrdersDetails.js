import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

function Characters() {
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
  // ddd

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
      <Button variant="contained" onClick={() => handleClick()}>
        Primary
      </Button>

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


      </Box>
    </section>
  );
}

export default Characters;

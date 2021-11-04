import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function Characters() {
  useEffect(() => {
    fetchResults();
  }, []);

  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const data = await fetch("http://localhost:3001/GOT/test");

    const results = await data.json();
    console.log(results.characters);
    setResults(results.characters);
  };

  const handleClick = () => {
    console.log("Clicker");
    let randomNumber = Math.floor(Math.random() * (results.length - 1));
    console.log("Random: ", randomNumber);
    let randomChar = results.find((elem, index) => index === randomNumber);
    console.log("Random Character: ", randomChar);
  };

  return (
    <Button variant="contained" onClick={() => handleClick()}>
      Primary
    </Button>

<Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="JAMIE LANISTER" />
      <CardMedia component="img" height="194" image="url" alt="Logo" />
    </Card>
    <Button variant="contained">Select Your Opponent</Button>
</Box>
  );
}

export default Characters;

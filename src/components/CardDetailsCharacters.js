import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";

function CardDetailsCharacters({ dataCard, handleChipClick }) {
  return (
    <div>
      <Typography paragraph>
        Royal: {dataCard[0] ? (dataCard[0].royalty ? "Royal" : "Commoner") : ""}
      </Typography>
      <Typography paragraph>
        House: {dataCard[0] ? dataCard[0].house : ""}
      </Typography>
      <Typography paragraph>
        Orders: {dataCard[0] ? dataCard[0].order : ""}
      </Typography>
    </div>
  );
}

export default CardDetailsCharacters;

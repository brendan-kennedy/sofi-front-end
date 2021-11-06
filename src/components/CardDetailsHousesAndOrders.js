import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

function CardDetailsHousesAndOrders({ dataCard, handleChipClick }) {

  return (
    <Typography>
      {dataCard.map((element, index) => (
        <Chip
          key="index"
          avatar={<Avatar alt={element.name} src={element.image} />}
          label={element.name}
          variant="outlined"
          onClick={(event) =>
            handleChipClick(event.target.outerText, window.location.pathname.slice(1, -1))
          }
        />
      ))}
    </Typography>
  );
}

export default CardDetailsHousesAndOrders;

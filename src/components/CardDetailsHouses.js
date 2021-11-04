import React from "react";
import "../App.css";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

function CardDetailsHouses({ match, handleChipClick }) {

  return (
    <Typography>
      {/* {handleChipClick(match[0].name, window.location.pathname)} */}
      {match.map((elem, idx) => (
        <Chip
          key="idx"
          avatar={<Avatar alt={elem.name} src={elem.image} />}
          label={elem.name}
          variant="outlined"
          onClick={(event) =>
            handleChipClick(event.target.outerText, window.location.pathname)
          }
        />
      ))}
    </Typography>
  );
}

export default CardDetailsHouses;

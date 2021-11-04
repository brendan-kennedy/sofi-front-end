import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function SimpleAccordion({ match, handleChipClick }) {

  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const fullAlphabet = alphabet.map((elem, idx) => (
    <Accordion key="idx">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{elem}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {match
            .filter((felem) => felem.name.slice(0, 1) === elem)
            .map((melem, midx) => (
              <Chip
                key="midx"
                avatar={<Avatar alt={melem.name} src={melem.image} />}
                label={melem.name}
                variant="outlined"
                onClick={(event) => handleChipClick(event.target.outerText, window.location.pathname)}
              />
            ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return <div>{fullAlphabet}</div>;
}

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

export default function SimpleAccordion({ match, handleChipClick }) {

  let alphabet = [];

  const emptyCheck = match.map(elem => {
    if (!alphabet.includes(elem.name.slice(0, 1))) {
      alphabet.push(elem.name.slice(0, 1).toUpperCase());
    }
    alphabet = alphabet.sort();
  })

  const fullAlphabet = alphabet.map((elem, idx) => (
    <Accordion key="idx">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        // sx={{display: 'none'}}
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
                onClick={(event) =>
                  handleChipClick(
                    event.target.outerText,
                    window.location.pathname
                  )
                }
              />
            ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));

  return <div>{fullAlphabet}</div>;
}

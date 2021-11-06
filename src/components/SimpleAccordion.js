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

  const emptyCheck = match.map(element => {
    if (!alphabet.includes(element.name.slice(0, 1))) {
      alphabet.push(element.name.slice(0, 1).toUpperCase());
    }
    alphabet = alphabet.sort();
  })

  const fullAlphabet = alphabet.map((element, index) => (
    <Accordion key="index">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{element}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {match
            .filter((felement) => felement.name.slice(0, 1) === element)
            .map((melement, mindex) => (
              <Chip
                key="mindex"
                avatar={<Avatar alt={melement.name} src={melement.image} />}
                label={melement.name}
                variant="outlined"
                onClick={(event) =>
                  handleChipClick(
                    event.target.outerText,
                    window.location.pathname.slice(1, -1)
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
